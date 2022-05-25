<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Sprite from "$lib/components/industry/sprite.svelte";

    const dispatch = createEventDispatcher();

    export let images;
    export let layout;
    export let tiles;

    let hideOverlay = false;
    let tileSelectedX;
    let tileSelectedY;

    function OnChange() {
        dispatch("change", layout);
    }
</script>

<div class="layout">
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
        {#if hideOverlay === false}
            <div class="grid" style="right: {32 * (layout.length - 1)}px">
                {#each layout as row, y}
                    <div class="row">
                        {#each row as cell, x}
                            <span
                                class="cell overlay {tileSelectedX == x && tileSelectedY == y ? 'selected' : ''}"
                                on:click={() => {
                                    tileSelectedX = x;
                                    tileSelectedY = y;
                                }}
                            />
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .layout .layout :nth-child(1) {
        --nth-child: 0;
    }
    .layout .layout :nth-child(2) {
        --nth-child: 1;
    }
    .layout .layout :nth-child(3) {
        --nth-child: 2;
    }
    .layout .layout :nth-child(4) {
        --nth-child: 3;
    }
    .layout .layout :nth-child(5) {
        --nth-child: 4;
    }
    .layout .layout :nth-child(6) {
        --nth-child: 5;
    }
    .layout .layout :nth-child(7) {
        --nth-child: 6;
    }
    .layout .layout :nth-child(8) {
        --nth-child: 7;
    }
    .layout .layout :nth-child(9) {
        --nth-child: 8;
    }

    .layout .layout {
        position: relative;
        margin-top: 80px;
    }

    .layout .layout .grid {
        position: absolute;
        top: 0px;
    }

    .layout .layout .row {
        display: block;
        position: absolute;
        height: 32px;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * -32px);
    }

    .layout .layout .cell,
    .layout .layout .cell.overlay {
        display: inline-block;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * 32px);
        position: absolute;
    }
    .layout .layout .cell.sprite {
        width: 64px;
        height: 31px;
    }
    .layout .layout .cell.overlay {
        width: 45px;
        height: 45px;
        border: 1px solid #cccccc;
        transform: rotateX(60deg) rotateZ(45deg);
        margin: -6px 8px 0 0;
        cursor: pointer;
        opacity: 0.4;
    }
    .layout .layout .cell.overlay:hover {
        background-color: #cccccc;
        opacity: 0.2;
    }
    .layout .layout .cell.overlay.selected {
        background-color: #cccccc;
        opacity: 0.4;
    }
</style>
