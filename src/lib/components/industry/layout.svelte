<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Grid from "$lib/components/industry/grid.svelte";
    import Slider from "$lib/components/ui/slider.svelte";
    import Tiles from "$lib/components/industry/tiles.svelte";
    import TileEditor from "$lib/components/industry/tile-editor.svelte";

    const dispatch = createEventDispatcher();

    export let id;
    export let images;
    export let layout;
    export let tiles;

    let gridSelected = {
        x: 0,
        y: 0,
    };
    let tileSelected;
    let sizeX;
    let sizeY;

    function UpdateLayout() {
        sizeX = layout[0].length;
        sizeY = layout.length;

        if (gridSelected.x >= sizeX) {
            gridSelected.x = 0;
        }
        if (gridSelected.y >= sizeY) {
            gridSelected.y = 0;
        }

        tileSelected = layout[gridSelected.y][gridSelected.x];
    }

    $: if (layout) UpdateLayout();

    function OnChange() {
        dispatch("change", layout);
    }

    function OnSizeChange() {
        let newLayout = [];
        for (let y = 0; y < sizeY; y++) {
            let newRow = [];
            for (let x = 0; x < sizeX; x++) {
                const row = layout[y] || [];
                const cell = row[x];
                newRow.push(cell === undefined ? -1 : cell);
            }
            newLayout.push(newRow);
        }

        layout = newLayout;

        if (gridSelected.x >= sizeX) {
            gridSelected.x = 0;
        }
        if (gridSelected.y >= sizeY) {
            gridSelected.y = 0;
        }

        OnChange();
    }

    function OnGridSelect(event) {
        tileSelected = layout[event.detail.y][event.detail.x];
    }

    function OnTileSelect(event) {
        layout[gridSelected.y][gridSelected.x] = event.detail;
    }

    function OnTileChange() {
        tiles = tiles;
        OnChange();
    }
</script>

<div class="layout">
    <div>
        <Slider labelText="⤢ size" min={1} max={8} step={1} bind:value={sizeX} on:change={OnSizeChange} />
        <Slider labelText="⤡ size" min={1} max={8} step={1} bind:value={sizeY} on:change={OnSizeChange} />
    </div>

    <div class="flex">
        <div class="grid">
            <Grid {images} {layout} {tiles} bind:selected={gridSelected} on:select={OnGridSelect} />
        </div>
        <div class="tiles">
            <Tiles {images} {tiles} selected={tileSelected} on:select={OnTileSelect} on:change={OnTileChange} />
        </div>
    </div>

    <TileEditor {images} {tiles} {id} {tileSelected} on:change={OnTileChange} />
</div>

<style>
    .flex {
        display: flex;
        justify-content: space-between;
    }

    .tiles {
        margin-top: 12px;
        width: calc(64px * 5);
    }
</style>
