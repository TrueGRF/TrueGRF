<script lang="ts">
    import { Icon } from "@smui/common";
    import Button, { Label } from "@smui/button";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import FormField from "@smui/form-field";
    import IconButton from "@smui/icon-button";
    import Slider from "@smui/slider";
    import Sprite from "$lib/components/industries/sprite.svelte";
    import Switch from "@smui/switch";
    import Tab, { Label as TabLabel } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import Textfield from "@smui/textfield";

    export let layout;
    export let tiles;

    let lastLayout;
    let layoutTabActive = "0";
    let layoutWidth = 0;
    let layoutHeight = 0;
    let tileSelectedX = 0;
    let tileSelectedY = 0;
    let hideOverlay = false;
    let tileEditorOpen = false;
    let currentTile = 0;

    function checkNewLayout() {
        if (layout === lastLayout) return;

        /* The layout changed completely, so most likely a new industry is selected. */
        lastLayout = layout;
        layoutTabActive = "0";
        updateLayout();
    }
    function newLayout() {
        layout.push([[0]]);
        layout = layout; // Trigger Svelte's update.

        setTimeout(() => {
            layoutTabActive = (layout.length - 1).toString();
        }, 1);
    }
    function deleteLayout() {
        layout.splice(parseInt(layoutTabActive), 1);
        layout = layout; // Trigger Svelte's update.

        if (layout.length == 0) {
            newLayout();
        } else if (layout.length == parseInt(layoutTabActive)) {
            layoutTabActive = (parseInt(layoutTabActive) - 1).toString();
        }
    }
    function updateLayout() {
        layoutWidth = layout[parseInt(layoutTabActive)][0].length;
        layoutHeight = layout[parseInt(layoutTabActive)].length;
        tileSelectedX = 0;
        tileSelectedY = 0;
    }
    function resizeLayout() {
        let newLayout = [];
        for (let y = 0; y < layoutHeight; y++) {
            let newRow = [];
            for (let x = 0; x < layoutWidth; x++) {
                const row = layout[parseInt(layoutTabActive)][y] || [];
                const cell = row[x];
                newRow.push(cell === undefined ? -1 : cell);
            }
            newLayout.push(newRow);
        }
        layout[parseInt(layoutTabActive)] = newLayout;

        tileSelectedX = 0;
        tileSelectedY = 0;
    }
    $: if (layout) checkNewLayout();
    $: if (layoutTabActive) updateLayout();
    $: if (layoutWidth || layoutHeight) resizeLayout();
</script>

