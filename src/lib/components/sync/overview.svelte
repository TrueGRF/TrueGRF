<script lang="ts">
    import { onMount } from "svelte";

    import { commitBranch, compareBranches } from "$lib/helpers/github";

    import { Button } from "carbon-components-svelte";
    import { InlineLoading } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import {
        StructuredList,
        StructuredListHead,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
    } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    import TextInput from "$lib/components/ui/text-input.svelte";

    export let project = "";
    export let accessToken = "";
    export let changesPending = false;

    let filesChanged = [];
    let commitDialogOpen = false;
    let commitMessage = "";
    let committing = false;

    export async function Refresh() {
        const compare = await compareBranches(accessToken, project, "main", "dev");

        filesChanged = [];
        for (const file of compare.files) {
            const type = file.filename.split("/")[0];
            const name = file.filename.split("/").pop().split(".")[0];
            const extension = file.filename.split("/").pop().split(".")[1];

            filesChanged.push({
                type,
                name,
                extension,
                filename: file.filename,
                sha: file.status === "removed" ? null : file.sha,
                status: file.status,
                hide: false,
            });

            if (file.previous_filename !== undefined) {
                filesChanged.push({
                    type,
                    name,
                    extension,
                    filename: file.previous_filename,
                    sha: null,
                    status: "removed",
                    hide: true,
                });
            }
        }

        filesChanged = filesChanged;
        changesPending = filesChanged.length !== 0;
    }

    let firstValidate = true;
    function ValidateCommitMessage(value) {
        if (value === "" && !firstValidate) {
            return "Commit message cannot be empty";
        }

        firstValidate = false;
    }

    async function CommitChanges() {
        commitDialogOpen = false;
        committing = true;

        await commitBranch(accessToken, project, commitMessage, filesChanged);
        await Refresh();

        committing = false;
    }
</script>

<div>
    {#if committing === true}
        <InlineLoading description="Committing pending changes ..." />
    {:else if changesPending === false}
        You have no pending changes in this project.
    {:else}
        <div>
            Below is a list of changes that are pending.<br />
            <span class="bx--label">Pending changes are not yet committed and will not be part of any new release.</span
            >
        </div>

        <Button
            size="small"
            kind="primary"
            on:click={() => {
                commitMessage = "";
                firstValidate = true;
                commitDialogOpen = true;
            }}>Commit pending changes</Button
        >

        <StructuredList>
            <StructuredListHead>
                <StructuredListRow head>
                    <StructuredListCell head>Type</StructuredListCell>
                    <StructuredListCell head>
                        Filename
                        <div class="tooltip">
                            <Tooltip>
                                <p>
                                    Why is this name different from the actual name?<br />These are the filenames are in
                                    your repository. To make sure all filesystems can read/write those files, they are
                                    "slugified". Don't worry, this name is never used in-game; it is purely meant for
                                    TrueGRF to store these files on disk.
                                </p>
                            </Tooltip>
                        </div>
                    </StructuredListCell>
                    <StructuredListCell head>Status</StructuredListCell>
                </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
                {#each filesChanged as file}
                    {#if file.extension === "yaml" && file.hide === false}
                        <StructuredListRow>
                            <StructuredListCell>{file.type}</StructuredListCell>
                            <StructuredListCell>{file.name}</StructuredListCell>
                            <StructuredListCell>{file.status}</StructuredListCell>
                        </StructuredListRow>
                    {/if}
                {/each}
            </StructuredListBody>
        </StructuredList>
    {/if}

    <Modal
        bind:open={commitDialogOpen}
        modalHeading="Commit pending changes?"
        primaryButtonText="Commit"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (commitDialogOpen = false)}
        on:click:button--primary={() => CommitChanges()}
        primaryButtonDisabled={commitMessage === ""}
    >
        <TextInput
            labelText="Commit message"
            placeholder="Message that best describes this set of changes. Used in release-notes."
            bind:value={commitMessage}
            live
            validate={ValidateCommitMessage}
        />
    </Modal>
</div>

<style>
    .tooltip {
        display: inline-block;
    }
</style>
