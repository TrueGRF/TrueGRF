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
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/git/trees/${tree}?recursive=1`);

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
            content: btoa(content),
            branch: "dev",
        }),
    });
    if (response.status != 200) {
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

async function updateReference(accessToken, project, branch, reference) {
    const response = await fetch(`https://api.github.com/repos/${project}/git/refs/heads/${branch}`, {
        method: "PATCH",
        headers: {
            accept: "application/vnd.github.v3+json",
            authorization: `token ${accessToken}`,
        },
        body: JSON.stringify({
            sha: reference,
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
            const resultCommit = await doApiCall(accessToken, `https://api.github.com/repos/${project}/git/commits/${branch.commit.sha}`);

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
            const resultNewCommit = await createCommit(accessToken, project, commitMessage, resultTree.sha, branch.commit.sha);
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

export async function forkProject(accessToken, project, name) {
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

    /* Wait till the project is available via the API, for at most 5 seconds. */
    for (let i = 0; i < 10; i++) {
        try {
            await updateTopics(accessToken, userProject, ["truegrf"]);
            break;
        } catch (e) {
            await sleep(500);
        }
    }

    return userProject;
}

export async function refreshRepositories(accessToken, url, page) {
    const result = await doApiCall(
        accessToken,
        `https://api.github.com/${url}?sort=created&direction=asc&per_page=100&page=${page}`
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
