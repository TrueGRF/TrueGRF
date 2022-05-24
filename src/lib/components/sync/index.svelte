<script lang="ts">
    import yaml from "js-yaml";
    import slug from "slug";

    import { updateFile, renameFile } from "$lib/helpers/github";

    export let project = "";
    export let accessToken = "";

    const typeToFolder = {
        cargo: "cargoes",
        industry: "industries",
    };

    function getFromDatabase(file) {
        return new Promise((resolve) => {
            const indexdb = indexedDB.open(project);
            indexdb.onsuccess = async function () {
                const db = indexdb.result;
                const transaction = db.transaction("files");
                const store = transaction.objectStore("files");

                const request = store.get(file);

                request.onsuccess = async function () {
                    resolve(request.result);
                };
            };
        });
    }

    export async function CheckCommitChanges(images, selected) {
        if (selected.type == "none") {
            return;
        }

        if (selected.type !== "general") {
            /* We need to copy these, as we are async, and selected will change before we are done. */
            const type = selected.type;
            const folder = typeToFolder[type];
            let userdata = undefined;

            const newName = selected.item.name;
            const oldName = selected.name;

            const newFilename = slug(newName, { lower: true });
            const oldFilename = slug(oldName, { lower: true });
            const newPath = `${folder}/${newFilename}.yaml`;
            const oldPath = `${folder}/${oldFilename}.yaml`;

            /* Update the filename of the sprite to use. */
            if (type === "cargo") {
                selected.item.sprite.filename = `${folder}/${newFilename}.png`;
            } else if (type === "industry") {
                userdata = [];

                for (let tile of selected.item.tiles) {
                    for (let sprite of tile.sprites) {
                        if (sprite.sprite.filename !== undefined) {
                            const id = sprite.sprite.filename.split("/").pop().split(".")[0];
                            userdata.push(id);

                            sprite.sprite.filename = `${folder}/${newFilename}/${id}.png`;
                        }
                    }
                }
            }

            const newContent = yaml.dump(selected.item, {
                sortKeys: true,
                lineWidth: -1,
                noArrayIndent: true,
            });

            const fileList = [];

            const oldResult = await getFromDatabase(oldPath);
            fileList.push({
                oldPath,
                newPath,
                sha: oldResult.sha,
                type: "file",
                content: oldResult.content,
                newContent,
            });

            if (type === "cargo") {
                const oldPng = await getFromDatabase(`${folder}/${oldFilename}.png`);
                fileList.push({
                    oldPath: `${folder}/${oldFilename}.png`,
                    newPath: `${folder}/${newFilename}.png`,
                    sha: oldPng.sha,
                    type: "file",
                    content: oldPng.content,
                    newContent: images[`${folder}/${oldFilename}.png`],
                });
            } else if (type === "industry") {
                for (let id of userdata) {
                    const oldPng = await getFromDatabase(`${folder}/${oldFilename}/${id}.png`);
                    fileList.push({
                        oldPath: `${folder}/${oldFilename}/${id}.png`,
                        newPath: `${folder}/${newFilename}/${id}.png`,
                        sha: oldPng.sha,
                        type: "file",
                        content: oldPng.content,
                        newContent: images[`${folder}/${oldFilename}.png`],
                    });
                }
            }

            /* Rename first (without modification). */
            if (newFilename !== oldFilename) {
                await renameFile(accessToken, project, `rename(${type}): ${oldName} -> ${newName}`, fileList);

                const indexdb = indexedDB.open(project);
                indexdb.onsuccess = async function () {
                    const db = indexdb.result;
                    const transaction = db.transaction("files", "readwrite");
                    const store = transaction.objectStore("files");

                    /* Update the IndexedDB with the new name. */
                    for (let file of fileList) {
                        store.put({
                            path: file.newPath,
                            sha: file.sha,
                            content: file.content,
                        });
                        store.delete(file.oldPath);

                        if (file.newPath.endsWith(".png")) {
                            images[file.newPath] = images[file.oldPath];
                            delete images[file.oldPath];
                        }
                    }
                };
            }

            /* Commit the changed files one by one to GitHub. */
            for (let file of fileList) {
                if (file.content !== file.newContent) {
                    const response = await updateFile(
                        accessToken,
                        project,
                        `modified(${type}): ${newName}`,
                        file.sha,
                        file.newPath,
                        file.newContent
                    );

                    const indexdb = indexedDB.open(project);
                    indexdb.onsuccess = async function () {
                        const db = indexdb.result;
                        const transaction = db.transaction("files", "readwrite");
                        const store = transaction.objectStore("files");

                        /* Update our internal storage with the latest version. */
                        store.put({
                            path: file.newPath,
                            sha: response.content.sha,
                            content: file.newContent,
                        });
                    };
                }
            }
        } else {
            const newContent = yaml.dump(selected.item, {
                sortKeys: true,
                lineWidth: -1,
                noArrayIndent: true,
            });

            const oldResult = await getFromDatabase("truegrf.yaml");

            if (oldResult.content !== newContent) {
                /* Commit the file to GitHub. */
                const response = await updateFile(
                    accessToken,
                    project,
                    `modified: project information`,
                    oldResult.sha,
                    "truegrf.yaml",
                    newContent
                );

                const indexdb = indexedDB.open(project);
                indexdb.onsuccess = async function () {
                    const db = indexdb.result;
                    const transaction = db.transaction("files", "readwrite");
                    const store = transaction.objectStore("files");

                    /* Update our internal storage with the latest version. */
                    store.put({
                        path: "truegrf.yaml",
                        sha: response.content.sha,
                        content: newContent,
                    });
                };
            }
        }
    }
</script>

<div class="project">
    Project: <a target="_new" href="https://github.com/{project}">{project}</a>
</div>

<style>
    .project {
        position: absolute;
        top: 30px;
        right: 20px;
    }
</style>
