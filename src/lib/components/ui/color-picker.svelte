<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { ClickableTile } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    import Palette from "$lib/components/ui/palette.svelte";

    import { colours } from "./colours";

    export let value;
    export let labelText;

    const dispatch = createEventDispatcher();

    let colourPickerOpen = false;
    let valueShadow;

    function UpdateShadow() {
        valueShadow = value;
    }
    function ChangeValue() {
        if (value === valueShadow) return;

        value = valueShadow;
        dispatch("change", value);
    }

    $: if (value) UpdateShadow();
</script>

<div class="bx--form-item bx--text-input-wrapper bx--text-input-wrapper--inline">
    <div class="bx--text-input__label-helper-wrapper">
        <span class="bx--label--inline--sm bx--label bx--label--inline">
            <slot name="labelText">
                {#if $$slots.tooltip}
                    <Tooltip align="start" triggerText={labelText}>
                        <p>
                            <slot name="tooltip" />
                        </p>
                    </Tooltip>
                {:else}
                    {labelText}
                {/if}
            </slot>
        </span>
    </div>

    <ClickableTile
        class="colour"
        style="background-color: {colours[value || 0]};"
        on:click={() => (colourPickerOpen = true)}
    />

    <Modal
        bind:open={colourPickerOpen}
        modalHeading="Pick a colour"
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (colourPickerOpen = false)}
        on:click:button--primary={() => {
            ChangeValue();
            colourPickerOpen = false;
        }}
    >
        <Palette bind:selected={valueShadow} />
    </Modal>
</div>

<style>
    .bx--form-item :global(.colour) {
        height: 30px;
        margin-bottom: 2px;
        margin-top: 2px;
        min-height: 0;
        min-width: 0;
        padding: 0;
        width: 80px;
    }
</style>
