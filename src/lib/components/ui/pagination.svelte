<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";

    import { Button } from "carbon-components-svelte";
    import { Pagination } from "carbon-components-svelte";

    export let selected;
    export let items;
    export let labelText;

    const dispatch = createEventDispatcher();

    function ucFirst(value) {
        return value[0].toUpperCase() + value.slice(1);
    }
</script>

<div class="flex navigation">
    <Pagination
        bind:page={selected}
        totalItems={items.length}
        pageSize={1}
        pageSizeInputDisabled
        forwardText={`Next ${labelText}`}
        backwardText={`Previous ${labelText}`}
        itemRangeText={(min) => `${ucFirst(labelText)} #${min}`}
        pageRangeText={(_, total) => `of ${total} ${labelText}s`}
    />
    <Button
        kind="ghost"
        iconDescription={`New ${labelText}`}
        icon={Add}
        size="small"
        tooltipPosition="bottom"
        tooltipAlignment="end"
        class="bx--pagination__button buttons"
        on:click={() => dispatch("new")}
    />

    <Button
        kind="danger-ghost"
        iconDescription={`Delete ${labelText}`}
        icon={TrashCan}
        size="small"
        tooltipPosition="bottom"
        tooltipAlignment="end"
        class="bx--pagination__button buttons delete"
        on:click={() => dispatch("delete")}
    />
</div>

<style>
    .flex {
        display: flex;
    }

    .navigation {
        margin-bottom: 12px;
    }

    .navigation :global(.buttons) {
        background-color: var(--cds-ui-01, #f4f4f4);
        border-top: 1px solid var(--cds-ui-03, #e0e0e0);
        height: 41px;
        padding: 0;
    }
    .navigation :global(.buttons:hover) {
        background-color: var(--cds-hover-ui, #e5e5e5);
    }
    .navigation :global(.delete > svg) {
        margin-left: 0.25rem;
    }
</style>
