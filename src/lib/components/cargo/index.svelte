<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import SegmentedButton from "$lib/components/ui/segmented-button.svelte";
    import Select from "$lib/components/ui/select.svelte";
    import Switch from "$lib/components/ui/switch.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    import { classes, classesOptional } from "./classes";
    import { units } from "./units";

    const dispatch = createEventDispatcher();

    export let cargo;

    /* cargo.classes is a bitfield, Select needs an array. */
    let cargoClass;
    let cargoClassOptional;

    let currentClassesOptional = classesOptional.map((c) => {
        return {
            ...c,
            disabled: false,
        };
    });

    function UpdateCargo() {
        cargoClass = cargo.classes & 0x7f;
        cargoClassOptional = [];

        /* Figure out what optional classes are available and which are selected. */
        for (let i = 0; i < classesOptional.length; i++) {
            currentClassesOptional[i].disabled = (cargo.classes & currentClassesOptional[i].available) === 0;
            if ((cargo.classes & currentClassesOptional[i].value) !== 0) {
                cargoClassOptional.push(currentClassesOptional[i].value);
            }
        }
    }

    $: if (cargo !== undefined) UpdateCargo();

    function OnChange() {
        console.log(cargo);
        dispatch("change", cargo);
    }

    function OnChangeUnit(event) {
        /* When the unit is set to Tonnes, fix the weight to 1000kg. */
        if (event.detail == "Tonnes") {
            cargo.weight = 16;
        }

        OnChange();
    }

    function OnChangeCargoClass() {
        cargo.classes = parseInt(cargoClass);
        cargoClassOptional = [];
        OnChange();
    }
    function OnChangeCargoClassOptional() {
        cargo.classes = parseInt(cargoClass);
        cargoClassOptional.forEach((c) => {
            cargo.classes |= c;
        });
        OnChange();
    }
</script>

<div class="listing">
    <Switch labelText="Availability" labelOff="Hidden" labelOn="Available" bind:value={cargo.available} on:change={OnChange} />
    <TextInput labelText="Label" placeholder="Label of cargo" bind:value={cargo.label} on:change={OnChange} />
    <TextInput labelText="Abbreviation" placeholder="Abbreviation of cargo" bind:value={cargo.abbreviation} on:change={OnChange} />
    <TextInput labelText="Name" placeholder="Name of cargo" bind:value={cargo.name} on:change={OnChange} />
    <Select options={units} labelText="Unit" bind:value={cargo.unitName} on:change={OnChangeUnit} />
    <Select options={classes} labelText="Cargo class" bind:value={cargoClass} on:change={OnChangeCargoClass} />
    <SegmentedButton options={currentClassesOptional} labelText="Cargo class options" bind:selection={cargoClassOptional} on:change={OnChangeCargoClassOptional} />
</div>

<style>
</style>
