<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import { compile } from "truegrf";
    import FileSaver from "file-saver";

    export let visible = false;

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

        const game: any = document?.getElementById("game");
        game.contentWindow.openttd_inject_truegrf(result.getOutput(), newgame_seed);
    };
</script>

<div class="content {visible ? '' : 'hidden'}">
    <div class="left">
        <Paper variant="outlined">
            <Title>Testing</Title>
            <Content>
                To ease up development, by pressing the "test" button on the top right, changes can quickly been tested.<br
                />
                There are two modes:<br />
                <ul>
                    <li>
                        <b>New-game</b>: The test button will reload the NewGRF and generate a new game.
                    </li>
                    <li>
                        <b>Reload</b>: The test button will only reload the NewGRF.
                    </li>
                </ul>
            </Content>
        </Paper>
    </div>
    <div class="right">
        {#if error}
            <Paper variant="outlined">
                <Title>Error compiling GRF</Title>
                <Content>
                    {error}
                </Content>
            </Paper>
        {/if}
        <div class:hidden={error !== ""}>
            <iframe src="openttd.html" width="1000px" height="800px" id="game" class="game" title="Testing" />
        </div>
    </div>
</div>

<style>
    .game {
        border: 0;
    }
</style>
