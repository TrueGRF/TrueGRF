import yaml from "js-yaml";

import { licenses } from "$lib/licenses/licenses";

async function doApiCall(accessToken, url) {
    const response = await fetch(url, {
        cache: "no-cache",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
    });
    if (response.status != 200) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

export async function getFile(accessToken, project, blob) {
    /* We do not have an up-to-date result, so fetch the file. */
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/git/blobs/${blob}`);
    return result.content;
}

export async function getTree(accessToken, project, tree) {
    const result = await doApiCall(
        accessToken,
        `https://api.github.com/repos/${project}/git/trees/${tree}?recursive=1`
    );

    const files = [];
    for (const file of result.tree) {
        if (file.type !== "blob") continue;

        files.push({
            path: file.path,
            sha: file.sha,
        });
    }

    return files;
}

export async function getCommit(accessToken, project, commit) {
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/git/commits/${commit}`);
    return await getTree(accessToken, project, result.tree.sha);
}

function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function getLatestCommit(accessToken, project) {
    /* Get all the active branches. */
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/branches`);

    /* Try "dev" branch first. */
    let branch = result.find((branch) => branch.name === "dev");
    if (!branch) {
        /* If not found, try "main" branch. */
        branch = result.find((branch) => branch.name === "main");
        if (branch) {
            /* Create "dev" branch based on "main" branch. */
            await createReference(accessToken, project, "dev", branch.commit.sha);
        }
    }
    /* Still no branch found; give up. */
    if (!branch) {
        throw new Error("No default branch found.");
    }

    return await getCommit(accessToken, project, branch.commit.sha);
}

export async function updateFile(accessToken, project, commitMessage, sha, path, content) {
    const url = `https://api.github.com/repos/${project}/contents/${path}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            message: commitMessage + "\n\nCo-authored-by: TrueGRF <truegrf@truebrain.nl>",
            sha: sha,
            content: path.endsWith(".png") ? content : btoa(content),
            branch: "dev",
        }),
    });
    if (response.status != 200 && response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

async function createBlob(accessToken, project, content) {
    const response = await fetch(`https://api.github.com/repos/${project}/git/blobs`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            content,
        }),
    });
    if (response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

async function createTree(accessToken, project, tree, base_tree) {
    const response = await fetch(`https://api.github.com/repos/${project}/git/trees`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            tree,
            base_tree,
        }),
    });
    if (response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

async function createCommit(accessToken, project, commitMessage, tree, parent) {
    const response = await fetch(`https://api.github.com/repos/${project}/git/commits`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            message: commitMessage + "\n\nCo-authored-by: TrueGRF <truegrf@truebrain.nl>",
            tree,
            parents: [parent],
        }),
    });
    if (response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

async function createReference(accessToken, project, branch, reference) {
    const response = await fetch(`https://api.github.com/repos/${project}/git/refs`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            ref: `refs/heads/${branch}`,
            sha: reference,
        }),
    });
    if (response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

async function updateReference(accessToken, project, branch, reference, force?) {
    if (force === undefined) {
        force = false;
    }

    const response = await fetch(`https://api.github.com/repos/${project}/git/refs/heads/${branch}`, {
        method: "PATCH",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            sha: reference,
            force: force,
        }),
    });
    if (response.status != 200) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
}

export async function renameFile(accessToken, project, commitMessage, renameList) {
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/branches`);

    for (const branch of result) {
        if (branch.name === "dev") {
            const resultCommit = await doApiCall(
                accessToken,
                `https://api.github.com/repos/${project}/git/commits/${branch.commit.sha}`
            );

            const tree = [];
            for (const rename of renameList) {
                const mode = rename.type == "file" ? "100644" : "100755";
                const type = rename.type == "file" ? "blob" : "directory";

                tree.push({
                    path: rename.newPath,
                    sha: rename.sha,
                    mode,
                    type,
                });
                tree.push({
                    path: rename.oldPath,
                    sha: null,
                    mode,
                    type,
                });
            }

            const resultTree = await createTree(accessToken, project, tree, resultCommit.tree.sha);
            const resultNewCommit = await createCommit(
                accessToken,
                project,
                commitMessage,
                resultTree.sha,
                branch.commit.sha
            );
            await updateReference(accessToken, project, "dev", resultNewCommit.sha);
        }
    }
}

export async function deleteFile(accessToken, project, commitMessage, renameList) {
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/branches`);

    for (const branch of result) {
        if (branch.name === "dev") {
            const resultCommit = await doApiCall(
                accessToken,
                `https://api.github.com/repos/${project}/git/commits/${branch.commit.sha}`
            );

            const tree = [];
            for (const rename of renameList) {
                const mode = rename.type == "file" ? "100644" : "100755";
                const type = rename.type == "file" ? "blob" : "directory";

                tree.push({
                    path: rename.oldPath,
                    sha: null,
                    mode,
                    type,
                });
            }

            const resultTree = await createTree(accessToken, project, tree, resultCommit.tree.sha);
            const resultNewCommit = await createCommit(
                accessToken,
                project,
                commitMessage,
                resultTree.sha,
                branch.commit.sha
            );
            await updateReference(accessToken, project, "dev", resultNewCommit.sha);
        }
    }
}

