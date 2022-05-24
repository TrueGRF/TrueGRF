<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { NumberInput } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    export let value;
    export let labelText;
    export let placeholder;
    export let min = undefined;
    export let max = undefined;

    const dispatch = createEventDispatcher();

    function OnChange(event) {
        console.log("C");
        dispatch("change", event.detail);
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
    <NumberInput size="sm" {min} {max} hideLabel {placeholder} bind:value on:change={OnChange} />
</div>
