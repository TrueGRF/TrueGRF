<script lang="ts">
    import { onMount } from "svelte";

    export let width = 10;
    export let height = 10;
    export let scale = 16;
    export let base64Data;

    let canvas;
    let canvasPreview;
    let canvasColour;
    let ctx;
    let ctxPreview;
    let ctxColour;
    let lastBase64Data;

    let xLast = 0;
    let yLast = 0;
    let widthLast = 0;
    let heightLast = 0;
    let grid = [];
    let mouseDown = false;
    let currentColour = 1;

    let colourTransparent;
    const colours = [
        "#0000ff",
        "#101010",
        "#202020",
        "#303030",
        "#404040",
        "#505050",
        "#646464",
        "#747474",
        "#848484",
        "#949494",
        "#a8a8a8",
        "#b8b8b8",
        "#c8c8c8",
        "#d8d8d8",
        "#e8e8e8",
        "#fcfcfc",
        "#343c48",
        "#444c5c",
        "#586070",
        "#6c7484",
        "#848c98",
        "#9ca0ac",
        "#b0b8c4",
        "#ccd0dc",
        "#302c04",
        "#403c0c",
        "#504c14",
        "#605c1c",
        "#787840",
        "#949464",
        "#b0b084",
        "#cccca8",
        "#482c04",
        "#583c14",
        "#68502c",
        "#7c6848",
        "#98845c",
        "#b8a078",
        "#d4bc94",
        "#f4dcb0",
        "#400004",
        "#580410",
        "#701020",
        "#882034",
        "#a0384c",
        "#bc546c",
        "#cc687c",
        "#dc8490",
        "#ec9ca4",
        "#fcbcc0",
        "#fcd000",
        "#fce83c",
        "#fcfc80",
        "#4c2800",
        "#603c08",
        "#74581c",
        "#887438",
        "#9c8850",
        "#b09c6c",
        "#c4b488",
        "#441800",
        "#602c04",
        "#804408",
        "#9c6010",

        "#b87818",
        "#d49c20",
        "#e8b810",
        "#fcd400",
        "#fcf880",
        "#fcfcc0",
        "#200400",
        "#401408",
        "#541c10",
        "#6c2c1c",
        "#803828",
        "#944838",
        "#a85c4c",
        "#b86c58",
        "#c4806c",
        "#d49480",
        "#083400",
        "#104000",
        "#205004",
        "#306004",
        "#40700c",
        "#548414",
        "#68941c",
        "#80a82c",
        "#1c3418",
        "#2c4420",
        "#3c5830",
        "#50683c",
        "#687c4c",
        "#80945c",
        "#98b06c",
        "#b4cc7c",
        "#103418",
        "#20482c",
        "#386048",
        "#4c7458",
        "#60886c",
        "#78a488",
        "#98c0a8",
        "#b8dcc8",
        "#201800",
        "#381c00",
        "#482804",
        "#58340c",
        "#684018",
        "#7c542c",
        "#8c6c40",
        "#a08058",
        "#4c2810",
        "#603418",
        "#744428",
        "#885438",
        "#a46040",
        "#b87050",
        "#cc8060",
        "#d49470",
        "#e0a880",
        "#ecbc94",
        "#501c04",
        "#642814",
        "#783828",
        "#8c4c40",
        "#a06460",
        "#b88888",

        "#242844",
        "#303454",
        "#404064",
        "#505074",
        "#646488",
        "#8484a4",
        "#acacc0",
        "#d4d4e0",
        "#281470",
        "#402c90",
        "#5840ac",
        "#684cc4",
        "#7858e0",
        "#8c68fc",
        "#a088fc",
        "#bca8fc",
        "#00186c",
        "#002484",
        "#0034a0",
        "#0048b8",
        "#0060d4",
        "#1878dc",
        "#3890e8",
        "#58a8f0",
        "#80c4fc",
        "#bce0fc",
        "#104060",
        "#18506c",
        "#286078",
        "#347084",
        "#508ca0",
        "#74acc0",
        "#9cccdc",
        "#ccf0fc",
        "#ac3434",
        "#d43434",
        "#fc3434",
        "#fc6458",
        "#fc907c",
        "#fcb8a0",
        "#fcd8c8",
        "#fcf4ec",
        "#481470",
        "#5c2c8c",
        "#7044a8",
        "#8c64c4",
        "#a888e0",
        "#c8b0f8",
        "#d0b8ff",
        "#e8d0fc",
        "#3c0000",
        "#5c0000",
        "#800000",
        "#a00000",
        "#c40000",
        "#e00000",
        "#fc0000",
        "#fc5000",
        "#fc6c00",
        "#fc8800",
        "#fca400",
        "#fcc000",
        "#fcdc00",
        "#fcfc00",

        "#cc8808",
        "#e49004",
        "#fc9c00",
        "#fcb030",
        "#fcc464",
        "#fcd898",
        "#081858",
        "#0c2468",
        "#14347c",
        "#1c448c",
        "#285ca4",
        "#3878bc",
        "#4898d8",
        "#64ace0",
        "#5c9c34",
        "#6cb040",
        "#7cc84c",
        "#90e05c",
        "#e0f4fc",
        "#c8ecf8",
        "#b4dcec",
        "#84bcd8",
        "#5898ac",
        "#f400f4",
        "#f500f5",
        "#f600f6",
        "#f700f7",
        "#f800f8",
        "#f900f9",
        "#fa00fa",
        "#fb00fb",
        "#fc00fc",
        "#fd00fd",
        "#fe00fe",
        "#ff00ff",
        "#4c1808",
        "#6c2c18",
        "#904834",
        "#b06c54",
        "#d2927e",
        "#fc3c00",
        "#fc5400",
        "#fc6800",
        "#fc7c00",
        "#fc9400",
        "#fcac00",
        "#fcc400",
        "#400000",
        "#ff0000",
        "#303000",
        "#404000",
        "#505000",
        "#ffff00",
        "#204470",
        "#244874",
        "#284c78",
        "#2c507c",
        "#305480",
        "#486490",
        "#6484a8",
        "#d8f4fc",
        "#6080a4",
        "#44608c",
        "#ffffff",
    ];

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
        ctxColour = canvasColour.getContext("2d");

        colourTransparent = createCheckerPattern();

        /* Create the palette canvas. */
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 16; x++) {
                ctxColour.fillStyle = colours[y * 16 + x];
                ctxColour.fillRect(x * scale, y * scale, scale, scale);
            }
        }
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

    function pickColour(event) {
        let x = Math.floor(event.offsetX / scale);
        let y = Math.floor(event.offsetY / scale);

        let xPrev = currentColour % 16;
        let yPrev = Math.floor(currentColour / 16);
        ctxColour.fillStyle = colours[currentColour];
        ctxColour.fillRect(xPrev * scale, yPrev * scale, scale, scale);

        currentColour = x + y * 16;
        ctxColour.strokeStyle = "black";
        ctxColour.strokeRect(x * scale + 1, y * scale + 1, scale - 2, scale - 2);
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
    <canvas
        class="canvas"
        style="width: {16 * scale}px; height: {16 * scale}px;"
        width={16 * scale}
        height={16 * scale}
        bind:this={canvasColour}
        on:click={pickColour}
    />

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
        (you can also drag / <br />paste a new image)
    </div>
    <canvas style="width: {width}px; height: {height}px;" {width} {height} bind:this={canvasPreview} />
</div>

<style>
    .main {
        display: flex;
        flex-wrap: wrap;
    }

    .main canvas {
        border: 1px solid var(--mdc-theme-on-background, #000000);
        margin-right: 12px;
    }

    .canvas {
        cursor: pointer;
    }
</style>
