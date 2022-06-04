<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";

    import { Button } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import { Tabs, Tab, TabContent } from "carbon-components-svelte";
    import { TextArea } from "carbon-components-svelte";

    import Layout from "$lib/components/industry/layout.svelte";
    import MultiSelect from "$lib/components/ui/multi-select.svelte";
    import Pagination from "$lib/components/ui/pagination.svelte";
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
    let deleteIndustryOpen = false;
    let deleteLayoutOpen = false;

    function DeleteIndustry() {
        dispatch("delete", industry.id);
        deleteIndustryOpen = false;
    }

    function CreateLayout() {
        industry.layout.push([[-1]]);

        /* Inform Svelte the array is changed. */
        industry.layout = industry.layout;

        selectedLayout = industry.layout.length;
    }

    function DeleteLayout() {
        deleteLayoutOpen = false;

        industry.layout.splice(selectedLayout - 1, 1);

        if (industry.layout.length === 0) {
            CreateLayout();
        }

        if (selectedLayout > industry.layout.length) {
            selectedLayout--;
        }

        /* Inform Svelte the array is changed. */
        industry.layout = industry.layout;
    }

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
    <Tabs class="subnav">
        <Tab label="Properties" />
        <Tab label="Graphics" />
        <Tab label="Callbacks" />

        <svelte:fragment slot="content">
            <TabContent>
                <div class="flex">
                    <Switch
                        labelText="Availability"
                        labelOff="Hidden"
                        labelOn="Available"
                        bind:value={industry.available}
                        on:change={OnChange}
                    />
                    <Button
                        kind="danger-tertiary"
                        iconDescription="Delete industry"
                        icon={TrashCan}
                        size="small"
                        tooltipPosition="bottom"
                        tooltipAlignment="end"
                        on:click={() => (deleteIndustryOpen = true)}
                    />
                </div>

                <br />

                <TextInput
                    labelText="Name"
                    placeholder="Name of industry"
                    validate={ValidateName}
                    bind:value={industry.name}
                    on:change={OnChange}
                />
                <Select options={types} labelText="Type" bind:value={industry.type} on:change={OnChange} />
                <Select
                    options={placement}
                    labelText="Placement"
                    bind:value={industry.placement}
                    on:change={OnChange}
                />

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
                        In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance
                        of spawning as industry A.
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
                        In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance
                        of spawning as industry A.
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
            </TabContent>
            <TabContent>
                <Pagination
                    bind:selected={selectedLayout}
                    items={industry.layout}
                    labelText="layout"
                    on:new={() => CreateLayout()}
                    on:delete={() => (deleteLayoutOpen = true)}
                />
                <Layout
                    id={industry.name}
                    bind:layout={industry.layout[selectedLayout - 1]}
                    bind:tiles={industry.tiles}
                    {images}
                    on:delete={DeleteLayout}
                    on:create={CreateLayout}
                />
            </TabContent>
            <TabContent>
                <TextArea
                    placeholder="Define your custom callbacks here"
                    bind:value={industry.callbacks}
                    rows={35}
                    on:change={OnChange}
                />
                <p class="bx--form__helper-text">
                    Callbacks scripting is done in a language specifically designed for TrueGRF. See <a
                        target="_new"
                        href="https://github.com/TrueGRF/TrueGRF-rs/blob/main/src/grf/actions/action2_rpn/README.md"
                        >here</a
                    > for documentation on the language.
                </p>
            </TabContent>
        </svelte:fragment>
    </Tabs>

    <Modal
        bind:open={deleteIndustryOpen}
        modalHeading="Delete industry?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deleteIndustryOpen = false)}
        on:click:button--primary={() => DeleteIndustry()}
        danger
    >
        Are you sure you want to delete '{industry.name}'?
    </Modal>

    <Modal
        bind:open={deleteLayoutOpen}
        modalHeading="Delete layout?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deleteLayoutOpen = false)}
        on:click:button--primary={() => DeleteLayout()}
        danger
    >
        Are you sure you want to delete this layout?
    </Modal>
</div>

<style>
    .listing :global(.bx--text-input__label-helper-wrapper) {
        max-width: 10rem;
    }

    .flex {
        display: flex;
    }

    .listing :global(.subnav) {
        display: flex;
        width: 100%;
        justify-content: center;
    }
</style>
