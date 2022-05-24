<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Checkbox } from "carbon-components-svelte";

    export let options;
    export let selection;
    export let labelText;

    let selectionShadow;

    const dispatch = createEventDispatcher();

    function UpdateShadow() {
        selectionShadow = selection;
    }

    $: if (selection !== undefined) UpdateShadow();

    function OnChange() {
        if (selection === selectionShadow) return;

        selection = selectionShadow;
        dispatch("change", selection);
    }
</script>

<div class="bx--form-item bx--text-input-wrapper bx--text-input-wrapper--inline">
    <div class="bx--text-input__label-helper-wrapper">
        <span class="bx--label--inline--sm bx--label bx--label--inline">{labelText}</span>
    </div>
    <div style="flex: 8;">
        {#each options as option}
            <Checkbox
                bind:group={selectionShadow}
                labelText={option.name}
                value={option.value}
                disabled={option.disabled}
                on:check={OnChange}
            />
        {/each}
    </div>
</div>
