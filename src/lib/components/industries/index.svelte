<script lang="ts">
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
    import Paper, { Content, Title } from "@smui/paper";
    import Select, { Option } from "@smui/select";
    import Switch from "@smui/switch";
    import Textfield from "@smui/textfield";

    import { newItem } from "./newItem";
    import { placement } from "./placement";
    import { types } from "./types";

    export let visible = false;
    export let items = [];
    export let cargoes = [];

    let selected = 0;
    let dialogDeleteOpen = false;

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
