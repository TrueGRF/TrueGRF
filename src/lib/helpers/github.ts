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

export async function getLatestCommit(accessToken, project) {
    /* Fetch the latest commit on the repository default branch. */
    const result = await doApiCall(accessToken, `https://api.github.com/repos/${project}/branches`);

    /* Find the dev branch. */
    for (const branch of result) {
        if (branch.name === "dev") {
            return await getCommit(accessToken, project, branch.commit.sha);
        }
    }

    /* No dev branch found; find the main branch, and create the dev branch based on it. */
    for (const branch of result) {
        if (branch.name === "main") {
            await createReference(accessToken, project, "dev", branch.commit.sha);
            return await getCommit(accessToken, project, branch.commit.sha);
        }
    }

    /* No main branch either. Unsupported situation. */
    throw new Error(`GitHub API error: no dev nor main branch found`);
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
