<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Slider } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    export let value;
    export let labelText = "";
    export let step = 10;
    export let max = 10;
    export let min = 10;
    export let disabled = false;
    export let unit = "";
    export const tooltip = "";

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
    <Slider
        hideTextInput
        {disabled}
        {min}
        minLabel="&nbsp;"
        {max}
        maxLabel="{valueShadow} {unit}"
        bind:value={valueShadow}
        {step}
        on:change={OnChange}
    />
</div>

<style>
    .bx--form-item :global(.bx--form-item .bx--label) {
        display: none;
    }
    .bx--form-item :global(.bx--slider-container .bx--slider__range-label:nth-child(1)) {
        display: none;
    }
    .bx--form-item :global(.bx--slider) {
        margin: 0 1rem 0 0.5rem;
    }
</style>
