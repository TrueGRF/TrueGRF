<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import { compile } from "truegrf";
    import FileSaver from "file-saver";

    export let visible = false;

    export const compileAndDownload = (config) => {
        const newgrf_data = compile(config);

        FileSaver.saveAs(new Blob([newgrf_data]), "truegrf_" + new Date().toISOString() + ".grf");
    };

    export const compileAndTest = (config, newgame_seed) => {
        const newgrf_data = compile(config);

        const game: any = document?.getElementById("game");
        game.contentWindow.openttd_inject_truegrf(newgrf_data, newgame_seed);
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
        <iframe src="openttd.html" width="1000px" height="800px" id="game" class="game" title="Testing" />
    </div>
</div>

<style>
    .game {
        border: 0;
    }
</style>
