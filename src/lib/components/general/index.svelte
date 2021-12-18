<script lang="ts">
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import Paper, { Title, Content } from "@smui/paper";

    export let visible = false;
    export let general = {
        grfid: "",
        name: "",
        description: "",
    };
</script>

<div class="content {visible ? '' : 'hidden'}">
    <div class="left">
        <Paper variant="outlined">
            <Title>General information</Title>
            <Content>
                On the right you can enter general information about your NewGRF.<br />
                This information is seen when installing and configuring NewGRFs in-game.
            </Content>
        </Paper>
    </div>
    <div class="right">
        <Textfield variant="outlined" bind:value={general.grfid} label="GRFID" input$maxlength={4}>
            <HelperText slot="helper">Unique identifier of NewGRF (4 letters)</HelperText>
        </Textfield>

        <Textfield variant="outlined" bind:value={general.name} label="Name">
            <HelperText slot="helper">Name of NewGRF</HelperText>
        </Textfield>

        <Textfield variant="outlined" bind:value={general.description} label="Description">
            <HelperText slot="helper">Description of NewGRF</HelperText>
        </Textfield>
    </div>
</div>

<style>
    .right :global(.mdc-text-field) {
        margin-top: 12px;
        width: 100%;
    }
    .right :global(.mdc-text-field:first-child) {
        margin-top: 0;
    }
</style>
