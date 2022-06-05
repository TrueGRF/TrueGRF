<script lang="ts">
    import { onMount } from "svelte";

    import { Accordion, AccordionItem } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import { SkeletonText } from "carbon-components-svelte";
    import { Tabs, Tab, TabContent } from "carbon-components-svelte";

    import { getChangelog, markdownToHtml } from "$lib/helpers/github";

    const version = __VERSION__; // eslint-disable-line no-undef

    let newVersion = false;
    let changelogOpen = false;
    let changelog = [];
    let changelogCompiler = [];
    let versionUser;

    async function OpenChangelog() {
        newVersion = false;
        changelogOpen = true;

        /* Load the changelog if it isn't loaded yet. */
        if (changelog.length === 0) {
            changelog = await getChangelog("TrueGRF/TrueGRF");
            changelogCompiler = await getChangelog("TrueGRF/TrueGRF-rs");
        }
    }

    async function OnVersionClick(project, version) {
        if (version.html !== undefined) return;

        /* Remove the "Full Changelog" line and all the "by @<user>" parts of every line. */
        let body = version.body.replace(/\*\*Full Changelog(.*)/, "");
        body = body.replace(/ by @(.*)/g, "");
        version.html = await markdownToHtml(project, body);
        /* Make sure all links open a new window. */
        version.html = version.html.replace(/<a /g, '<a target="new" ');

        /* Inform Svelte the array has changed. */
        changelog = changelog;
        changelogCompiler = changelogCompiler;
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
        class="changelog"
    >
        <Tabs class="subnav">
            <Tab label="TrueGRF" />
            <Tab label="Compiler" />

            <svelte:fragment slot="content">
                <TabContent>
                    <Accordion size="sm" skeleton={changelog.length === 0} open={false}>
                        {#each changelog as version}
                            <AccordionItem
                                title={version.name}
                                on:click={() => OnVersionClick("TrueGRF/TrueGRF", version)}
                            >
                                {#if version.html === undefined}
                                    <SkeletonText />
                                {:else}
                                    {@html version.html}
                                {/if}
                            </AccordionItem>
                        {/each}
                    </Accordion>
                </TabContent>
                <TabContent>
                    <Accordion size="sm" skeleton={changelogCompiler.length === 0} open={false}>
                        {#each changelogCompiler as version}
                            <AccordionItem
                                title={version.name}
                                on:click={() => OnVersionClick("TrueGRF/TrueGRF-rs", version)}
                            >
                                {#if version.html === undefined}
                                    <SkeletonText />
                                {:else}
                                    {@html version.html}
                                {/if}
                            </AccordionItem>
                        {/each}
                    </Accordion>
                </TabContent>
            </svelte:fragment>
        </Tabs>
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

    .version :global(.changelog > .bx--modal-container) {
        height: 800px;
    }
</style>