<div class="layouts">
    <TabBar tabs={Object.keys(layout)} let:tab bind:active={layoutTabActive} class="layout">
        <Tab {tab}>
            <TabLabel>
                Layout #{parseInt(tab) + 1}
            </TabLabel>
        </Tab>
    </TabBar>
    <IconButton class="material-icons layout-add" on:click={() => newLayout()}>add</IconButton>

    <FormField align="end">
        <Slider bind:value={layoutWidth} min={1} max={8} step={1} discrete style="flex-grow: 1;" />
        <span slot="label">
            Width ({layoutWidth})
        </span>
    </FormField>
    <FormField align="end">
        <Slider bind:value={layoutHeight} min={1} max={8} step={1} discrete style="flex-grow: 1;" />
        <span slot="label">
            Height ({layoutHeight})
        </span>
    </FormField>

    <IconButton class="material-icons layout-delete" on:click={() => deleteLayout()}>delete</IconButton>

    {#each layout as layout, index}
        <div class="{index === parseInt(layoutTabActive) ? '' : 'hidden'} layout-container">
            <div
                class="layout"
                style="width: {32 * (layout.length + layout[0].length)}px; height: {16 *
                    (layout.length + layout[0].length)}px;"
            >
                <div class="grid" style="right: {32 * (layout.length - 1)}px">
                    {#each layout as row}
                        <div class="row">
                            {#each row as cell}
                                <span class="cell sprite">
                                    {#if cell >= 0}
                                        <Sprite bind:sprite={tiles[cell].sprite} />
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
                                        class="cell overlay {tileSelectedX == x && tileSelectedY == y
                                            ? 'selected'
                                            : ''}"
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
    {/each}

    <div class="filler" />
    <div class="tiles">
        <div>
            <span
                class="selectable {layout[layoutTabActive][tileSelectedY][tileSelectedX] === -1 ? 'selected' : ''}"
                on:click={() => {
                    layout[layoutTabActive][tileSelectedY][tileSelectedX] = -1;
                }}
            >
                <Icon class="material-icons">close</Icon>
            </span>
            {#each tiles as tile, i}
                <span>
                    <span
                        class="selectable {layout[layoutTabActive][tileSelectedY][tileSelectedX] === i
                            ? 'selected'
                            : ''}"
                        on:click={() => {
                            layout[layoutTabActive][tileSelectedY][tileSelectedX] = i;
                        }}
                    >
                        <Sprite bind:sprite={tile.sprite} noOffset />
                    </span>
                    <IconButton
                        class="material-icons edit"
                        on:click={() => {
                            currentTile = i;
                            tileEditorOpen = true;
                        }}>edit</IconButton
                    >
                </span>
            {/each}
        </div>
    </div>

    <Dialog bind:open={tileEditorOpen} class="tileEditor">
        <Title>Tile Editor</Title>
        <Content>
            <Sprite bind:sprite={tiles[currentTile].sprite} noOffset />
            <div class="flex">
                <Textfield variant="outlined" bind:value={tiles[currentTile].sprite.left} label="Left" type="number" />
                <Textfield variant="outlined" bind:value={tiles[currentTile].sprite.top} label="Top" type="number" />
            </div>
        </Content>
        <Actions>
            <Button action="accept">
                <Label>Save</Label>
            </Button>
        </Actions>
    </Dialog>

    <FormField>
        <Switch bind:checked={hideOverlay} />
        <span slot="label"> Hide tile overlay?</span>
    </FormField>
</div>

<style>
    .layouts :global(.layout-add) {
        display: inline-block;
        color: var(--mdc-theme-primary, #000000);
        position: relative;
        top: 12px;
    }

    .layouts :global(.layout-delete) {
        display: inline-block;
        color: var(--mdc-theme-error, #ff0000);
    }

    .layouts {
        display: flex;
        flex-wrap: wrap;
    }
    .layouts .layout-container {
        width: 520px;
    }
    .layouts .tiles {
        width: 400px;
    }
    .layouts .tiles > div {
        display: flex;
        flex-wrap: wrap;
    }
    .layouts .tiles > div > span {
        position: relative;
    }
    .layouts .tiles > div > span {
        cursor: pointer;
    }
    .layouts .tiles > div span.selectable:hover > :global(div),
    .layouts .tiles > div span.selectable:hover {
        outline: 1px solid var(--mdc-theme-primary, #ffffff);
    }
    .layouts .tiles > div span.selected > :global(div),
    .layouts .tiles > div span.selected {
        background-color: var(--mdc-theme-primary, #ffffff);
    }
    .layouts .tiles > div > span:hover :global(.edit) {
        display: block;
    }
    .layouts .tiles > div :global(.edit) {
        display: none;
        position: absolute;
        top: -12px;
        right: -12px;
    }

    .layouts .layout :nth-child(1) {
        --nth-child: 0;
    }
    .layouts .layout :nth-child(2) {
        --nth-child: 1;
    }
    .layouts .layout :nth-child(3) {
        --nth-child: 2;
    }
    .layouts .layout :nth-child(4) {
        --nth-child: 3;
    }
    .layouts .layout :nth-child(5) {
        --nth-child: 4;
    }
    .layouts .layout :nth-child(6) {
        --nth-child: 5;
    }
    .layouts .layout :nth-child(7) {
        --nth-child: 6;
    }
    .layouts .layout :nth-child(8) {
        --nth-child: 7;
    }
    .layouts .layout :nth-child(9) {
        --nth-child: 8;
    }

    .layouts .layout {
        position: relative;
        margin-left: 20px;
        margin-top: 80px;
    }
    .layouts .layout .grid {
        position: absolute;
        top: 0px;
    }
    .layouts .layout .row {
        display: block;
        position: absolute;
        height: 32px;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * -32px);
    }
    .layouts .layout .cell,
    .layouts .layout .cell.overlay {
        display: inline-block;
        top: calc(var(--nth-child) * 16px);
        right: calc(var(--nth-child) * 32px);
        position: absolute;
    }

    .layouts .layout .cell.sprite {
        width: 64px;
        height: 31px;
    }
    .layouts .layout .cell.overlay {
        width: 43.26px;
        height: 43.26px;
        border: 1px solid var(--mdc-theme-on-surface, #cccccc);
        transform: rotateX(60deg) rotateZ(45deg);
        margin: -7px 9px 0 0;
        cursor: pointer;
    }
    .layouts .layout .cell.overlay:hover {
        background-color: var(--mdc-theme-on-surface, #cccccc);
        opacity: 0.2;
    }
    .layouts .layout .cell.overlay.selected {
        background-color: var(--mdc-theme-on-surface, #cccccc);
        opacity: 0.4;
    }

    .layouts :global(.tileEditor .flex) {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
    }
    .layouts :global(.tileEditor .mdc-text-field) {
        margin-right: 12px;
        width: 120px;
    }
</style>
