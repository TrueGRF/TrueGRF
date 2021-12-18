<script lang="ts">
    import IconButton from "@smui/icon-button";
    import Select, { Option } from "@smui/select";
    import Textfield from "@smui/textfield";

    export let cargoes;
    export let secondary;

    let secondaryNewAcceptanceCargo = "";
    let secondaryNewProductionCargo = "";

    function deleteSecondaryCargo(label) {
        secondary.production.splice(
            secondary.production.findIndex((c) => c.cargoLabel == label),
            1
        );
        secondary = secondary; // Trigger Svelte's update.
    }
    function addSecondaryNewAcceptanceCargo() {
        secondary.acceptance.push({
            cargoLabel: secondaryNewAcceptanceCargo,
        });

        for (let i = 0; i < secondary.production.length; i++) {
            secondary.production[i].multiplier.push(100);
        }

        secondary = secondary; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            secondaryNewAcceptanceCargo = "";
        }, 1);
    }
    function addSecondaryNewProductionCargo() {
        secondary.production.push({
            cargoLabel: secondaryNewProductionCargo,
            multiplier: new Array(secondary.acceptance.length).fill(100),
        });
        secondary = secondary; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            secondaryNewProductionCargo = "";
        }, 1);
    }

    $: if (secondaryNewAcceptanceCargo) addSecondaryNewAcceptanceCargo();
    $: if (secondaryNewProductionCargo) addSecondaryNewProductionCargo();
    $: secondaryAcceptanceCargoesAvailable = cargoes.filter(
        (cargo) => secondary.acceptance.findIndex((c) => c.cargoLabel == cargo.label) === -1
    );
    $: secondaryProductionCargoesAvailable = cargoes.filter(
        (cargo) => secondary.production.findIndex((c) => c.cargoLabel == cargo.label) === -1
    );
</script>

<div>
    <div>
        <span style="width: 262px; display: inline-block" />
        {#each secondary.acceptance as acceptance}
            <Select variant="outlined" bind:value={acceptance.cargoLabel}>
                <Option value={acceptance.cargoLabel}
                    >{cargoes[cargoes.findIndex((c) => c.label == acceptance.cargoLabel)].name}</Option
                >
                {#each secondaryAcceptanceCargoesAvailable as cargo}
                    <Option value={cargo.label}>{cargo.name}</Option>
                {/each}
            </Select>
        {/each}

        {#if secondary.acceptance.length < 2}
            <Select variant="outlined" bind:value={secondaryNewAcceptanceCargo}>
                {#each secondaryAcceptanceCargoesAvailable as cargo}
                    <Option value={cargo.label}>{cargo.name}</Option>
                {/each}
            </Select>
        {/if}
    </div>

    {#each secondary.production as production}
        <Select variant="outlined" bind:value={production.cargoLabel} disabled>
            {#each cargoes as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
        {#each secondary.acceptance as acceptance, index}
            <Textfield variant="outlined" bind:value={production.multiplier[index]} label="Multiplier" type="number" />
        {/each}
        {#if secondary.acceptance.length < 2}
            <span class="empty" />
        {/if}
        {#if secondary.acceptance.length < 1}
            <span class="empty" />
        {/if}
        <IconButton class="material-icons" on:click={() => deleteSecondaryCargo(production.cargoLabel)}
            >delete</IconButton
        >
    {/each}

    {#if secondaryProductionCargoesAvailable.length !== 0}
        <Select variant="outlined" bind:value={secondaryNewProductionCargo}>
            <Option value="" />
            {#each secondaryProductionCargoesAvailable as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
    {/if}
</div>
