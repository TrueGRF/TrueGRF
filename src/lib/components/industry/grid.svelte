<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Sprite from "$lib/components/industry/sprite.svelte";
    import Switch from "$lib/components/ui/switch.svelte";

    const dispatch = createEventDispatcher();

    export let images;
    export let layout;
    export let tiles;
    export let selected;

    let showOverlay = true;

    function OnSelect(x, y) {
        selected.x = x;
        selected.y = y;

        dispatch("select", { x, y });
    }
</script>

<div class="grid">
    <div
        class="layout"
        style="width: {32 * (layout.length + layout[0].length)}px; height: {16 * (layout.length + layout[0].length)}px;"
    >
        <div class="grid" style="right: {32 * (layout.length - 1)}px">
            {#each layout as row}
                <div class="row">
                    {#each row as cell}
                        <span class="cell sprite">
                            {#if cell >= 0}
                                {#each tiles[cell].sprites as sprite}
                                    <Sprite bind:sprite={sprite.sprite} {images} />
                                {/each}
                            {/if}
                        </span>
                    {/each}
                </div>
            {/each}
        </div>
        {#if showOverlay === true}
            <div class="grid" style="right: {32 * (layout.length - 1)}px">
                {#each layout as row, y}
                    <div class="row">
                        {#each row as cell, x}
                            <span
                                class="cell overlay {selected !== undefined && selected.x == x && selected.y == y
                                    ? 'selected'
                                    : ''}"
                                on:click={() => OnSelect(x, y)}
                            />
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <Switch labelText="Show overlay" labelOff="Hidden" labelOn="Visible" bind:value={showOverlay} />
</div>

<style>
    .grid {
        position: relative;
    }

    .layout :nth-child(1) {
        --nth-child: 0;
    }
    .layout :nth-child(2) {
        --nth-child: 1;
    }
    .layout :nth-child(3) {
        --nth-child: 2;
    }
    .layout :nth-child(4) {
        --nth-child: 3;
    }
    .layout :nth-child(5) {
        --nth-child: 4;
    }
    .layout :nth-child(6) {
        --nth-child: 5;
    }
    .layout :nth-child(7) {
        --nth-child: 6;
    }
    .layout :nth-child(8) {
        --nth-child: 7;
    }
    .layout :nth-child(9) {
        --nth-child: 8;
    }

    .layout {
        position: relative;
        margin-top: 80px;
    }

    .layout .grid {
        position: absolute;
        top: 0px;
    }

    .layout .row {
        display: block;
        position: absolute;
        height: 32px;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * -32px);
    }

    .layout .cell,
    .layout .cell.overlay {
        display: inline-block;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * 32px);
        position: absolute;
    }
    .layout .cell.sprite {
        width: 64px;
        height: 31px;
    }
    .layout .cell.overlay {
        width: 45px;
        height: 45px;
        border: 1px solid #cccccc;
        transform: rotateX(60deg) rotateZ(45deg);
        margin: -6px 8px 0 0;
        cursor: pointer;
        opacity: 0.4;
    }
    .layout .cell.overlay:hover {
        background-color: #cccccc;
        opacity: 0.2;
    }
    .layout .cell.overlay.selected {
        background-color: #cccccc;
        opacity: 0.4;
    }
</style>
