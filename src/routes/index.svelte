<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf_bg.wasm?url";

    import Account from "$lib/components/account/index.svelte";
</script>

<script lang="ts">
    import { base } from "$app/paths";
</script>

<svelte:head>
    <link rel="icon" href="{base}/favicon.ico" />
    <link rel="stylesheet" href="{base}/g10.css" media="(prefers-color-scheme: light)" />
    <link rel="stylesheet" href="{base}/g90.css" media="(prefers-color-scheme: dark)" />
    <title>TrueGRF - NewGRFs made easy</title>
</svelte:head>

{#await truegrf_init(truegrf_mod) then _}
    <div class="main">
        <div class="title">
            TrueGRF
            <div class="subtitle">
                NewGRFs made easy
            </div>
        </div>

        <div class="content">
            <Account />
        </div>
    </div>
{/await}

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .title {
        font-size: 38px;
        font-weight: bold;
        margin-top: 40px;
        text-align: center;
    }
    .subtitle {
        font-size: 14px;
        font-weight: normal;
        margin-top: 10px;
    }
</style>
