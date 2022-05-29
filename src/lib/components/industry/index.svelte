<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Pagination } from "carbon-components-svelte";
    import { TextArea } from "carbon-components-svelte";

    import Layout from "$lib/components/industry/layout.svelte";
    import MultiSelect from "$lib/components/ui/multi-select.svelte";
    import Select from "$lib/components/ui/select.svelte";
    import Slider from "$lib/components/ui/slider.svelte";
    import Switch from "$lib/components/ui/switch.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    import { types } from "./types";
    import { placement } from "./placement";

    const dispatch = createEventDispatcher();

    export let industry;
    export let cargoes;
    export let industries;
    export let images;

    let lastId;
    let cargoesItems = [];
    let selectedLayout = 1;

    function UpdateCargoes() {
        cargoesItems = [];

        for (let cargo of cargoes) {
            cargoesItems.push({
                id: cargo.label,
                text: `${cargo.name} (${cargo.label})`,
            });
        }

        /* Inform Svelte the array is changed. */
        cargoesItems = cargoesItems;
    }

    function UpdateIndustry() {
        if (lastId !== industry.id) {
            lastId = industry.id;

            selectedLayout = 1;
        }
    }

    $: if (cargoes !== undefined) UpdateCargoes();
    $: if (industry !== undefined) UpdateIndustry();

    function OnChange() {
        if (industry.type !== "primary") {
            industry.prospectChance = 0;
        }

        dispatch("change", industry);
    }

    function ValidateName(value) {
        if (industries.find((i) => i.id != industry.id && i.name == value)) {
            return "Name already exists";
        }
    }
</script>

<div class="listing">
    <Switch
        labelText="Availability"
        labelOff="Hidden"
        labelOn="Available"
        bind:value={industry.available}
        on:change={OnChange}
    />

    <br />

    <TextInput
        labelText="Name"
        placeholder="Name of industry"
        validate={ValidateName}
        bind:value={industry.name}
        on:change={OnChange}
    />
    <Select options={types} labelText="Type" bind:value={industry.type} on:change={OnChange} />
    <Select options={placement} labelText="Placement" bind:value={industry.placement} on:change={OnChange} />

    <br />

    <Slider
        labelText="Probability (Map Generation)"
        min={0}
        max={30}
        step={1}
        bind:value={industry.probabilityMapGen}
        on:change={OnChange}
    >
        <svelte:fragment slot="tooltip">
            This is a relative value to other industries.<br />
            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of spawning
            as industry A.
        </svelte:fragment>
    </Slider>
    <Slider
        labelText="Probability (In Game)"
        min={0}
        max={30}
        step={1}
        bind:value={industry.probabilityInGame}
        on:change={OnChange}
    >
        <svelte:fragment slot="tooltip">
            This is a relative value to other industries.<br />
            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of spawning
            as industry A.
        </svelte:fragment>
    </Slider>
    <Slider
        labelText="Prospect Success Chance"
        min={0}
        max={100}
        step={1}
        unit="%"
        bind:value={industry.prospectChance}
        disabled={industry.type !== "primary"}
        on:change={OnChange}
    />
    <Slider
        labelText="Fund Cost Multiplier"
        min={0}
        max={255}
        step={1}
        bind:value={industry.fundCostMultiplier}
        on:change={OnChange}
    />

    <br />

    <MultiSelect
        labelText="Cargo acceptance"
        bind:selected={industry.cargoAcceptance}
        items={cargoesItems}
        on:change={OnChange}
    />
    <MultiSelect
        labelText="Cargo production"
        bind:selected={industry.cargoProduction}
        items={cargoesItems}
        on:change={OnChange}
    />

    <br />

    <TextArea
        labelText="Callbacks"
        placeholder="Define your custom callbacks here"
        bind:value={industry.callbacks}
        rows={10}
        on:change={OnChange}
    />
    <p class="bx--form__helper-text">
        Callbacks scripting is done in a language specifically designed for TrueGRF. See <a
            target="_new"
            href="https://github.com/TrueBrain/TrueGRF/blob/main/truegrf-rs/src/grf/actions/action2_rpn/README.md"
            >here</a
        > for documentation on the language.
    </p>

    <br />

    <Pagination
        bind:page={selectedLayout}
        totalItems={industry.layout.length}
        pageSize={1}
        pageSizeInputDisabled
        forwardText="Next Layout"
        backwardText="Previous Layout"
        itemRangeText={(min, max, total) => `Layout #${min}`}
        pageRangeText={(current, total) => `of ${total} layouts`}
    />
    <Layout id={industry.name} bind:layout={industry.layout[selectedLayout - 1]} bind:tiles={industry.tiles} {images} />
</div>

<style>
    .listing :global(.bx--text-input__label-helper-wrapper) {
        max-width: 10rem;
    }
</style>
