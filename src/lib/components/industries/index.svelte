<script lang="ts">
    import { Icon } from "@smui/common";
    import Button, { Label } from "@smui/button";
    import Chip, { Set, TrailingAction, Text } from "@smui/chips";
    import ColourPicker from "$lib/components/common/colour-picker.svelte";
    import Dialog, { Title as DialogTitle, Content as DialogContent, Actions } from "@smui/dialog";
    import FormField from "@smui/form-field";
    import HelperText from "@smui/textfield/helper-text";
    import Layout from "$lib/components/industries/layout.svelte";
    import Listing from "$lib/components/common/listing.svelte";
    import NewItem from "$lib/components/common/new-item.svelte";
    import Paper, { Content, Title } from "@smui/paper";
    import Select, { Option } from "@smui/select";
    import Slider from "$lib/components/common/slider.svelte";
    import Switch from "@smui/switch";
    import Textfield from "@smui/textfield";
    import Tooltip, { Wrapper } from "@smui/tooltip";

    import { newItem } from "./newItem";
    import { placement } from "./placement";
    import { types } from "./types";

    export let visible = false;
    export let items = [];
    export let cargoes = [];

    let selected = 0;
    let dialogDeleteOpen = false;

    let newCargoAcceptance = "";
    let newCargoProduction = "";

    $: item = items[selected];

    function deleteIndustry() {
        items.splice(selected, 1);
        items = items; // Trigger Svelte's update.
        if (selected == items.length) selected--;

        dialogDeleteOpen = false;
    }
    function newIndustry() {
        /* Find first available ID. */
        let id = 0;
        while (items.find((i) => i.id == id)) id++;

        /* Copy template to new industry. */
        let newIndustry = JSON.parse(JSON.stringify(newItem));
        newIndustry.id = id;

        /* Add new industry. */
        items.push(newIndustry);
        items = items; // Trigger Svelte's update.
        selected = items.length - 1;
    }

    function addCargoAcceptance() {
        item.cargoAcceptance.push(newCargoAcceptance);
        item.cargoAcceptance = item.cargoAcceptance; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            newCargoAcceptance = "";
        }, 1);
    }
    function addCargoProduction() {
        item.cargoProduction.push(newCargoProduction);
        item.cargoProduction = item.cargoProduction; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            newCargoProduction = "";
        }, 1);
    }

    $: if (newCargoAcceptance) addCargoAcceptance();
    $: if (newCargoProduction) addCargoProduction();

    $: cargoAcceptanceAvailable =
        item && cargoes.filter((cargo) => item.cargoAcceptance.findIndex((c) => c == cargo.label) === -1);
    $: cargoProductionAvailable =
        item && cargoes.filter((cargo) => item.cargoProduction.findIndex((c) => c == cargo.label) === -1);
</script>

