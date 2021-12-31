<script lang="ts">
    import { colours } from "$lib/components/common/colour-matrix";
    import Button, { Label } from "@smui/button";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import PalettePicker from "$lib/components/common/palette-picker.svelte";

    export let colour;
    let dialogOpen = false;
</script>

<div class="mdc-form-field mdc-text-field--outlined tg-colour-picker">
    <span>
        <slot>Colour {colour}</slot>
    </span>
    <div style="background-color: {colours[colour]};" on:click={() => (dialogOpen = true)} />

    <Dialog bind:open={dialogOpen}>
        <Title>Pick a colour</Title>
        <Content>
            <PalettePicker scale={16} bind:selected={colour} />
        </Content>
        <Actions>
            <Button>
                <Label>Save</Label>
            </Button>
        </Actions>
    </Dialog>
</div>

<style>
    .tg-colour-picker {
        padding: 0;
    }

    .tg-colour-picker > span {
        width: calc(100% - 100px);
    }

    .tg-colour-picker > div {
        border: 1px solid var(--mdc-theme-on-surface);
        box-sizing: border-box;
        cursor: pointer;
        height: 100%;
        width: 100px;
    }
</style>
