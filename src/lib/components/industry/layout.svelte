<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";

    import { Button } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";

    import Grid from "$lib/components/industry/grid.svelte";
    import Slider from "$lib/components/ui/slider.svelte";
    import Tiles from "$lib/components/industry/tiles.svelte";

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
    let deleteLayoutOpen = false;

    function DeleteLayout() {
        dispatch("delete");
        deleteLayoutOpen = false;
    }

    function CreateLayout() {
        dispatch("create");
    }

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
    <div class="flex">
        <div>
            <Slider labelText="⤢ size" min={1} max={8} step={1} bind:value={sizeX} on:change={OnSizeChange} />
            <Slider labelText="⤡ size" min={1} max={8} step={1} bind:value={sizeY} on:change={OnSizeChange} />
        </div>

        <div>
            <Button
                kind="tertiary"
                iconDescription="New layout"
                icon={Add}
                size="small"
                tooltipPosition="bottom"
                tooltipAlignment="end"
                on:click={() => CreateLayout()}
            />

            <Button
                kind="danger-tertiary"
                iconDescription="Delete layout"
                icon={TrashCan}
                size="small"
                tooltipPosition="bottom"
                tooltipAlignment="end"
                on:click={() => (deleteLayoutOpen = true)}
            />
        </div>
    </div>

    <div class="column">
        <div class="grid">
            <Grid {images} {layout} {tiles} bind:selected={gridSelected} on:select={OnGridSelect} />
        </div>
        <div class="tiles">
            <Tiles {images} {tiles} {id} selected={tileSelected} on:select={OnTileSelect} on:change={OnTileChange} />
        </div>
    </div>

    <Modal
        bind:open={deleteLayoutOpen}
        modalHeading="Delete layout?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deleteLayoutOpen = false)}
        on:click:button--primary={() => DeleteLayout()}
        danger
    >
        Are you sure you want to delete this layout?
    </Modal>
</div>

<style>
    .column {
        display: flex;
        justify-content: space-between;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .flex :global(.bx--btn) {
        height: 2rem;
        margin-top: 1rem;
    }

    .tiles {
        width: calc(64px * 5);
    }
</style>
