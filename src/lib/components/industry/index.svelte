<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import NumberInput from "$lib/components/ui/number-input.svelte";
    import SegmentedButton from "$lib/components/ui/segmented-button.svelte";
    import Select from "$lib/components/ui/select.svelte";
    import Slider from "$lib/components/ui/slider.svelte";
    import Switch from "$lib/components/ui/switch.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    import { types } from "./types";
    import { placement } from "./placement";

    const dispatch = createEventDispatcher();

    export let industry;

    function UpdateIndustry() {

    }

    $: if (industry !== undefined) UpdateIndustry();

    function OnChange() {
        if (industry.type !== "primary") {
            industry.prospectChance = 0;
        }

        dispatch("change", industry);
    }
</script>

<div class="listing">
    <Switch labelText="Availability" labelOff="Hidden" labelOn="Available" bind:value={industry.available} on:change={OnChange} />

    <br />

    <TextInput labelText="Name" placeholder="Name of industry" bind:value={industry.name} on:change={OnChange} />
    <Select options={types} labelText="Type" bind:value={industry.type} on:change={OnChange} />
    <Select options={placement} labelText="Placement" bind:value={industry.placement} on:change={OnChange} />

    <br />

    <Slider labelText="Probability (Map Generation)" min={0} max={30} step={1} bind:value={industry.probabilityMapGen} on:change={OnChange}>
        <svelte:fragment slot="tooltip">
            This is a relative value to other industries.<br />
            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of
            spawning as industry A.
        </svelte:fragment>
    </Slider>
    <Slider labelText="Probability (In Game)" min={0} max={30} step={1} bind:value={industry.probabilityInGame} on:change={OnChange}>
        <svelte:fragment slot="tooltip">
            This is a relative value to other industries.<br />
            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of
            spawning as industry A.
        </svelte:fragment>
    </Slider>
    <Slider labelText="Prospect Success Chance" min={0} max={100} step={1} unit="%" bind:value={industry.prospectChance} disabled={industry.type !== "primary"} on:change={OnChange} />
    <Slider labelText="Fund Cost Multiplier" min={0} max={255} step={1} bind:value={industry.fundCostMultiplier} on:change={OnChange} />

    <br />


</div>

<style>
    .listing :global(.bx--text-input__label-helper-wrapper) {
        max-width: 10rem;
    }
</style>
