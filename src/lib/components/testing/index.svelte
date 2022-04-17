<script lang="ts">
    import { compile } from "truegrf";
    import FileSaver from "file-saver";

    import { Button } from "carbon-components-svelte";
    import { InlineNotification } from "carbon-components-svelte";

    export let cargoes = undefined;
    export let industries = undefined;
    export let general = undefined;

    let error = "";

    export const compileAndDownload = (config) => {
        const result = compile(config);
        if (result.getError()) {
            error = result.getError();
            return;
        }
        error = "";

        FileSaver.saveAs(new Blob([result.getOutput()]), "truegrf_" + new Date().toISOString() + ".grf");
    };

    export const compileAndTest = (config, newgame_seed) => {
        const result = compile(config);
        if (result.getError()) {
            error = result.getError();
            return;
        }
        error = "";

        /* Tell OpenTTD to reload the GRF. */
        const game = document?.getElementById("game");
        game.contentWindow.openttd_inject_truegrf(result.getOutput(), newgame_seed);
    };

    function TestNewgame() {
        compileAndTest({
            industries,
            cargoes,
            general,
        }, 1);
    }

    function TestReload() {
        compileAndTest({
            industries,
            cargoes,
            general,
        }, 0);
    }
</script>

<div>
    <div class="buttons">
        <Button size="small" kind="primary" on:click={TestNewgame}>Test: new-game</Button>
        <Button size="small" kind="primary" on:click={TestReload}>Test: reload</Button>
    </div>
    {#if error}
        <InlineNotification
            title="Error compiling GRF"
            subtitle="{error}"
            />
    {/if}
    <div class:hidden={error !== ""}>
        <iframe src="openttd.html" width="1000px" height="800px" id="game" class="game" title="Testing" />
    </div>
</div>

<style>
    .game {
        border: 0;
    }

    .hidden {
        display: none;
    }

    .buttons {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    .buttons :global(button) {
        margin-right: 20px;
        margin-left: 20px;
        width: 200px;
    }
</style>
