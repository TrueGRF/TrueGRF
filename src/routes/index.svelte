<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf_bg.wasm?url";
</script>

<script lang="ts">
    import { base } from "$app/paths";
    import yaml from "js-yaml";

    import Account from "$lib/components/account/index.svelte";
    import Navigation from "$lib/components/navigation/index.svelte";

    let loaded = false;
    let files = [];
    let project = undefined;

    let cargoes = [];
    let industries = [];
    let general = {};

    function LoadProject() {
        const request = indexedDB.open(project);
        request.onsuccess = async function() {
            const db = request.result;
            const transaction = db.transaction("files");
            const store = transaction.objectStore("files");

            for (let file of files) {
                const request = store.get(file);

                request.onsuccess = function() {
                    if (file.endsWith(".yaml")) {
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

                        return;
                    }
                };
            }
        }
    }

    function AccountLoaded(event) {
        project = event.detail.project;
        files = event.detail.files;
        loaded = true;
    }

    function ItemSelected(event) {
        console.log(event.detail);
    }

    $: if (loaded) LoadProject();
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
            <div class="subtitle">
                NewGRFs made easy
            </div>
        </div>

        <div class="content">
            {#if !loaded}
                <Account on:loaded={AccountLoaded} />
            {:else}
                <Navigation {industries} {cargoes} on:selected={ItemSelected} />
                <div class="content-inner"></div>
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

    .content {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 62px - 20px);
        justify-content: center;
        padding: 20px;
    }

    .content-inner {
        height: 100%;
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
