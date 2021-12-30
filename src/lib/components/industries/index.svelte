<script lang="ts">
    import { colours } from "$lib/components/common/colour-matrix";
    import { Icon } from "@smui/common";
    import Button, { Label } from "@smui/button";
    import CargoPrimary from "$lib/components/industries/cargoPrimary.svelte";
    import CargoSecondary from "$lib/components/industries/cargoSecondary.svelte";
    import CargoTertiary from "$lib/components/industries/cargoTertiary.svelte";
    import Dialog, { Title as DialogTitle, Content as DialogContent, Actions } from "@smui/dialog";
    import FormField from "@smui/form-field";
    import HelperText from "@smui/textfield/helper-text";
    import Layout from "$lib/components/industries/layout.svelte";
    import Listing from "$lib/components/common/listing.svelte";
    import NewItem from "$lib/components/common/new-item.svelte";
    import PalettePicker from "$lib/components/common/palette-picker.svelte";
    import Paper, { Content, Title } from "@smui/paper";
    import Select, { Option } from "@smui/select";
    import Slider from "@smui/slider";
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
    let dialogColourOpen = false;

    $: item = items[selected];

    $: if (item && item.colour === undefined) item.colour = 1;
    $: if (item && item.probabilityMapGen === undefined) item.probabilityMapGen = 3;
    $: if (item && item.probabilityInGame === undefined) item.probabilityInGame = 5;
    $: if (item && item.prospectChance === undefined) item.prospectChance = 75;
    $: if (item && item.fundCostMultiplier === undefined) item.fundCostMultiplier = 100;

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

            <div class="mdc-form-field mdc-form-field--align-end colour">
                <span>Industry colour ({item.colour})</span>
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

            <FormField align="end" class="slider">
                <Slider bind:value={item.probabilityMapGen} min={0} max={30} step={1} discrete style="flex-grow: 1;" />
                <span slot="label">
                    Probability (Map Generation) ({item.probabilityMapGen})
                    <Wrapper>
                        <Icon class="help material-icons">help</Icon>
                        <Tooltip>
                            This is a relative value to other industries.<br />
                            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance
                            of spawning as industry A.
                        </Tooltip>
                    </Wrapper>
                </span>
            </FormField>
            <FormField align="end" class="slider">
                <Slider bind:value={item.probabilityInGame} min={0} max={30} step={1} discrete style="flex-grow: 1;" />
                <span slot="label">
                    Probability (In Game) ({item.probabilityInGame})
                    <Wrapper>
                        <Icon class="help material-icons">help</Icon>
                        <Tooltip>
                            This is a relative value to other industries.<br />
                            In other words, if industry A has this on 1, and industry B on 2, industry B has twice the chance
                            of spawning as industry A.
                        </Tooltip>
                    </Wrapper>
                </span>
            </FormField>
            {#if item.type === "primary"}
                <FormField align="end" class="slider">
                    <Slider
                        bind:value={item.prospectChance}
                        min={0}
                        max={100}
                        step={1}
                        discrete
                        style="flex-grow: 1;"
                    />
                    <span slot="label">
                        Prospect Success Chance ({item.prospectChance}%)
                    </span>
                </FormField>
            {/if}
            <FormField align="end" class="slider">
                <Slider
                    bind:value={item.fundCostMultiplier}
                    min={0}
                    max={255}
                    step={1}
                    discrete
                    style="flex-grow: 1;"
                />
                <span slot="label">
                    Fund Cost Multiplier ({item.fundCostMultiplier})
                </span>
            </FormField>

            <Paper variant="outlined" class="cargo primary {item.type === 'primary' ? '' : 'hidden'}">
                <Title>Cargo</Title>
                <Content>
                    {#if item.type == "primary"}
                        <CargoPrimary bind:cargoes bind:primary={item.primary} />
                    {/if}
                </Content>
            </Paper>
            <Paper variant="outlined" class="cargo secondary {item.type === 'secondary' ? '' : 'hidden'}">
                <Title>Cargo</Title>
                <Content>
                    {#if item.type == "secondary"}
                        <CargoSecondary bind:cargoes bind:secondary={item.secondary} />
                    {/if}
                </Content>
            </Paper>
            <Paper variant="outlined" class="cargo tertiary {item.type === 'tertiary' ? '' : 'hidden'}">
                <Title>Cargo</Title>
                <Content>
                    {#if item.type == "tertiary"}
                        <CargoTertiary bind:cargoes bind:tertiary={item.tertiary} />
                    {/if}
                </Content>
            </Paper>

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
        width: 250px;
    }
    .right :global(.mdc-form-field.slider) {
        width: 476px;
    }
    .right :global(.mdc-form-field.slider label) {
        width: 256px;
    }
    .right :global(.mdc-tab-bar.layout) {
        display: inline-block;
        margin-top: 12px;
        width: calc(100% - 53px);
    }

    .right :global(.cargo) {
        margin-top: 12px;
    }
    .right :global(.cargo.primary .mdc-text-field),
    .right :global(.cargo.tertiary .mdc-text-field),
    .right :global(.cargo.primary .empty),
    .right :global(.cargo.tertiary .empty) {
        display: inline-block;
        width: calc(100% - 317px);
    }
    .right :global(.cargo.secondary .mdc-text-field),
    .right :global(.cargo.secondary .empty) {
        display: inline-block;
        margin-right: 12px;
        width: 250px;
    }
    .right :global(.cargo .mdc-icon-button) {
        color: var(--mdc-theme-error, #ff0000);
        position: relative;
        top: -5px;
    }
</style>