<div class="content {visible ? '' : 'hidden'}">
    <div class="left">
        <Listing bind:items bind:selected />
        <NewItem on:click={() => newIndustry()} label="industry" />
    </div>
    <div class="right">
        {#if items.length !== 0}
            <FormField>
                <Switch bind:checked={item.available} />
                <span slot="label"> Available ingame?</span>
            </FormField>

            <Textfield variant="outlined" bind:value={item.name} label="Name">
                <HelperText slot="helper">Name of industry</HelperText>
            </Textfield>

            <Select variant="outlined" bind:value={item.type} label="Type">
                {#each types as t}
                    <Option value={t.value}>{t.name}</Option>
                {/each}
            </Select>

            <Select variant="outlined" bind:value={item.placement} label="Placement">
                {#each placement as p}
                    <Option value={p.value}>{p.name}</Option>
                {/each}
            </Select>

            <ColourPicker bind:colour={item.colour}>
                Industry colour ({item.colour})
            </ColourPicker>

            <Slider bind:value={item.probabilityMapGen} min={0} max={30} step={1}>
                <span slot="label">
                    Probability (Map Generation) ({item.probabilityMapGen})
                </span>
                <span slot="help">
                    This is a relative value to other industries.<br />
                    In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of
                    spawning as industry A.
                </span>
            </Slider>
            <Slider bind:value={item.probabilityInGame} min={0} max={30} step={1}>
                <span slot="label">
                    Probability (In Game) ({item.probabilityInGame})
                </span>
                <span slot="help">
                    This is a relative value to other industries.<br />
                    In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance of
                    spawning as industry A.
                </span>
            </Slider>
            {#if item.type === "primary"}
                <Slider bind:value={item.prospectChance} min={0} max={100} step={1}>
                    <span slot="label">
                        Prospect Success Chance ({item.prospectChance}%)
                    </span>
                </Slider>
            {/if}
            <Slider bind:value={item.fundCostMultiplier} min={0} max={255} step={1}>
                <span slot="label">
                    Fund Cost Multiplier ({item.fundCostMultiplier})
                </span>
            </Slider>

            <div class="cargo mdc-form-field">
                <span>Cargo acceptance:</span>
                <Set chips={item.cargoAcceptance} let:chip input>
                    <Chip {chip} on:SMUIChip:removal={() => (item.cargoAcceptance = item.cargoAcceptance)}>
                        <Text>{chip}: {cargoes[cargoes.findIndex((c) => c.label == chip)].name}</Text>
                        <TrailingAction icon$class="material-icons">cancel</TrailingAction>
                    </Chip>
                </Set>
                {#if cargoAcceptanceAvailable.length !== 0}
                    <Select variant="outlined" bind:value={newCargoAcceptance}>
                        {#each cargoAcceptanceAvailable as cargo}
                            <Option value={cargo.label}>{cargo.label}: {cargo.name}</Option>
                        {/each}
                    </Select>
                {/if}
            </div>

            <div class="cargo mdc-form-field">
                <span>Cargo production:</span>
                <Set chips={item.cargoProduction} let:chip input>
                    <Chip {chip} on:SMUIChip:removal={() => (item.cargoProduction = item.cargoProduction)}>
                        <Text>{chip}: {cargoes[cargoes.findIndex((c) => c.label == chip)].name}</Text>
                        <TrailingAction icon$class="material-icons">cancel</TrailingAction>
                    </Chip>
                </Set>
                {#if cargoProductionAvailable.length !== 0}
                    <Select variant="outlined" bind:value={newCargoProduction}>
                        {#each cargoProductionAvailable as cargo}
                            <Option value={cargo.label}>{cargo.label}: {cargo.name}</Option>
                        {/each}
                    </Select>
                {/if}
            </div>

            <Textfield
                variant="outlined"
                bind:value={item.callbacks}
                label="Callbacks Scripting"
                textarea
                style="height: 200px;"
            />
            <Wrapper>
                <Icon class="help material-icons">help</Icon>
                <Tooltip>
                    Callbacks Scripting is done in a language specifically designed for TrueGRF.
                    See <a target="_new" href="https://github.com/TrueBrain/TrueGRF/blob/main/truegrf-rs/src/grf/actions/action2_rpn/README.md">here</a> for documentation on the language.
                    Use FIRS4 Steeltown template as a reference.
                </Tooltip>
            </Wrapper>

            <Layout bind:layout={item.layout} bind:tiles={item.tiles} />

            <Paper variant="outlined" class="dangerzone">
                <Title>Danger Zone</Title>
                <Content>
                    <div class="filler" />
                    <Button variant="raised" on:click={() => (dialogDeleteOpen = true)}>
                        <Label>Delete Industry</Label>
                    </Button>

                    <Dialog bind:open={dialogDeleteOpen}>
                        <DialogTitle id="simple-title">Delete this industry?</DialogTitle>
                        <DialogContent id="simple-content">
                            Are you sure you want to delete '{item.name}'?<br />
                            This action <b>cannot</b> be undone.
                        </DialogContent>
                        <Actions>
                            <Button>
                                <Label>No</Label>
                            </Button>
                            <Button on:click={() => deleteIndustry()}>
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
        min-width: 250px;
        width: 250px;
    }
    .right :global(.mdc-form-field) {
        width: 250px;
    }
    .right :global(.tg-slider) {
        width: 476px;
    }
    .right :global(.tg-slider label) {
        width: 256px;
    }
    .right :global(.mdc-tab-bar.layout) {
        display: inline-block;
        margin-top: 12px;
        width: calc(100% - 53px);
    }

    .cargo :global(.mdc-chip-set) {
        display: inline-flex;
        width: 100%;
    }
    .right .cargo {
        width: 100%;
    }
    .right .cargo > span {
        min-width: 270px;
        width: 270px;
    }
</style>
