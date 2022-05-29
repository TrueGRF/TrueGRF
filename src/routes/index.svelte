<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf_bg.wasm?url";
</script>

<script lang="ts">
    import slug from "slug";
    import yaml from "js-yaml";

    import { base } from "$app/paths";
    import { onMount } from "svelte";

    import { Tabs, Tab, TabContent } from "carbon-components-svelte";

    import Account from "$lib/components/account/index.svelte";
    import Cargo from "$lib/components/cargo/index.svelte";
    import General from "$lib/components/general/index.svelte";
    import Industry from "$lib/components/industry/index.svelte";
    import Navigation from "$lib/components/navigation/index.svelte";
    import Sync from "$lib/components/sync/index.svelte";
    import Testing from "$lib/components/testing/index.svelte";

    import { newCargo } from "$lib/components/cargo/newCargo";
    import { newIndustry } from "$lib/components/industry/newIndustry";

    let loadedAccount = false;
    let loadedProject = false;
    let files = [];
    let project = undefined;
    let accessToken = undefined;

    let cargoes = [];
    let industries = [];
    let general = {};
    let images = {};

    let sync;

    let selected = {
        type: "none",
        item: undefined,
        name: undefined,
    };
    let activeId = -1;

    async function LoadProject() {
        let requests = 0;

        const indexdb = indexedDB.open(project);
        indexdb.onsuccess = async function () {
            const db = indexdb.result;
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
        accessToken = event.detail.accessToken;
        files = event.detail.files;
        loadedAccount = true;
    }

    function ItemSelected(event) {
        /* Before we move to the new item, check if the current is different from what is in the repository. */
        sync.CheckCommitChanges(images, selected);

        switch (event.detail.type) {
            case "general":
                selected.type = "general";
                selected.item = general;
                selected.name = undefined;
                break;
            case "cargo":
                /* Create a new cargo. */
                if (event.detail.id == 0xfff) {
                    /* Find the first available id. */
                    let id = 0;
                    while (cargoes.find((i) => i.id == id)) id++;

                    /* Copy the default new cargo object into a new object. */
                    let cargoNew = JSON.parse(JSON.stringify(newCargo));
                    cargoNew.id = id;
                    event.detail.id = id;

                    cargoNew.name += ` #${id}`;
                    cargoNew.longName += ` #${id}`;

                    const filename = slug(cargoNew.name, { lower: true });
                    cargoNew.sprite.filename = `cargoes/${filename}.png`;
                    images[cargoNew.sprite.filename] = "";

                    cargoes.push(cargoNew);

                    /* Inform Svelte the array has changed. */
                    cargoes = cargoes;
                    /* Delay changing the activeId ever so slightly, to give Svelte the time to actually update the navigation. */
                    setTimeout(() => {
                        activeId = 0x1000 | id;
                    }, 10);
                }

                if (event.detail.id === undefined) {
                    selected.type = "none";
                    selected.item = undefined;
                    selected.name = undefined;
                } else {
                    selected.type = "cargo";
                    selected.item = cargoes.find((item) => item.id == event.detail.id);
                    selected.name = selected.item.name;
                }
                break;
            case "industry":
                /* Create a new industry. */
                if (event.detail.id == 0xfff) {
                    /* Find the first available id. */
                    let id = 0;
                    while (industries.find((i) => i.id == id)) id++;

                    /* Copy the default new industry object into a new object. */
                    let industryNew = JSON.parse(JSON.stringify(newIndustry));
                    industryNew.id = id;
                    event.detail.id = id;

                    industryNew.name += ` #${id}`;

                    industries.push(industryNew);

                    /* Inform Svelte the array has changed. */
                    industries = industries;
                    /* Delay changing the activeId ever so slightly, to give Svelte the time to actually update the navigation. */
                    setTimeout(() => {
                        activeId = 0x2000 | id;
                    }, 10);
                }

                if (event.detail.id === undefined) {
                    selected.type = "none";
                    selected.item = undefined;
                    selected.name = undefined;
                } else {
                    selected.type = "industry";
                    selected.item = industries.find((item) => item.id == event.detail.id);
                    selected.name = selected.item.name;
                }
                break;
            case "none":
                selected.type = "none";
                selected.item = undefined;
                selected.name = undefined;
                break;
        }
    }

    function UpdateSvelte() {
        /* Inform Svelte the array has changed. */
        switch (selected.type) {
            case "cargo":
                cargoes = cargoes;
                break;
            case "industry":
                industries = industries;
                break;
        }
    }

    function TabSelected() {
        /* If we switch to testing (or back), make sure all content is committed. */
        sync.CheckCommitChanges(images, selected);
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
            <Sync {project} {accessToken} bind:this={sync} />
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
                <div class="content center">Processing data ...</div>
            {:else}
                <Tabs type="container" class="topnav" on:change={TabSelected}>
                    <Tab label="Editing" />
                    <Tab label="Testing" />

                    <svelte:fragment slot="content">
                        <TabContent>
                            <div class="content">
                                <Navigation {industries} {cargoes} bind:activeId on:selected={ItemSelected} />
                                <div class="content-inner">
                                    {#if selected.type === "general"}
                                        <General general={selected.item} on:change={UpdateSvelte} />
                                    {:else if selected.type === "cargo"}
                                        <Cargo cargo={selected.item} {cargoes} {images} on:change={UpdateSvelte} />
                                    {:else if selected.type === "industry"}
                                        <Industry
                                            industry={selected.item}
                                            {cargoes}
                                            {industries}
                                            {images}
                                            on:change={UpdateSvelte}
                                        />
                                    {/if}
                                </div>
                            </div>
                        </TabContent>

                        <TabContent>
                            <div class="content">
                                <Testing {general} {industries} {cargoes} />
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
        border: 1px solid #8d8d8d;
        height: 100%;
        margin-left: 20px;
        overflow: auto;
        padding: 20px;
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
