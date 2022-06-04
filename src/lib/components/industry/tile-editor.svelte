<script lang="ts">
    import slug from "slug";

    import { createEventDispatcher } from "svelte";

    import { Tabs, Tab } from "carbon-components-svelte";

    import NumberInput from "$lib/components/ui/number-input.svelte";
    import Palette from "$lib/components/ui/palette.svelte";
    import SpriteEditor from "$lib/components/ui/sprite-editor.svelte";
    import Sprite from "$lib/components/industry/sprite.svelte";

    import { spriteDefaults } from "./spriteDefaults";

    const dispatch = createEventDispatcher();

    export let id;
    export let images;
    export let tiles;
    export let tileSelected;

    let layerSelected = 1;
    let spriteColour;
    let spriteCurrent;
    let sprite;

    let width;
    let height;

    function UpdateCurrentSprite() {
        spriteCurrent = tiles[tileSelected].sprites[layerSelected].sprite;

        /* Check if the sprite was using a built-in sprite. */
        if (spriteCurrent.id !== undefined) {
            const industry_slug = slug(id, { lower: true });
            const path = `industries/${industry_slug}`;

            /* Find the first available id to use for a new sprite. */
            let filename;
            for (let i = 1; ; i++) {
                filename = `${path}/${i}.png`;
                if (images[filename] === undefined) {
                    break;
                }
            }

            /* Write the sprite info from our default information. */
            images[filename] = spriteDefaults[spriteCurrent.id];

            /* Update the sprite with the new on-disk information. */
            delete spriteCurrent.id;
            spriteCurrent.left = -31;
            spriteCurrent.top = 0;
            spriteCurrent.filename = filename;
        }
    }

    $: if (tileSelected >= 0) layerSelected, UpdateCurrentSprite();

    function OnChange() {
        dispatch("change");
    }
    function OnOffsetChange() {
        /* Trigger Svelte's update. */
        tiles[tileSelected].sprites = tiles[tileSelected].sprites;

        dispatch("change");
    }

    function OnResize(event) {
        width = event.detail.width;
        height = event.detail.height;
    }

    function OnSizeChange() {
        sprite.Resize(width, height);
    }
</script>

<div class="tile-editor">
    {#if tileSelected >= 0}
        <Tabs class="subnav" bind:selected={layerSelected}>
            <Tab label="Ground" />
            <Tab label="Building" />
        </Tabs>

        <div class="flex">
            <div>
                {#if layerSelected === 0}
                    <NumberInput labelText="Left" placeholder="Pixels" value={-31} disabled />
                    <NumberInput labelText="Top" placeholder="Pixels" value={0} disabled />
                    <p class="bx--form__helper-text">(offsets cannot be changed for the ground layer)</p>
                {:else}
                    <NumberInput
                        labelText="Left"
                        placeholder="Pixels"
                        bind:value={spriteCurrent.left}
                        on:change={OnOffsetChange}
                    />
                    <NumberInput
                        labelText="Top"
                        placeholder="Pixels"
                        bind:value={spriteCurrent.top}
                        on:change={OnOffsetChange}
                    />
                    <p class="bx--form__helper-text">(the grid lines should be just visible at the bottom)</p>
                {/if}
            </div>

            <div class="sprite">
                <div class="tile" style="left: 16px;" />
                <div class="xaxis" style="top: 16px; width: {64 + 16 + 4}px;" />
                <div class="yaxis" style="left: 32px; height: {32 + 16 + 4}px;" />

                <Sprite sprite={spriteCurrent} {images} />
            </div>
        </div>

        <div class="flex">
            <SpriteEditor
                bind:base64Data={images[spriteCurrent.filename]}
                colour={spriteColour}
                on:change={OnChange}
                on:resize={OnResize}
                scale={8}
                bind:this={sprite}
            />

            <div>
                <Palette bind:selected={spriteColour} />

                <div class="size">
                    {#if layerSelected === 0}
                        <NumberInput labelText="Width" placeholder="Pixels" value={64} disabled />
                        <NumberInput labelText="Height" placeholder="Pixels" value={31} disabled />
                        <p class="bx--form__helper-text">(size cannot be changed for the ground layer)</p>
                    {:else}
                        <NumberInput
                            labelText="Width"
                            placeholder="Pixels"
                            bind:value={width}
                            on:change={OnSizeChange}
                        />
                        <NumberInput
                            labelText="Height"
                            placeholder="Pixels"
                            bind:value={height}
                            on:change={OnSizeChange}
                        />
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .flex {
        display: flex;
        margin-top: 12px;
    }

    .tile-editor :global(.bx--text-input__label-helper-wrapper) {
        width: 5rem;
    }

    .size :global(.bx--form-item) {
        width: 160px;
    }

    .sprite {
        position: relative;
        margin-left: 40px;
        margin-top: 20px;
    }

    .sprite .tile {
        width: 43.26px;
        height: 43.26px;
        border: 1px solid #cccccc;
        transform: rotateX(60deg) rotateZ(45deg);
        margin: -6px 0 0 -6px;
        cursor: pointer;
        position: absolute;
        opacity: 0.4;
    }
    .sprite .xaxis {
        position: absolute;
        left: -10px;
        border-top: 1px solid #cccccc;
        opacity: 0.4;
    }
    .sprite .yaxis {
        position: absolute;
        top: -10px;
        border-left: 1px solid #cccccc;
        opacity: 0.4;
    }
</style>
