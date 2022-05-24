<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    import { colours } from "./colours";

    export let scale = 16;
    export let selected = 0;

    let canvas;
    let ctx;
    let lastSelected;

    const dispatch = createEventDispatcher();

    onMount(async () => {
        ctx = canvas.getContext("2d");

        /* Create the palette. */
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 16; x++) {
                ctx.fillStyle = colours[y * 16 + x];
                ctx.fillRect(x * scale, y * scale, scale, scale);
            }
        }
    });

    function ChangeColourHightlight() {
        if (lastSelected !== undefined) {
            let xLast = lastSelected % 16;
            let yLast = Math.floor(lastSelected / 16);
            ctx.fillStyle = colours[lastSelected];
            ctx.fillRect(xLast * scale, yLast * scale, scale, scale);
        }

        let x = selected % 16;
        let y = Math.floor(selected / 16);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x * scale + 1, y * scale + 1, scale - 2, scale - 2);

        lastSelected = selected;
    }

    function PickColour(event) {
        let x = Math.floor(event.offsetX / scale);
        let y = Math.floor(event.offsetY / scale);

        selected = x + y * 16;
        dispatch("change", selected);
    }

    $: if (ctx) selected, ChangeColourHightlight();
</script>

<div>
    <canvas
        class="canvas"
        style="width: {16 * scale}px; height: {16 * scale}px;"
        width={16 * scale}
        height={16 * scale}
        bind:this={canvas}
        on:click={PickColour}
    />
</div>

<style>
    .canvas {
        cursor: pointer;
    }
</style>
