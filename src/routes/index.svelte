<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf_bg.wasm?url";
</script>

<script lang="ts">
    import yaml from "js-yaml";

    import { base } from "$app/paths";
    import { onMount } from "svelte";

    import { Tabs, Tab, TabContent } from "carbon-components-svelte";
    import { TextInput } from "carbon-components-svelte";
    import { Tile } from "carbon-components-svelte";

    import Account from "$lib/components/account/index.svelte";
    import Navigation from "$lib/components/navigation/index.svelte";
    import Testing from "$lib/components/testing/index.svelte";

    let loadedAccount = false;
    let loadedProject = false;
    let files = [];
    let project = undefined;

    let cargoes = [];
    let industries = [];
    let general = {};
    let images = {};

    let testing;

    let selected = {
        type: "none",
        item: undefined,
    };

    async function LoadProject() {
        let requests = 0;

        const request = indexedDB.open(project);
        request.onsuccess = async function () {
            const db = request.result;
            const transaction = db.transaction("files");
            const store = transaction.objectStore("files");

            for (let file of files) {
                const request = store.get(file);

                request.onsuccess = function () {
                    requests += 1;

                    if (file.endsWith(".png")) {
                        images[file] = request.result.content;
                    } else if (file.endsWith(".yaml")) {
                        const data = yaml.load(request.result.content);
                        data["text"] = data["name"];

                        if (file.startsWith("cargoes/")) {
                            cargoes.push(data);

                            /* Inform Svelte the array is changed. */
                            cargoes = cargoes;
                        } else if (file.startsWith("industries/")) {
                            industries.push(data);

                            /* Inform Svelte the array is changed. */
                            industries = industries;
                        } else if (file == "truegrf.yaml") {
                            general = data;
                        }
                    }

                    if (requests == files.length) {
                        loadedProject = true;
                    }
                };
            }
        };
    }

    function AccountLoaded(event) {
        project = event.detail.project;
        files = event.detail.files;
        loadedAccount = true;
    }

    function ItemSelected(event) {
        switch (event.detail.type) {
            case "general":
                selected.type = "general";
                selected.item = undefined;
                break;
            case "cargo":
                selected.type = "cargo";
                selected.item = cargoes.find((item) => item.id == event.detail.id);
                break;
            case "industry":
                selected.type = "industry";
                selected.item = industries.find((item) => item.id == event.detail.id);
                break;
            case "none":
                selected.type = "none";
                selected.item = undefined;
                break;
        }
    }

    function UpdateSvelte() {
        /* Inform Svelte the array is changed. */
        switch (selected.type) {
            case "cargo":
                cargoes = cargoes;
                break;
            case "industry":
                industries = industries;
                break;
        }
    }

    $: if (loadedAccount) LoadProject();

    /* Used by truegrf-rs to get the PNG files. */
    function load_sprite_bytes(filename) {
        return images[filename];
    }

    onMount(async () => {
        /* Make this function available on "window", so the rust application can find it again. */
        window.load_sprite_bytes = load_sprite_bytes;
    });
</script>

<svelte:head>
    <link rel="icon" href="{base}/favicon.ico" />
    <link rel="stylesheet" href="{base}/g10.css" media="(prefers-color-scheme: light)" />
    <link rel="stylesheet" href="{base}/g90.css" media="(prefers-color-scheme: dark)" />
    <title>TrueGRF - NewGRFs made easy</title>
</svelte:head>

{#await truegrf_init(truegrf_mod) then _}
    <div class="main">
        {#if project}
            <div class="project">
                Active project: {project}
            </div>
        {/if}
        <div class="title">
            TrueGRF
            <div class="subtitle">NewGRFs made easy</div>
        </div>

        <div class="window">
            {#if !loadedAccount}
                <div class="content center">
                    <Account on:loaded={AccountLoaded} />
                </div>
            {:else if !loadedProject}
                <div class="content center">
                    Processing data ...
                </div>
            {:else}
                <Tabs type="container" class="topnav">
                    <Tab label="Editing" />
                    <Tab label="Testing" />

                    <svelte:fragment slot="content">
                        <TabContent>
                            <div class="content">
                                <Navigation {industries} {cargoes} on:selected={ItemSelected} />
                                <div class="content-inner">
                                    {#if selected.item !== undefined}
                                        <Tile>
                                            <TextInput inline labelText="Name" placeholder="Name of item" bind:value={selected.item.name} on:change={() => UpdateSvelte()} />
                                        </Tile>
                                    {/if}
                                </div>
                            </div>
                        </TabContent>

                        <TabContent>
                            <div class="content">
                                <Testing {general} {industries} {cargoes} bind:this={testing} />
                            </div>
                        </TabContent>
                    </svelte:fragment>
                </Tabs>
            {/if}
        </div>
    </div>
{/await}

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .project {
        position: absolute;
        top: 30px;
        right: 20px;
    }

    .window :global(.topnav) {
        display: flex;
        padding-top: 20px;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 62px - 20px - 40px - 20px - 20px);
        /* Preview takes 802 pixels + border + buttons. */
        min-height: calc(802px + 40px + 48px + 20px);
        justify-content: center;
        padding: 20px;
    }
    .content.center {
        align-items: center;
    }

    .content-inner {
        height: 100%;
        padding-left: 10px;
        width: 1000px;
    }

    .title {
        font-size: 38px;
        font-weight: bold;
        margin-top: 20px;
        text-align: center;
    }
    .subtitle {
        font-size: 14px;
        font-weight: normal;
        margin-top: 10px;
    }
</style>
