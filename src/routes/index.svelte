<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf-rs_bg.wasm?url";
</script>

<script lang="ts">
    import { base } from "$app/paths";

    import Banner, { Label } from "@smui/banner";
    import Button from "@smui/button";

    import Cargoes from "$lib/components/cargoes/index.svelte";
    import FileSaver from "file-saver";
    import General from "$lib/components/general/index.svelte";
    import Header from "$lib/components/common/header.svelte";
    import Industries from "$lib/components/industries/index.svelte";
    import Testing from "$lib/components/testing/index.svelte";

    import { config as configDefault } from "./configDefault";

    let testing;
    let config = { ...configDefault };

    let categories = ["General", "Industries", "Cargoes", "Testing"];
    let category = "General";

    function compileAndDownload(event: CustomEvent) {
        if (event.detail == "GRF") {
            testing.compileAndDownload(config);
        } else {
            FileSaver.saveAs(new Blob([JSON.stringify(config)]), "truegrf_" + new Date().toISOString() + ".json");
        }
    }

    function compileAndTest(event: CustomEvent) {
        category = "Testing";
        testing.compileAndTest(config, event.detail === "New-game" ? 1 : 0);
    }

    function upload(event: CustomEvent) {
        config = event.detail;
    }
</script>

<svelte:head>
    <link rel="icon" href="{base}/favicon.ico" />
    <link rel="stylesheet" href="{base}/fonts.css" />
    <link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
    <link rel="stylesheet" href="{base}/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
    <title>TrueGRF - NewGRFs made easy</title>
</svelte:head>

{#await truegrf_init(truegrf_mod) then _}
    <Banner open fixed mobileStacked centered content$style="max-width: max-content;">
        <Label slot="label">
            TrueGRF is still in early alpha. Please report any bugs or suggestions on
            <a href="https://github.com/TrueBrain/TrueGRF/issues">GitHub</a>.
        </Label>
        <Button slot="actions">I understand</Button>
    </Banner>
    <div>
        <div class="container">
            <Header bind:categories bind:category on:test={compileAndTest} on:download={compileAndDownload} />

            <General bind:general={config.general} visible={category === "General"} on:upload={upload} />
            <Industries
                bind:items={config.industries}
                bind:cargoes={config.cargoes}
                visible={category === "Industries"}
            />
            <Cargoes bind:items={config.cargoes} visible={category === "Cargoes"} />
            <Testing visible={category === "Testing"} bind:this={testing} />
        </div>
    </div>
{/await}

<style>
    @import "./common.scss";

    .container {
        max-width: 1320px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
