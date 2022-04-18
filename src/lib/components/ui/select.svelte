<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Select, SelectItem } from "carbon-components-svelte";

    export let options;
    export let value;
    export let labelText;

    let valueShadow;

    const dispatch = createEventDispatcher();

    function UpdateShadow() {
        valueShadow = value;
    }
    function ChangeValue() {
        if (value === valueShadow) return;

        value = valueShadow;
        dispatch("change", value);
    }

    $: if (value) UpdateShadow();
    $: if (valueShadow) ChangeValue();
</script>

<div class="bx--form-item bx--text-input-wrapper bx--text-input-wrapper--inline">
    <div class="bx--text-input__label-helper-wrapper">
        <span class="bx--label--inline--sm bx--label bx--label--inline">{labelText}</span>
    </div>
    <Select hideLabel size="sm" labelText={labelText} bind:selected={valueShadow}>
        {#each options as option}
            <SelectItem value="{option.value}" text="{option.name}" />
        {/each}
    </Select>
</div>
