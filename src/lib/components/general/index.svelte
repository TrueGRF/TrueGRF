<script lang="ts">
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import Paper, { Title, Content } from "@smui/paper";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let visible = false;
    export let general = {
        grfid: "",
        name: "",
        description: "",
    };

    let uploadJSON = null;
    $: if (uploadJSON != null && uploadJSON.length) {
        uploadJSON[0].text().then(function (text) {
            let json = JSON.parse(text);
            dispatch("upload", json);
        });
    }
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

        <Paper variant="outlined" class="dangerzone">
            <Title>Danger Zone</Title>
            <Content>
                <div class="title">Restore JSON backup (WARNING: all configuration will be lost)</div>
                <div class="filler" />
                <Textfield variant="outlined" bind:files={uploadJSON} type="file" class="file" />
            </Content>
        </Paper>
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

    .right :global(.title) {
        margin-top: 26px;
    }

    .right :global(.mdc-text-field input[type="file"]) {
        margin-top: 16px;
    }
    .right :global(.mdc-text-field.file) {
        width: 300px;
    }
</style>
