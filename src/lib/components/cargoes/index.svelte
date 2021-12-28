<script lang="ts">
    import { colours } from "$lib/components/common/colour-matrix";
    import { Icon } from "@smui/common";
    import Button, { Label } from "@smui/button";
    import Dialog, { Title as DialogTitle, Content as DialogContent, Actions } from "@smui/dialog";
    import FormField from "@smui/form-field";
    import HelperText from "@smui/textfield/helper-text";
    import Listing from "$lib/components/common/listing.svelte";
    import NewItem from "$lib/components/common/new-item.svelte";
    import PalettePicker from "$lib/components/common/palette-picker.svelte";
    import Paper, { Content, Title } from "@smui/paper";
    import SegmentedButton, { Segment, Label as SegmentedLabel } from "@smui/segmented-button";
    import Select, { Option } from "@smui/select";
    import Slider from "@smui/slider";
    import SpriteEditor from "$lib/components/common/sprite-editor.svelte";
    import Switch from "@smui/switch";
    import Textfield from "@smui/textfield";
    import Tooltip, { Wrapper } from "@smui/tooltip";

    import { classes, classesOptional } from "./classes";
    import { disabledCargo } from "./disabled";
    import { newItem } from "./newItem";
    import { units } from "./units";

    export let visible = false;
    export let items = [];

    let selected = 0;
    let dialogDeleteOpen = false;
    let dialogColourOpen = false;

    $: item = items[selected];
    /* Compatibility for older JSON backups. */
    $: if (item && item.weight === undefined) item.weight = 16;
    $: if (item && item.price === undefined) item.price = 4112;
    $: if (item && item.penaltyLowerBound === undefined) item.penaltyLowerBound = 0;
    $: if (item && item.penaltyLength === undefined) item.penaltyLength = 255;
    $: if (item && item.sprite === undefined)
        item.sprite = {
            width: 10,
            height: 10,
            top: 0,
            left: 0,
            base64Data: "",
        };
    $: if (item && item.abbreviation === undefined) item.abbreviation = "??";
    $: if (item && item.colour === undefined) item.colour = 1;

    /* We added "selected" and "disabled" field to the array, so we can use it directly in the components. */
    let currentClassesOptional = classesOptional.map((c) => {
        return {
            ...c,
            selected: false,
            disabled: false,
        };
    });

    /* Easy wrapper to check if a cargo is disabled. */
    function isDisabled(item) {
        return disabledCargo.includes(item.id);
    }

    /* CargoClasses is a bitmask. This requires a bit of glue to work correctly. */
    let cargoClasses;
    function updateCargoClass() {
        cargoClasses = (item.classes & 0x7f).toString();
        for (let i = 0; i < classesOptional.length; i++) {
            currentClassesOptional[i].selected = (item.classes & currentClassesOptional[i].value) !== 0;
            currentClassesOptional[i].disabled =
                (item.classes & currentClassesOptional[i].available) === 0 || isDisabled(item);
        }
    }
    function updateCargoClassOptional(segment) {
        segment.selected = !segment.selected;
        if (segment.selected) {
            item.classes |= segment.value;
        } else {
            item.classes &= ~segment.value;
        }
    }
    $: if (item.classes) updateCargoClass();
    $: if (cargoClasses) item.classes = parseInt(cargoClasses);

    function deleteCargo() {
        items.splice(selected, 1);
        items = items; // Trigger Svelte's update.
        if (selected == items.length) selected--;

        dialogDeleteOpen = false;
    }
    function newCargo() {
        /* Find first available ID. */
        let id = 32;
        while (items.find((i) => i.id == id)) id++;

        /* Copy template to new cargo. */
        let newCargo = JSON.parse(JSON.stringify(newItem));
        newCargo.id = id;

        /* Add new cargo. */
        items.push(newCargo);
        items = items; // Trigger Svelte's update.
        selected = items.length - 1;
    }

    /* Convert weight from kg to internal GRF value. */
    let weight;
    function updateWeight() {
        weight = (item.weight / 16.0) * 1000;
    }
    $: if (item.weight) updateWeight();
    $: if (weight) item.weight = (weight * 16) / 1000;

    /* Convert price per 10 units across 20 tiles to internal GRF value. */
    let price;
    function updatePrice() {
        let newPrice = (item.price * 10 * 20 * 255) / (1 << 21);

        /* Don't correct for small changes, as otherwise due to rounding we might not be able to indicate a certain price. */
        if (price === undefined || Math.abs(newPrice - price) > 0.5) {
            price = Math.round(newPrice);
        }
    }
    $: if (item.price) updatePrice();
    $: if (price) item.price = Math.round((price * (1 << 21)) / 10 / 20 / 255);

    /* Convert penalty bounds from days to internal GRF value. */
    let penaltyLowerBound;
    let penaltyUpperBound;
    function updatePenalty() {
        penaltyLowerBound = item.penaltyLowerBound * 2.5;
        penaltyUpperBound = (item.penaltyLowerBound + item.penaltyLength) * 2.5;
    }
    $: if (item.penaltyLowerBound || item.penaltyLength) updatePenalty();
    $: if (penaltyLowerBound && penaltyUpperBound) {
        item.penaltyLowerBound = penaltyLowerBound / 2.5;
        item.penaltyLength = (penaltyUpperBound - penaltyLowerBound) / 2.5;
    }
