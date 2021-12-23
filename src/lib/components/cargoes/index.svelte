<script lang="ts">
    import Button, { Label } from "@smui/button";
    import Dialog, { Title as DialogTitle, Content as DialogContent, Actions } from "@smui/dialog";
    import FormField from "@smui/form-field";
    import HelperText from "@smui/textfield/helper-text";
    import Listing from "$lib/components/common/listing.svelte";
    import NewItem from "$lib/components/common/new-item.svelte";
    import Paper, { Content, Title } from "@smui/paper";
    import SegmentedButton, { Segment, Label as SegmentedLabel } from "@smui/segmented-button";
    import Select, { Option } from "@smui/select";
    import Slider from "@smui/slider";
    import Switch from "@smui/switch";
    import Textfield from "@smui/textfield";

    import { classes, classesOptional } from "./classes";
    import { disabledCargo } from "./disabled";
    import { newItem } from "./newItem";
    import { units } from "./units";

    export let visible = false;
    export let items = [];

    let selected = 0;
    let dialogDeleteOpen = false;

    $: item = items[selected];
    $: if (item.weight === undefined) item.weight = 16;

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
    let cargoClasses = "";
    function updateCargoClass(item: any) {
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
    $: if (item) updateCargoClass(item);
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

            <Select
                variant="outlined"
                bind:value={item.unitName}
                label="Unit"
                on:SMUISelect:change={(event) => {
                    if (event.detail.value === "Tonnes") item.weight = 16;
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

            <FormField align="end">
                <Slider
                    bind:value={item.weight}
                    min={0}
                    max={32}
                    step={1}
                    discrete
                    style="flex-grow: 1;"
                    valueToAriaValueTextFn={(value) => {
                        return (value / 16).toString();
                    }}
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
                    ({(item.weight / 16) * 1000} kg)
                </span>
            </FormField>

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
        width: 540px;
    }
    .right :global(.mdc-form-field label) {
        width: 236px;
    }

    .right :global(.mdc-segmented-button) {
        margin-left: 20px;
        width: 451px;
    }
    .right :global(.mdc-segmented-button__segment) {
        width: 150px;
    }
</style>
