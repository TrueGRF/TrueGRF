<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { TextInput } from "carbon-components-svelte";

    export let value;
    export let labelText;
    export let placeholder;

    const dispatch = createEventDispatcher();

    function OnChange(event) {
        dispatch("change", event.detail);
    }
</script>

<TextInput inline size="sm" labelText={labelText} placeholder={placeholder} bind:value={value} on:change={OnChange} />
