<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { TextInput } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    export let value;
    export let labelText;
    export let placeholder;
    export let invalidText = "";
    export let validate = undefined;

    const dispatch = createEventDispatcher();

    let validateFailed = undefined;
    let valueShadow;

    function UpdateShadow() {
        valueShadow = value;
    }

    $: if (value !== undefined) UpdateShadow();

    function OnChange() {
        Revalidate();

        if (value === valueShadow) return;
        if (validateFailed !== undefined) return;

        value = valueShadow;
        dispatch("change", value);
    }

    function Revalidate() {
        if (validate !== undefined) {
            validateFailed = validate(valueShadow);
        } else {
            validateFailed = undefined;
        }
    }

    $: if (valueShadow) Revalidate();
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
        invalid={invalidText !== "" || validateFailed !== undefined}
        invalidText={invalidText || validateFailed}
        bind:value={valueShadow}
        on:change={OnChange}
    />
</div>
