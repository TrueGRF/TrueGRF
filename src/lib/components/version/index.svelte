<script lang="ts">
    import { onMount } from "svelte";

    import { Accordion, AccordionItem } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import { SkeletonText } from "carbon-components-svelte";

    import { getChangelog, markdownToHtml } from "$lib/helpers/github";

    const version = __version__;

    let newVersion = false;
    let changelogOpen = false;
    let changelog = [];
    let versionUser;

    async function OpenChangelog() {
        newVersion = false;
        changelogOpen = true;

        /* Load the changelog if it isn't loaded yet. */
        if (changelog.length === 0) {
            changelog = await getChangelog();
        }
    }

    async function OnVersionClick(version) {
        if (version.html !== undefined) return;

        version.html = await markdownToHtml("TrueGRF/TrueGRF", version.body);
        version.html = version.html.replace(/<a /g, '<a target="new" ');

        /* Inform Svelte the array has changed. */
        changelog = changelog;
    }

    onMount(async () => {
        versionUser = window.localStorage.getItem("version") || version;
        window.localStorage.setItem("version", version);
        newVersion = versionUser !== version;
    });
</script>

<div class="version">
    <div on:click={() => OpenChangelog()}>
        {version}
        {#if newVersion}
            <span class="badge" />
        {/if}
    </div>

    <Modal
        size="lg"
        bind:open={changelogOpen}
        modalHeading="What is new?"
        primaryButtonText="Close"
        on:click:button--primary={() => (changelogOpen = false)}
    >
        <Accordion size="sm" skeleton={changelog.length === 0} open={false}>
            {#each changelog as version}
                <AccordionItem title={version.name} on:click={() => OnVersionClick(version)}>
                    {#if version.html === undefined}
                        <SkeletonText paragraph />
                    {:else}
                        {@html version.html}
                    {/if}
                </AccordionItem>
            {/each}
        </Accordion>
    </Modal>
</div>

<style>
    .version {
        text-align: left;
    }

    .badge {
        background-color: var(--cds-support-error-inverse, #fa4d56);
        border-radius: 8px;
        display: inline-block;
        height: 11px;
        position: relative;
        width: 11px;
        top: -6px;
        left: -3px;
    }

    .version :global(.bx--accordion__content) {
        padding-right: 10px;
    }

    .version :global(h2) {
        display: none;
    }
    .version :global(p) {
        margin-bottom: 10px;
        margin-top: 10px;
    }
</style>
