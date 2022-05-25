<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { TileGroup, RadioTile } from "carbon-components-svelte";

    import Sprite from "$lib/components/industry/sprite.svelte";

    const dispatch = createEventDispatcher();

    export let tiles;
    export let images;
    export let selected;

    function OnSelect(event) {
        dispatch("select", event.detail);
    }
</script>

<div class="tiles">
    <TileGroup legend="Available tiles" bind:selected on:select={OnSelect}>
        <RadioTile value={-1} checked={selected === -1}>
            <br />
            (empty)
        </RadioTile>
        {#each tiles as tile, i}
            <RadioTile value={i} checked={selected === i}>
                {#each tile.sprites as sprite}
                    <Sprite bind:sprite={sprite.sprite} {images} />
                {/each}
            </RadioTile>
        {/each}
    </TileGroup>
</div>

<style>
    .tiles {
        position: relative;
    }

    .tiles :global(.bx--tile-group > div) {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
    }

    .tiles :global(.bx--tile) {
        display: inline-block;
        min-width: 0;
        padding: 0;
        text-align: center;
        width: 64px;
    }

    .tiles :global(.bx--tile .bx--tile__checkmark) {
        top: 2px;
        right: 2px;
        z-index: 100;
    }

    .tiles :global(.sprite) {
        pointer-events: none;
    }
</style>
