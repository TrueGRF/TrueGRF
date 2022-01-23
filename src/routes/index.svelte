<script context="module">
    import truegrf_init from "truegrf";
    import truegrf_mod from "truegrf/truegrf-rs_bg.wasm?url";
</script>

<script lang="ts">
    import { base } from "$app/paths";
    import { browser } from "$app/env";

    import { setContext } from "svelte";
    import Banner, { Label } from "@smui/banner";
    import Button from "@smui/button";
    import Changelog from "$lib/components/changelogs/index.svelte";
    import Cargoes from "$lib/components/cargoes/index.svelte";
    import FileSaver from "file-saver";
    import General from "$lib/components/general/index.svelte";
    import Header from "$lib/components/common/header.svelte";
    import Industries from "$lib/components/industries/index.svelte";
    import Testing from "$lib/components/testing/index.svelte";

    import { config as configEmpty } from "./configEmpty";
    import { config as configFIRS4Steeltown } from "./configFIRS4Steeltown";

    let testing;
    let config = JSON.parse(JSON.stringify(configEmpty));
    let configDate = browser ? window.localStorage.getItem("configDate") : undefined;

    let categories = ["General", "Industries", "Cargoes", "Testing"];
    let category = "General";

    function updateLocalStorage() {
        if (!browser) return;

        window.localStorage.setItem("config", JSON.stringify(config));
        window.localStorage.setItem("configDate", new Date().toISOString());
    }
    $: config, updateLocalStorage();

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

    function loadConfig(newConfig) {
        switch (newConfig.version) {
            case undefined:
                for (let industry of newConfig.industries) {
                    if (industry.colour === undefined) industry.colour = 1;
                    if (industry.probabilityMapGen === undefined) industry.probabilityMapGen = 3;
                    if (industry.probabilityInGame === undefined) industry.probabilityInGame = 5;
                    if (industry.prospectChance === undefined) industry.prospectChance = 75;
                    if (industry.fundCostMultiplier === undefined) industry.fundCostMultiplier = 100;
                    for (let tile in industry.tiles) {
                        if (industry.tiles[tile].drawType === undefined) industry.tiles[tile].drawType = "normal";
                    }
                }
                for (let cargo of newConfig.cargoes) {
                    if (cargo.weight === undefined) cargo.weight = 16;
                    if (cargo.price === undefined) cargo.price = 4112;
                    if (cargo.penaltyLowerBound === undefined) cargo.penaltyLowerBound = 0;
                    if (cargo.penaltyLength === undefined) cargo.penaltyLength = 255;
                    if (cargo.sprite === undefined)
                        cargo.sprite = {
                            width: 10,
                            height: 10,
                            left: 0,
                            top: 0,
                            base64Data: "",
                        };
                    if (cargo.abbreviation === undefined) cargo.abbreviation = "??";
                    if (cargo.colour === undefined) cargo.colour = 1;
                }
            /* fallthrough */

            case 1:
                for (let industry of newConfig.industries) {
                    for (let tile in industry.tiles) {
                        industry.tiles[tile].sprites = [
                            {
                                sprite: {
                                    id: 3924,
                                },
                                drawType: "normal",
                                alwaysDraw: true,
                            },
                            {
                                sprite: industry.tiles[tile].sprite,
                                drawType: "normal",
                                alwaysDraw: false,
                            },
                        ];
                        delete industry.tiles[tile].sprite;
                    }
                }
            /* fallthrough */

            case 2:
                for (let industry of newConfig.industries) {
                    delete industry.primary;
                    delete industry.secondary;
                    delete industry.tertiary;
                }
            /* fallthrough */

            default:
                break;
        }

        config.version = 3;
        config.general = newConfig.general;
        config.cargoes = newConfig.cargoes;
        config.industries = newConfig.industries;
    }

    function upload(event: CustomEvent) {
        loadConfig(event.detail);
    }

    function load(event: CustomEvent) {
        switch (event.detail) {
            case "empty":
                loadConfig(JSON.parse(JSON.stringify(configEmpty)));
                break;
            case "firs4-steeltown":
                loadConfig(JSON.parse(JSON.stringify(configFIRS4Steeltown)));
                break;
        }
    }

    if (browser) {
        let localStorageConfig = window.localStorage.getItem("config");
        if (localStorageConfig) loadConfig(JSON.parse(localStorageConfig));
    }

    /* We initialize with tabs hidden; this means SMUI cannot calculate the
     * width of components, which in result render poorly. So, when we switch
     * category update the layout of all components. */
    let layouts = [];
    function updateLayouts() {
        setTimeout(() => layouts.forEach((layout) => layout()), 1);
    }
    $: category, updateLayouts();
    setContext("SMUI:addLayoutListener", (layout) => {
        layouts.push(layout);
    });
</script>

<svelte:head>
    <link rel="icon" href="{base}/favicon.ico" />
    <link rel="stylesheet" href="{base}/fonts.css" />
    <link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
    <link rel="stylesheet" href="{base}/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
    <title>TrueGRF - NewGRFs made easy</title>
</svelte:head>

{#await truegrf_init(truegrf_mod) then _}
    {#if configDate}
        <Banner open fixed mobileStacked centered content$style="max-width: max-content;">
            <Label slot="label">Welcome back. We loaded back the configuration of your last visit.</Label>
            <Button slot="actions">OK</Button>
        </Banner>
    {:else}
        <Banner open fixed mobileStacked centered content$style="max-width: max-content;">
            <Label slot="label">
                TrueGRF is still in early alpha. Please report any bugs or suggestions on
                <a href="https://github.com/TrueBrain/TrueGRF/issues">GitHub</a>.
            </Label>
            <Button slot="actions">I understand</Button>
        </Banner>
    {/if}
    <Changelog />
    <div>
        <div class="container">
            <Header bind:categories bind:category on:test={compileAndTest} on:download={compileAndDownload} />

            <General bind:general={config.general} visible={category === "General"} on:upload={upload} on:load={load} />
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
