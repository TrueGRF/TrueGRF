<script lang="ts">
    import { onMount } from "svelte";
    import { colours } from "$lib/components/common/colour-matrix";
    import PalettePicker from "$lib/components/common/palette-picker.svelte";

    export let width = 10;
    export let height = 10;
    export let scale = 16;
    export let base64Data;

    let canvas;
    let canvasPreview;
    let ctx;
    let ctxPreview;
    let lastBase64Data;
    let currentColour;

    let xLast = 0;
    let yLast = 0;
    let widthLast = 0;
    let heightLast = 0;
    let grid = [];
    let mouseDown = false;

    let colourTransparent;

    /* Create checker pattern. */
    function createCheckerPattern() {
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = scale;
        tmpCanvas.height = scale;
        let tmpCtx = tmpCanvas.getContext("2d");

        const size = 4;

        /* Create a checker pattern on the temporary canvas. */
        for (let x = 0; x < tmpCanvas.width; x++) {
            for (let y = 0; y < tmpCanvas.height; y++) {
                let colour = (x + y) % 2 == 0 ? "#cccccc" : "#555555";
                tmpCtx.fillStyle = colour;
                tmpCtx.fillRect(x * size - size / 2, y * size - size / 2, size, size);
            }
        }

        return ctx.createPattern(tmpCanvas, "repeat");
    }

    onMount(async () => {
        ctx = canvas.getContext("2d");
        ctxPreview = canvasPreview.getContext("2d");

        colourTransparent = createCheckerPattern();
    });

    function drawTile(x, y, colour) {
        if (typeof colour === "number") {
            if (colour === 0) {
                ctx.fillStyle = colourTransparent;
                ctxPreview.clearRect(x, y, 1, 1);
            } else {
                ctx.fillStyle = colours[colour];
                ctxPreview.fillStyle = colours[colour];
                ctxPreview.fillRect(x, y, 1, 1);
            }

            base64Data = canvasPreview.toDataURL("image/png").replace("data:image/png;base64,", "");
            lastBase64Data = base64Data;
        } else {
            ctx.fillStyle = colour;
            /* Custom colour, for highlighting. Never draw on preview. */
        }
        ctx.fillRect(x * scale, y * scale, scale, scale);
    }

    function updateGrid() {
        if (widthLast == width && heightLast == height) return;
        widthLast = width;
        heightLast = height;

        let newGrid = [];
        for (let y = 0; y < height; y++) {
            newGrid[y] = [];
            for (let x = 0; x < width; x++) {
                newGrid[y][x] = (grid[y] || [])[x] || 0;
                drawTile(x, y, newGrid[y][x]);
            }
        }

        grid = newGrid;
    }

    function redraw() {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                drawTile(x, y, grid[y][x]);
            }
        }
    }

    function updateSprite() {
        if (base64Data === lastBase64Data) return;
        lastBase64Data = base64Data;

        if (base64Data) {
            const sprite = new Image();
            sprite.src = "data:image/png;base64," + base64Data;
            sprite.onload = () => processSprite(sprite);
        } else {
            widthLast = 0;
            heightLast = 0;
            grid = [];
            updateGrid();
        }
    }

    $: if (ctx) base64Data, updateSprite();
    $: if (ctx && width && height) updateGrid();

    function mouseMove(event) {
        let x = Math.floor(event.offsetX / scale);
        let y = Math.floor(event.offsetY / scale);
        if (x < 0 || x >= width) return;
        if (y < 0 || y >= height) return;

        if (x === xLast && y === yLast) return;
        drawTile(xLast, yLast, grid[yLast][xLast]);
        xLast = x;
        yLast = y;

        if (mouseDown) {
            changeTile(x, y);
            return;
        }

        drawTile(x, y, "rgba(0, 0, 0, 0.4)");
    }

    function changeTile(x, y) {
        grid[y][x] = currentColour;
        drawTile(x, y, grid[y][x]);
    }

    function processSprite(sprite) {
        /* Create a canvas to draw on. */
        const canvas = document.createElement("canvas");
        canvas.width = sprite.width;
        canvas.height = sprite.height;

        /* Get a valid context. */
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Could not get context");

        /* Draw the sprite on the canvas. */
        ctx.drawImage(sprite, 0, 0);

        /* Convert the image to the grid. */
        const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = img.data;

        /* Find the indexed colour based on the RGB values. */
        for (let y = 0; y < canvas.height; y++) {
            if (y >= height) break;

            for (let x = 0; x < canvas.width; x++) {
                if (x >= width) break;

                let index = (y * canvas.width + x) * 4;
                let colour =
                    "#" +
                    data[index].toString(16).padStart(2, "0") +
                    data[index + 1].toString(16).padStart(2, "0") +
                    data[index + 2].toString(16).padStart(2, "0");

                /* In case we don't find the right colour, use pink. */
                grid[y][x] = 14 * 16;
                for (let i = 0; i < colours.length; i++) {
                    if (colours[i] === colour) {
                        grid[y][x] = i;
                        break;
                    }
                }
                /* Full transparent pixel, so assume it is the transparent colour. */
                if (data[index + 3] === 0) grid[y][x] = 0;
            }
        }

        redraw();
    }

    function loadSprite(file) {
        file.arrayBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: "image/png" });
            const sprite = new Image();
            sprite.src = URL.createObjectURL(blob);
            sprite.onload = () => processSprite(sprite);
        });
    }

    function OnDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        loadSprite(event.dataTransfer.files[0]);
    }
    function OnPaste(event) {
        loadSprite(event.clipboardData.files[0]);
    }
    function OnDragOver(event) {
        event.preventDefault();
        event.stopPropagation();

        return false;
    }
</script>

<div class="main" on:drop={OnDrop} on:paste={OnPaste} on:dragover={OnDragOver}>
    <PalettePicker bind:selected={currentColour} bind:scale />

    <div>
        <canvas
            class="canvas"
            style="width: {width * scale}px; height: {height * scale}px;"
            width={width * scale}
            height={height * scale}
            bind:this={canvas}
            on:mousemove={mouseMove}
            on:mousedown={() => {
                changeTile(xLast, yLast);
                mouseDown = true;
            }}
            on:mouseup={() => {
                mouseDown = false;
            }}
        /><br />
        (Edit, drag or paste<br /> the image here)
    </div>
    <canvas style="width: {width}px; height: {height}px;" {width} {height} bind:this={canvasPreview} />
</div>

<style>
    .main {
        display: flex;
        flex-wrap: wrap;
    }

    .main :global(canvas) {
        border: 1px solid var(--mdc-theme-on-background, #000000);
        margin-right: 12px;
    }

    .canvas {
        cursor: pointer;
    }
</style>