</script>

<div class="content {visible ? '' : 'hidden'}">
    <div class="left">
        <Listing bind:items bind:selected />
        <NewItem on:click={() => newCargo()} label="cargo" />
    </div>
    <div class="right">
        {#if items.length !== 0}
            <FormField>
                <Switch bind:checked={item.available} disabled={isDisabled(item)} />
                <span slot="label"> Available ingame?</span>
            </FormField>

            <Textfield
                variant="outlined"
                bind:value={item.label}
                label="Label"
                input$maxlength={4}
                disabled={isDisabled(item)}
            >
                <HelperText slot="helper">Unique label of cargo (4 letters)</HelperText>
            </Textfield>

            <Textfield variant="outlined" bind:value={item.name} label="Name">
                <HelperText slot="helper">Name of cargo</HelperText>
            </Textfield>

            <Textfield variant="outlined" bind:value={item.longName} label="Long name">
                <HelperText slot="helper">Long name of cargo</HelperText>
            </Textfield>

            <Textfield variant="outlined" bind:value={item.abbreviation} label="Abbreviation" input$maxlength={2}>
                <HelperText slot="helper">Abbreviation of cargo (2 letters)</HelperText>
            </Textfield>

            <Select
                variant="outlined"
                bind:value={item.unitName}
                label="Unit"
                on:SMUISelect:change={(event) => {
                    if (event.detail.value === "Tonnes") weight = 1000.0;
                }}
            >
                {#each units as unit}
                    <Option value={unit}>{unit}</Option>
                {/each}
            </Select>

            <Select variant="outlined" bind:value={cargoClasses} disabled={isDisabled(item)} label="Cargo class">
                {#each classes as c}
                    <Option value={c.value.toString()}>{c.name}</Option>
                {/each}
            </Select>

            <SegmentedButton segments={currentClassesOptional} let:segment key={(segment) => segment.name}>
                <Segment
                    {segment}
                    selected={segment.selected}
                    disabled={segment.disabled}
                    on:click={() => updateCargoClassOptional(segment)}
                >
                    <SegmentedLabel>{segment.name}</SegmentedLabel>
                </Segment>
            </SegmentedButton>

            <div class="flex">
                <FormField align="end">
                    <Slider
                        bind:value={weight}
                        min={0}
                        max={2000}
                        step={62.5}
                        discrete
                        style="flex-grow: 1;"
                        disabled={item.unitName === "Tonnes"}
                    />
                    <span slot="label">
                        Weight per
                        {#if item.unitName === "Tonnes"}
                            ton
                        {:else if item.unitName === "Passengers"}
                            passenger
                        {:else if item.unitName === "Bags"}
                            bag
                        {:else if item.unitName === "Items"}
                            item
                        {:else if item.unitName === "Crates"}
                            crate
                        {:else if item.unitName === "Litres"}
                            1,000 litres
                        {/if}
                        ({weight} kg)
                    </span>
                </FormField>

                <div class="mdc-form-field mdc-form-field--align-end colour">
                    <span>Cargo colour ({item.colour})</span>
                    <div style="background-color: {colours[item.colour]};" on:click={() => (dialogColourOpen = true)} />

                    <Dialog bind:open={dialogColourOpen}>
                        <DialogTitle id="simple-title">Pick a colour</DialogTitle>
                        <DialogContent id="simple-content">
                            <PalettePicker scale={16} bind:selected={item.colour} />
                        </DialogContent>
                        <Actions>
                            <Button>
                                <Label>Close</Label>
                            </Button>
                        </Actions>
                    </Dialog>
                </div>
            </div>

            <div class="flex">
                <FormField align="end">
                    <Slider
                        range
                        bind:start={penaltyLowerBound}
                        bind:end={penaltyUpperBound}
                        min={0}
                        max={637.5}
                        step={2.5}
                        discrete
                        tickMarks
                        style="flex-grow: 1;"
                    />
                    <span slot="label">
                        Cargo price penalty (days)
                        <Wrapper>
                            <Icon class="help material-icons">help</Icon>
                            <Tooltip>
                                The first mark indicates after how many days in transit the price of the cargo starts to
                                drop with ~0.16% per extra day in transit.<br />
                                The second mark indicates after how many days this becomes ~0.31% per extra day in transit.<br
                                />
                                The price can never drop below ~12% of the original price.
                            </Tooltip>
                        </Wrapper>
                    </span>
                </FormField>

                <div>
                    <Textfield variant="outlined" bind:value={price} label="Price" type="number" class="price">
                        <HelperText slot="helper">
                            Price per
                            {#if item.unitName === "Tonnes"}
                                10 tonnes
                            {:else if item.unitName === "Passengers"}
                                10 passengers
                            {:else if item.unitName === "Bags"}
                                10 bags
                            {:else if item.unitName === "Items"}
                                10 item
                            {:else if item.unitName === "Crates"}
                                10 crate
                            {:else if item.unitName === "Litres"}
                                10,000 litres
                            {/if}
                            across 20 tiles
                        </HelperText>
                    </Textfield>
                </div>
            </div>

            <SpriteEditor bind:base64Data={item.sprite.base64Data} />

            <Paper variant="outlined" class="dangerzone">
                <Title>Danger Zone</Title>
                <Content>
                    <div class="filler" />
                    <Button variant="raised" disabled={isDisabled(item)} on:click={() => (dialogDeleteOpen = true)}>
                        <Label>Delete Cargo</Label>
                    </Button>

                    <Dialog bind:open={dialogDeleteOpen}>
                        <DialogTitle id="simple-title">Delete this cargo?</DialogTitle>
                        <DialogContent id="simple-content">
                            Are you sure you want to delete '{item.name}'?<br />
                            This action <b>cannot</b> be undone.
                        </DialogContent>
                        <Actions>
                            <Button>
                                <Label>No</Label>
                            </Button>
                            <Button on:click={() => deleteCargo()}>
                                <Label>Yes, delete</Label>
                            </Button>
                        </Actions>
                    </Dialog>
                </Content>
            </Paper>
        {/if}
    </div>
</div>

<style>
    .right {
        border: 1px solid var(--mdc-theme-on-surface, #fff);
        height: calc(100vh - 180px);
        padding: 12px;
        overflow: auto;
    }

    .right :global(.mdc-text-field) {
        margin-top: 12px;
        width: 100%;
    }
    .right :global(.mdc-select) {
        margin-top: 12px;
        margin-right: 10px;
        width: 250px;
    }
    .right :global(.mdc-form-field) {
        margin-top: 12px;
        width: 540px;
    }
    .right :global(.mdc-form-field label) {
        width: 236px;
    }
    .right :global(> .mdc-form-field:first-child) {
        margin-top: 0px;
    }
    .right :global(.mdc-text-field.price) {
        width: 250px;
    }

    .right .colour {
        margin-top: 12px;
        width: 300px;
    }
    .right .colour > span {
        width: 146px;
    }

    .right .colour > div {
        border: 1px solid var(--mdc-theme-on-surface);
        cursor: pointer;
        height: 48px;
        width: 100px;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    .right :global(.material-icons.help) {
        position: relative;
        top: 7px;
        left: 10px;
    }

    .right :global(.mdc-segmented-button) {
        margin-left: 20px;
        width: 451px;
    }
    .right :global(.mdc-segmented-button__segment) {
        width: 150px;
    }
</style>
