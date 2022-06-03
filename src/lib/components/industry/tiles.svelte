<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import AddFilled from "carbon-icons-svelte/lib/AddFilled.svelte";

    import { TileGroup, RadioTile } from "carbon-components-svelte";

    import Sprite from "$lib/components/industry/sprite.svelte";

    import { newTile } from "./newTile";

    const dispatch = createEventDispatcher();

    export let tiles;
    export let images;
    export let selected;

    let shadowSelected = undefined;

    function UpdateShadow() {
        shadowSelected = selected;
    }

    $: if (selected !== undefined) UpdateShadow();

    function OnSelect(event) {
        /* Check if we wanted to create a new tile. */
        if (event.detail == -2) {
            let tileNew = JSON.parse(JSON.stringify(newTile));
            tiles.push(tileNew);

            /* Trigger Svelte's update. */
            tiles = tiles;
            selected = tiles.length - 1;

            /* Change selection back to actual selection just after the component updated its internal state. */
            setTimeout(() => {
                shadowSelected = selected;
            }, 1);

            dispatch("select", selected);
            return;
        }

        dispatch("select", event.detail);
    }
</script>

<div class="tiles">
    <TileGroup legend="Available tiles" bind:selected={shadowSelected} on:select={OnSelect}>
        <RadioTile value={-1} checked={shadowSelected === -1} style="padding-top: 22px;">(empty)</RadioTile>
        {#each tiles as tile, i}
            <RadioTile value={i} checked={shadowSelected === i}>
                {#each tile.sprites as sprite}
                    <Sprite sprite={sprite.sprite} {images} offsetY={16} />
                {/each}
            </RadioTile>
        {/each}
        <RadioTile value={-2} style="padding-top: 22px;">
            <AddFilled title="Add new tile" />
        </RadioTile>
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
        height: 64px;
        min-width: 0;
        padding: 0;
        position: relative;
        text-align: center;
        width: 64px;
    }

    .tiles :global(.bx--tile .bx--tile__checkmark) {
        top: 2px;
        left: 2px;
        right: auto;
        z-index: 100;
    }

    .tiles :global(.sprite) {
        pointer-events: none;
    }
</style>
