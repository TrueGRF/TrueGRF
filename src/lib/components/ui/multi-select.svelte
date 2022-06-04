<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { MultiSelect } from "carbon-components-svelte";
    import { Tag } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";

    export let labelText;
    export let selected;
    export let items = [];

    const dispatch = createEventDispatcher();

    let lookup = {};
    let selectedShadow;

    function UpdateShadow() {
        selectedShadow = selected;
    }

    $: if (selected !== undefined) UpdateShadow();

    function UpdateItems() {
        lookup = {};

        for (let item of items) {
            lookup[item.id] = item.text;
        }
    }

    $: if (items) UpdateItems();

    function OnChange() {
        if (selected.toString() === selectedShadow.toString()) return;

        selected = selectedShadow;
        dispatch("change", selected);
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

    <div class="tags">
        {#if selected.length == 0}
            <div class="bx--label none">(none)</div>
        {/if}
        {#each selected as item}
            <Tag>
                {lookup[item]}
            </Tag>
        {/each}
    </div>

    <MultiSelect
        bind:selectedIds={selectedShadow}
        hideLabel
        size="sm"
        filterable
        placeholder="Select cargoes"
        {items}
        on:select={OnChange}
    />
</div>

<style>
    .bx--form-item {
        position: relative;
    }

    .bx--form-item :global(.bx--multi-select) {
        position: absolute;
        right: 0px;
        width: 250px;
    }

    .tags {
        margin-right: 280px;
        width: 454px;
    }

    .tags .none {
        margin-left: 8px;
        margin-top: 8px;
    }

    .bx--form-item :global(.bx--multi-select .bx--tag) {
        display: none;
    }

    .bx--form-item :global(.bx--multi-select--filterable.bx--multi-select--selected .bx--text-input) {
        padding-left: 20px;
    }
</style>
