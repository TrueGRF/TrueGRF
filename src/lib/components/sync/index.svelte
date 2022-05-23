<script lang="ts">
    import yaml from "js-yaml";
    import slugify from "slugify";

    import { updateFile, renameFile } from "$lib/helpers/github";

    export let project = "";
    export let accessToken = "";

    const typeToFolder = {
        "cargo": "cargoes",
        "industry": "industries",
    }

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
                }
            }
        });
    }

    export async function CheckCommitChanges(selected) {
        if (selected.type == "none") {
            return;
        }

        if (selected.type !== "general") {
            /* We need to copy these, as we are async, and selected will change before we are done. */
            const type = selected.type;
            const folder = typeToFolder[type];

            const newName = selected.item.name;
            const oldName = selected.name;

            const newFilename = slugify(newName.toLowerCase());
            const oldFilename = slugify(oldName.toLowerCase());
            const newPath = `${folder}/${newFilename}.yaml`;
            const oldPath = `${folder}/${oldFilename}.yaml`;

            /* Update the filename of the sprite to use. */
            if (type === "cargo") {
                selected.item.sprite.filename = `${folder}/${newFilename}.png`;
            }

            const newContent = yaml.dump(selected.item, {
                sortKeys: true,
                lineWidth: -1,
            });

            const oldResult = await getFromDatabase(oldPath);

            /* Rename first (without modification). */
            if (newFilename !== oldFilename) {
                const renameList = [];
                renameList.push({
                    oldPath,
                    newPath,
                    sha: oldResult.sha,
                    type: "file",
                    content: oldResult.content,
                });

                if (type == "cargo") {
                    const oldPng = await getFromDatabase(`${folder}/${oldFilename}.png`);
                    renameList.push({
                        oldPath: `${folder}/${oldFilename}.png`,
                        newPath: `${folder}/${newFilename}.png`,
                        sha: oldPng.sha,
                        type: "file",
                        content: oldPng.content,
                    });
                } else {
                    // TODO -- Implement this for industries
                }

                await renameFile(accessToken, project, `rename(${type}): ${oldName} -> ${newName}`, renameList);

                const indexdb = indexedDB.open(project);
                indexdb.onsuccess = async function () {
                    const db = indexdb.result;
                    const transaction = db.transaction("files", "readwrite");
                    const store = transaction.objectStore("files");

                    /* Update the IndexedDB with the new name. */
                    for (let file of renameList) {
                        store.put({
                            path: file.newPath,
                            sha: file.sha,
                            content: file.content,
                        });
                        store.delete(file.oldPath);
                    }
                }
            }

            if (oldResult.content !== newContent) {
                /* Commit the file to GitHub. */
                const response = await updateFile(accessToken, project, `modified(${type}): ${newName}`, oldResult.sha, newPath, newContent);

                const indexdb = indexedDB.open(project);
                indexdb.onsuccess = async function () {
                    const db = indexdb.result;
                    const transaction = db.transaction("files", "readwrite");
                    const store = transaction.objectStore("files");

                    /* Update our internal storage with the latest version. */
                    store.put({
                        path: newPath,
                        sha: response.content.sha,
                        content: newContent,
                    });
                }
            }
        } else {
            // TODO -- Support general
            return;
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
