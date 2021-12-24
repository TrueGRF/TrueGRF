<script lang="ts">
    import List, { Item, Separator, Text } from "@smui/list";

    export let items = [];
    export let selected;
</script>

<div class="item-list">
    <List class="list" singleSelection bind:selectedIndex={selected}>
        {#each items as item, i}
            <Item selected={selected === i}>
                <Text>{item.name}</Text>
            </Item>
        {/each}
    </List>
</div>

<style>
    .item-list {
        width: 300px;
    }

    .item-list :global(.list) {
        border-color: #000;
        border-color: var(--mdc-theme-on-surface, #000);
        border-radius: 4px;
        border-radius: var(--mdc-shape-medium, 4px);
        border-style: solid;
        border-width: 1px;

        height: calc(100vh - 290px);
        overflow: auto;
    }
</style>
