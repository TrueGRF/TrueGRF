<script>
    import Button, { Label } from "@smui/button";
    import { createEventDispatcher } from "svelte";

    export let label = "";

    const dispatch = createEventDispatcher();
</script>

<div class="new-item">
    <Button class="new-cargo" variant="raised" on:click={() => dispatch("click")}>
        <Label>Add new {label}</Label>
    </Button>
</div>

<style>
    .new-item :global(.new-cargo) {
        margin-top: 20px;
        width: 100%;
    }
</style>
