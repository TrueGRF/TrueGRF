<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import TextInput from "$lib/components/ui/text-input.svelte";

    const dispatch = createEventDispatcher();

    export let general;

    function OnChange() {
        dispatch("change", general);
    }
</script>

<div class="listing">
    <TextInput
        labelText="GRFID"
        placeholder="Unique identifier of NewGRF"
        bind:value={general.grfid}
        on:change={OnChange}
    />
    <TextInput labelText="Name" placeholder="Name of NewGRF" bind:value={general.name} on:change={OnChange} />
    <TextInput
        labelText="Description"
        placeholder="Description of NewGRF"
        bind:value={general.description}
        on:change={OnChange}
    />
</div>
