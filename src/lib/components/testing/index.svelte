<script lang="ts">
    import { compile } from "truegrf";
    import FileSaver from "file-saver";

    import { Button } from "carbon-components-svelte";
    import { InlineNotification } from "carbon-components-svelte";

    export let cargoes = undefined;
    export let industries = undefined;
    export let townnames = undefined;
    export let general = undefined;

    let compiling = false;
    let error = "";

    export const compileAndDownload = (config) => {
        config.type = config.general.type;

        compiling = true;
        /* Delay, so Svelte can actually update the component. */
        setTimeout(() => {
            try {
                const result = compile(config);
                compiling = false;

                if (result.getError()) {
                    error = result.getError();
                    return;
                }
                error = "";

                FileSaver.saveAs(new Blob([result.getOutput()]), "truegrf_" + new Date().toISOString() + ".grf");
            } catch (e) {
                compiling = false;
                error =
                    "An unknown error occurred. Please file a bug report at https://github.com/TrueGRF/TrueGRF with a link to your project.";
                return;
            }
        }, 10);
    };

    export const compileAndTest = (config, newgame_seed) => {
        config.type = config.general.type;

        compiling = true;
        /* Delay, so Svelte can actually update the component. */
        setTimeout(() => {
            try {
                const result = compile(config);
                compiling = false;

                if (result.getError()) {
                    error = result.getError();
                    return;
                }
                error = "";

                /* Tell OpenTTD to reload the GRF. */
                const game = document?.getElementById("game");
                game.contentWindow.openttd_inject_truegrf(result.getOutput(), newgame_seed);
            } catch (e) {
                compiling = false;
                error =
                    "An unknown error occurred. Please file a bug report at https://github.com/TrueGRF/TrueGRF with a link to your project.";
                return;
            }
        }, 10);
    };

    function TestNewgame() {
        compileAndTest(
            {
                industries,
                cargoes,
                townnames,
                general,
            },
            1
        );
    }

    function TestReload() {
        compileAndTest(
            {
                industries,
                cargoes,
                townnames,
                general,
            },
            0
        );
    }

    function DownloadGrf() {
        compileAndDownload({
            industries,
            cargoes,
            townnames,
            general,
        });
    }
</script>

<div>
    <div class="buttons">
        <Button size="small" kind="primary" on:click={TestNewgame}>Test: new-game</Button>
        <Button size="small" kind="primary" on:click={TestReload}>Test: reload</Button>
        <Button size="small" kind="primary" on:click={DownloadGrf}>Download GRF</Button>
    </div>
    {#if compiling}
        <InlineNotification
            title="Compiling GRF ... "
            subtitle="(this can take a minute)"
            lowContrast
            kind="info"
            hideCloseButton
        />
    {/if}
    {#if error}
        <InlineNotification title="Error compiling GRF" subtitle={error} />
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
