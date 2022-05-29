<script lang="ts">
    import slug from "slug";

    import { createEventDispatcher } from "svelte";

    import Edit from "carbon-icons-svelte/lib/Edit.svelte";
    import AddFilled from "carbon-icons-svelte/lib/AddFilled.svelte";

    import { Modal } from "carbon-components-svelte";
    import { TileGroup, RadioTile } from "carbon-components-svelte";
    import { TreeView } from "carbon-components-svelte";

    import NumberInput from "$lib/components/ui/number-input.svelte";
    import Sprite from "$lib/components/industry/sprite.svelte";

    import { newTile } from "./newTile";

    const dispatch = createEventDispatcher();

    export let id;
    export let tiles;
    export let images;
    export let selected;

    let tileEditorOpen = false;
    let layerSelected = undefined;
    let tileSelected = undefined;
    let spriteCurrent = undefined;
    let shadowSelected = undefined;

    const layers = [
        {
            id: 0,
            text: "Ground",
        },
        {
            id: 1,
            text: "Building",
        },
    ];

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

            tileSelected = tiles.length - 1;
            tileEditorOpen = true;

            /* Change selection back to actual selection just after the component updated its internal state. */
            setTimeout(() => {
                shadowSelected = selected;
            }, 1);
            return;
        }

        dispatch("select", event.detail);
    }

    function OnEdit(event, id) {
        event.preventDefault();
        event.stopPropagation();

        layerSelected = 0;
        tileSelected = id;
        tileEditorOpen = true;
    }

    function UpdateCurrent() {
        spriteCurrent = tiles[tileSelected].sprites[layerSelected];
    }

    $: if (tileSelected !== undefined && layerSelected !== undefined) UpdateCurrent();

    function OnOffsetChange() {
        /* Trigger Svelte's update. */
        tiles[tileSelected].sprites = tiles[tileSelected].sprites;

        dispatch("change", tileSelected);
    }

    function TileEditorLoadSprite(file) {
        file.arrayBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: "image/png" });
            const sprite = new Image();
            sprite.src = URL.createObjectURL(blob);
            sprite.onload = () => {
                /* Create a canvas to draw on. */
                const canvas = document.createElement("canvas");
                canvas.width = sprite.width;
                canvas.height = sprite.height;

                /* Get a valid context. */
                const ctx = canvas.getContext("2d");
                if (!ctx) throw new Error("Could not get context");

                /* Draw the sprite on the canvas. */
                ctx.drawImage(sprite, 0, 0);

                /* Get the canvas data and replace transparent pixels. */
                const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = img.data;
                for (let i = 0; i < data.length; i += 4) {
                    if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 255) {
                        data[i + 3] = 0;
                    }
                }
                ctx.putImageData(img, 0, 0);

                /* Check if the sprite was using a built-in sprite. */
                if (spriteCurrent.sprite.id !== undefined) {
                    delete spriteCurrent.sprite.id;
                    spriteCurrent.sprite.left = -31;
                    spriteCurrent.sprite.top = 0;

                    const industry_slug = slug(id, { lower: true });
                    const path = `industries/${industry_slug}`;

                    /* Find the first available id to use for a new sprite. */
                    let filename;
                    let i = 1;
                    while (true) {
                        filename = `${path}/${i}.png`;
                        if (images[filename] === undefined) {
                            break;
                        }

                        i++;
                    }

                    spriteCurrent.sprite.filename = filename;
                }

                images[spriteCurrent.sprite.filename] = canvas
                    .toDataURL("image/png")
                    .replace("data:image/png;base64,", "");

                /* Trigger Svelte's update. */
                tiles[tileSelected].sprites = tiles[tileSelected].sprites;

                dispatch("change", tileSelected);
            };
        });
    }
    function TileEditorDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        TileEditorLoadSprite(event.dataTransfer.files[0]);
    }
    function TileEditorPaste(event) {
        TileEditorLoadSprite(event.clipboardData.files[0]);
    }
    function TileEditorDragOver(event) {
        event.preventDefault();
        event.stopPropagation();

        return false;
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

                <span class="edit" on:click={(event) => OnEdit(event, i)}><Edit /></span>
            </RadioTile>
        {/each}
        <RadioTile value={-2} style="padding-top: 22px;">
            <AddFilled title="Add new tile" />
        </RadioTile>
    </TileGroup>

    <Modal
        bind:open={tileEditorOpen}
        modalHeading="Tile editor"
        primaryButtonText="Close"
        on:click:button--primary={() => (tileEditorOpen = false)}
    >
        {#if spriteCurrent !== undefined}
            <div class="flex" on:drop={TileEditorDrop} on:dragover={TileEditorDragOver} on:paste={TileEditorPaste}>
                <div>
                    <TreeView labelText="Layers" children={layers} bind:activeId={layerSelected} />
                </div>

                <div class="sprite">
                    <div class="tile" style="left: 16px;" />
                    <div class="xaxis" style="top: 16px; width: {64 + 16 + 4}px;" />
                    <div class="yaxis" style="left: 32px; height: {32 + 16 + 4}px;" />

                    <Sprite sprite={spriteCurrent.sprite} {images} />
                </div>
            </div>

            <p class="bx--form__helper-text">(drag or paste a new image to replace the current)</p>

            <div class="offsets">
                {#if layerSelected === 0}
                    <NumberInput labelText="Left" placeholder="Pixels" value={-31} disabled />
                    <NumberInput labelText="Top" placeholder="Pixels" value={0} disabled />
                    <p class="bx--form__helper-text">(offsets cannot be changed for the ground layer)</p>
                {:else}
                    <NumberInput
                        labelText="Left"
                        placeholder="Pixels"
                        bind:value={spriteCurrent.sprite.left}
                        on:change={OnOffsetChange}
                    />
                    <NumberInput
                        labelText="Top"
                        placeholder="Pixels"
                        bind:value={spriteCurrent.sprite.top}
                        on:change={OnOffsetChange}
                    />
                    <p class="bx--form__helper-text">(the grid lines should be just visible at the bottom)</p>
                {/if}
            </div>
        {/if}
    </Modal>
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

    .tiles .edit {
        opacity: 0;
        position: absolute;
        right: 2px;
        top: 2px;
        z-index: 100;
    }
    .tiles :global(.bx--tile:hover .edit) {
        opacity: 1;
    }
    .tiles :global(.bx--tile .edit:hover) {
        color: #cccccc;
    }

    .tiles :global(.sprite) {
        pointer-events: none;
    }

    .tiles .flex {
        display: flex;
    }

    .tiles .flex :global(.bx--tree) {
        border: 1px solid #cccccc;
        margin-right: 18px;
    }
    .tiles .flex :global(.bx--tree .bx--tree-node) {
        width: 105px;
    }

    .tiles .flex .sprite {
        height: 140px;
        position: relative;
        margin-left: 235px;
        margin-top: 140px;
    }

    .tiles .flex .sprite .tile {
        width: 43.26px;
        height: 43.26px;
        border: 1px solid #cccccc;
        transform: rotateX(60deg) rotateZ(45deg);
        margin: -6px 0 0 -6px;
        cursor: pointer;
        position: absolute;
        opacity: 0.4;
    }
    .tiles .flex .sprite .xaxis {
        position: absolute;
        left: -10px;
        border-top: 1px solid #cccccc;
        opacity: 0.4;
    }
    .tiles .flex .sprite .yaxis {
        position: absolute;
        top: -10px;
        border-left: 1px solid #cccccc;
        opacity: 0.4;
    }

    .tiles .bx--form__helper-text {
        font-size: 11px;
    }

    .tiles .offsets {
        margin-top: 12px;
    }
</style>
