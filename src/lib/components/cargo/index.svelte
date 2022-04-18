<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import NumberInput from "$lib/components/ui/number-input.svelte";
    import SegmentedButton from "$lib/components/ui/segmented-button.svelte";
    import Select from "$lib/components/ui/select.svelte";
    import Slider from "$lib/components/ui/slider.svelte";
    import Switch from "$lib/components/ui/switch.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    import { classes, classesOptional } from "./classes";
    import { units } from "./units";

    const dispatch = createEventDispatcher();

    export let cargo;

    /* classes is a bitfield, Select needs an array. */
    let cargoClass;
    let cargoClassOptional;
    /* weight is internally in steps of 16, not 1000. */
    let weight;
    /* price is internally in a difficult format. Use pounds in the UI. */
    let price;
    /* penaltyUpperBound and penaltyLowerBound are internally in steps of 2.5. */
    let penaltyUpperBound;
    let penaltyLowerBound;

    let currentClassesOptional = classesOptional.map((c) => {
        return {
            ...c,
            disabled: false,
        };
    });

    function UpdateCargo() {
        cargoClass = cargo.classes & 0x7f;
        cargoClassOptional = [];
        weight = (cargo.weight / 16.0) * 1000;
        price = Math.round((cargo.price * 10 * 20 * 255) / (1 << 21));
        penaltyLowerBound = cargo.penaltyLowerBound * 2.5;
        penaltyUpperBound = (cargo.penaltyLowerBound + cargo.penaltyLength) * 2.5;

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
    function OnChangeWeight() {
        cargo.weight = Math.round(weight * 16 / 1000.0);
        OnChange();
    }
    function OnChangePrice() {
        cargo.price = Math.round((price * (1 << 21)) / 10 / 20 / 255);
        OnChange();
    }
    function OnChangePenalty() {
        if (penaltyUpperBound < penaltyLowerBound) {
            penaltyUpperBound = penaltyLowerBound;
        }

        cargo.penaltyLowerBound = Math.round(penaltyLowerBound / 2.5);
        cargo.penaltyLength = Math.round((penaltyUpperBound - penaltyLowerBound) / 2.5);
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
    <Slider min={0} max={2000} step={62.5} unit="kg" disabled={cargo.unitName === "Tonnes"} bind:value={weight} on:change={OnChangeWeight}>
        <svelte:fragment slot="labelText">
            Weight per
            {#if cargo.unitName === "Tonnes"}
                ton
            {:else if cargo.unitName === "Passengers"}
                passenger
            {:else if cargo.unitName === "Bags"}
                bag
            {:else if cargo.unitName === "Items"}
                item
            {:else if cargo.unitName === "Crates"}
                crate
            {:else if cargo.unitName === "Litres"}
                1,000 litres
            {/if}
        </svelte:fragment>
    </Slider>
    <NumberInput labelText="Price in pounds" placeholder="Price of cargo" min={1} bind:value={price} on:change={OnChangePrice}>
        <svelte:fragment slot="tooltip">
            Price per
            {#if cargo.unitName === "Tonnes"}
                10 tonnes
            {:else if cargo.unitName === "Passengers"}
                10 passengers
            {:else if cargo.unitName === "Bags"}
                10 bags
            {:else if cargo.unitName === "Items"}
                10 item
            {:else if cargo.unitName === "Crates"}
                10 crate
            {:else if cargo.unitName === "Litres"}
                10,000 litres
            {/if}
            across 20 tiles in pounds
        </svelte:fragment>
    </NumberInput>
    <Slider labelText="Penalty (lowerbound)" min={0} max={637.5} step={2.5} unit="days" bind:value={penaltyLowerBound} on:change={OnChangePenalty}>
        <svelte:fragment slot="tooltip">
            The first mark indicates after how many days in transit the price of the cargo starts to drop
            with 0.16% per extra day in transit.<br />
            The second mark indicates after how many days this becomes 0.31% per extra day in transit.<br
            />
            The price can never drop below 12% of the original price.
        </svelte:fragment>
    </Slider>
    <Slider labelText="Penalty (upperbound)" min={0} max={637.5} step={2.5} unit="days" bind:value={penaltyUpperBound} on:change={OnChangePenalty}/>
</div>

<style>
    .listing :global(.bx--text-input__label-helper-wrapper) {
        max-width: 10rem;
    }
</style>
