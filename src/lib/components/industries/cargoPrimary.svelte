<script lang="ts">
    import IconButton from "@smui/icon-button";
    import Select, { Option } from "@smui/select";
    import Textfield from "@smui/textfield";

    export let cargoes;
    export let primary;

    let primaryNewCargo = "";

    function deletePrimaryCargo(label) {
        primary.splice(
            primary.findIndex((c) => c.cargoLabel == label),
            1
        );
        primary = primary; // Trigger Svelte's update.
    }
    function addPrimaryCargo() {
        primary.push({
            cargoLabel: primaryNewCargo,
            multiplier: 100,
        });
        primary = primary; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            primaryNewCargo = "";
        }, 1);
    }

    $: if (primaryNewCargo) addPrimaryCargo();
    $: primaryCargoesAvailable = cargoes.filter(
        (cargo) => primary.findIndex((c) => c.cargoLabel == cargo.label) === -1
    );
</script>

<div>
    {#each primary as p}
        <Select variant="outlined" bind:value={p.cargoLabel} disabled>
            {#each cargoes as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
        <Textfield variant="outlined" bind:value={p.multiplier} label="Multiplier" type="number" />
        <IconButton class="material-icons" on:click={() => deletePrimaryCargo(p.cargoLabel)}>delete</IconButton>
    {/each}

    {#if primaryCargoesAvailable.length !== 0}
        <Select variant="outlined" bind:value={primaryNewCargo}>
            <Option value="" />
            {#each primaryCargoesAvailable as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
    {/if}
</div>
