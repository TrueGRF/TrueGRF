<script lang="ts">
    import IconButton from "@smui/icon-button";
    import Select, { Option } from "@smui/select";

    export let cargoes;
    export let tertiary;

    let tertiaryNewCargo = "";

    function deleteTertiaryCargo(label) {
        tertiary.splice(
            tertiary.findIndex((c) => c.cargoLabel == label),
            1
        );
        tertiary = tertiary; // Trigger Svelte's update.
    }
    function addTertiaryCargo() {
        tertiary.push({
            cargoLabel: tertiaryNewCargo,
        });
        tertiary = tertiary; // Trigger Svelte's update.

        /* Delay resetting the value as otherwise Svelte doesn't propagate the new change. */
        setTimeout(() => {
            tertiaryNewCargo = "";
        }, 1);
    }

    $: if (tertiaryNewCargo) addTertiaryCargo();
    $: tertiaryCargoesAvailable = cargoes.filter(
        (cargo) => tertiary.findIndex((c) => c.cargoLabel == cargo.label) === -1
    );
</script>

<div>
    {#each tertiary as t}
        <Select variant="outlined" bind:value={t.cargoLabel} disabled>
            {#each cargoes as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
        <span class="empty" />
        <IconButton class="material-icons" on:click={() => deleteTertiaryCargo(t.cargoLabel)}>delete</IconButton>
    {/each}

    {#if tertiaryCargoesAvailable.length !== 0}
        <Select variant="outlined" bind:value={tertiaryNewCargo}>
            <Option value="" />
            {#each tertiaryCargoesAvailable as cargo}
                <Option value={cargo.label}>{cargo.name}</Option>
            {/each}
        </Select>
    {/if}
</div>