async function updateTopics(accessToken, project, topics) {
    const response = await fetch(`https://api.github.com/repos/${project}/topics`, {
        method: "PUT",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            names: topics,
        }),
    });
    if (response.status != 200) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }
}

export async function forkProject(accessToken, project, name, license) {
    const response = await fetch(`https://api.github.com/repos/${project}/generate`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            name,
            description: "A new TrueGRF project",
        }),
    });
    if (response.status != 201) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    const result = await response.json();
    const userProject = result.full_name;

    /* Wait till the project is available via the API, for at most 5 seconds. Update tht topics. */
    for (let i = 0; i < 10; i++) {
        try {
            await updateTopics(accessToken, userProject, ["truegrf"]);
            break;
        } catch (e) {
            await sleep(500);
        }
    }

    /* Update the entry YAML file. */
    const resultYaml = await doApiCall(
        accessToken,
        `https://api.github.com/repos/${userProject}/contents/truegrf.yaml`
    );
    const data = yaml.load(atob(resultYaml.content));

    let updateLicense = false;

    /* Set the URL correct, and update the license file if needed. */
    data.url = `https://github.com/${userProject}`;
    if (data.license !== license) {
        updateLicense = true;
        data.license = license;
    }

    const newContent = yaml.dump(data, {
        sortKeys: true,
        lineWidth: -1,
        noArrayIndent: true,
    });

    const blobYaml = await createBlob(accessToken, userProject, newContent);
    let blobLicense;
    if (updateLicense) {
        blobLicense = await createBlob(accessToken, userProject, licenses[license]);
    }

    const resultBranches = await doApiCall(accessToken, `https://api.github.com/repos/${userProject}/branches`);
    for (const branch of resultBranches) {
        if (branch.name === "main") {
            const resultCommit = await doApiCall(
                accessToken,
                `https://api.github.com/repos/${userProject}/git/commits/${branch.commit.sha}`
            );

            const tree = [];
            tree.push({
                path: "truegrf.yaml",
                sha: blobYaml.sha,
                mode: "100644",
                type: "blob",
            });
            if (updateLicense) {
                tree.push({
                    path: "LICENSE",
                    sha: blobLicense.sha,
                    mode: "100644",
                    type: "blob",
                });
            }

            const resultTree = await createTree(accessToken, userProject, tree, resultCommit.tree.sha);
            const resultNewCommit = await createCommit(
                accessToken,
                userProject,
                "chore: update URL" + (updateLicense ? ` and update license to ${license}` : ""),
                resultTree.sha,
                branch.commit.sha
            );
            await updateReference(accessToken, userProject, "main", resultNewCommit.sha);
        }
    }

    return userProject;
}

export async function refreshRepositories(accessToken, url, page) {
    const result = await doApiCall(
        accessToken,
        `https://api.github.com/${url}?sort=pushed&direction=desc&per_page=100&page=${page}`
    );

    let repositories = [];
    for (const repository of result) {
        if (repository.topics.indexOf("truegrf") === -1) continue;

        repositories.push({
            name: repository.name,
            full_name: repository.full_name,
            description: repository.description,
        });
    }

    /* Check if we reached the limit of the page; continue on next page if so. */
    if (result.length == 100) {
        repositories = repositories.concat(await refreshRepositories(accessToken, url, page + 1));
        return repositories;
    }

    return repositories;
}

export async function getLicense(accessToken, project) {
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/contents/truegrf.yaml`);
    const data = yaml.load(atob(result.content));

    return data.license;
}

export async function compareBranches(accessToken, project, base, head) {
    const result = await doApiCall(
        accessToken,
        `https://api.github.com/repos/${project}/compare/${base}...${head}?per_page=1`
    );

    return result;
}

export async function commitBranch(accessToken, project, commitMessage, filesList) {
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/branches`);
    for (const branch of result) {
        if (branch.name === "main") {
            const resultCommit = await doApiCall(
                accessToken,
                `https://api.github.com/repos/${project}/git/commits/${branch.commit.sha}`
            );

            const tree = [];
            for (const file of filesList) {
                tree.push({
                    path: file.filename,
                    sha: file.sha,
                    mode: "100644",
                    type: "blob",
                });
            }

            const resultTree = await createTree(accessToken, project, tree, resultCommit.tree.sha);
            const resultNewCommit = await createCommit(
                accessToken,
                project,
                commitMessage,
                resultTree.sha,
                branch.commit.sha
            );
            await updateReference(accessToken, project, "main", resultNewCommit.sha);
            await updateReference(accessToken, project, "dev", resultNewCommit.sha, true);
        }
    }
}

export async function getChangelog() {
    const response = await fetch("https://api.github.com/repos/TrueGRF/TrueGRF/releases", {
        cache: "no-cache",
        headers: {
            accept: "application/vnd.github.v3+json",
        },
    });
    if (response.status != 200) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    const releases = [];
    for (const release of await response.json()) {
        releases.push({
            body: release.body,
            name: release.name,
            published_at: release.published_at,
        });
    }

    return releases;
}

export async function markdownToHtml(project, text) {
    const response = await fetch(`https://api.github.com/markdown`, {
        method: "POST",
        headers: {
            accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
            text,
            mode: "gfm",
            context: project,
        }),
    });
    if (response.status != 200) {
        throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
    }

    return await response.text();
}
