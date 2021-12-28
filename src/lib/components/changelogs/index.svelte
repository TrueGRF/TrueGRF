<script lang="ts">
    import { browser } from '$app/env';

    import Banner, { Label } from "@smui/banner";
    import Button from "@smui/button";
    import Dialog, { Title as DialogTitle, Content as DialogContent, Actions } from "@smui/dialog";
    import SvelteMarkdown from 'svelte-markdown'

    import { versions } from "./versions";

    let version = browser ? window.localStorage.getItem("version") : undefined;

    let dialogChangelogOpen = false;
    let latestVersion = versions[0].name;
    let currentVersionIndex = version ? versions.findIndex((c) => c.name == version) ?? versions.length : versions.length;
    console.log(versions, currentVersionIndex);

    /* Make sure this is only shown the first time a user comes back. */
    window.localStorage.setItem("version", latestVersion);
</script>

{#if version != latestVersion}
<Banner open fixed mobileStacked centered content$style="max-width: max-content;">
    <Label slot="label">
        TrueGRF has been updated to version {latestVersion}.
    </Label>
    <svelte:fragment slot="actions">
        <Button on:click={() => { dialogChangelogOpen = true; }}>Changelog</Button>
        <Button>OK</Button>
    </svelte:fragment>
</Banner>

<Dialog bind:open={dialogChangelogOpen} surface$style="width: 850px; max-width: calc(100vw - 32px);">
    <DialogTitle id="simple-title">Changelog</DialogTitle>
    <DialogContent id="simple-content">
        {#each versions as version, i}
            {#if i < currentVersionIndex}
                <h1>{version.name}</h1>
                <SvelteMarkdown bind:source={version.body} />
            {/if}
        {/each}
    </DialogContent>
    <Actions>
        <Button>
            <Label>Close</Label>
        </Button>
    </Actions>
</Dialog>
{/if}
