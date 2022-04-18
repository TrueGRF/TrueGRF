<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Toggle } from "carbon-components-svelte";

    export let value;
    export let labelText;
    export let labelOff = "Off";
    export let labelOn = "On";

    let valueShadow;

    const dispatch = createEventDispatcher();

    function UpdateShadow() {
        valueShadow = value;
    }

    $: if (value !== undefined) UpdateShadow();

    function OnChange() {
        if (value === valueShadow) return;

        value = valueShadow;
        dispatch("change", value);
    }
</script>

<div class="bx--form-item bx--text-input-wrapper bx--text-input-wrapper--inline">
    <div class="bx--text-input__label-helper-wrapper">
        <span class="bx--label--inline--sm bx--label bx--label--inline">{labelText}</span>
    </div>
    <Toggle size="sm" labelA={labelOff} labelB={labelOn} bind:toggled={valueShadow} on:toggle={OnChange} />
</div>

<style>
    .bx--form-item :global(.bx--toggle-input__label .bx--toggle__switch) {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
</style>
