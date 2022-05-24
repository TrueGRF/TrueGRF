<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { TextInput } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    export let value;
    export let labelText;
    export let placeholder;
    export let invalidText = "";

    const dispatch = createEventDispatcher();

    function OnChange(event) {
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
    <TextInput
        size="sm"
        hideLabel
        {placeholder}
        invalid={invalidText !== ""}
        {invalidText}
        bind:value
        on:change={OnChange}
    />
</div>
