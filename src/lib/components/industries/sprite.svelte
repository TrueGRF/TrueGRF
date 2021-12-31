<script lang="ts">
    import { spriteDefaults } from "./spriteDefaults";

    export let sprite;
</script>

{#if sprite.id !== undefined}
    <div class="sprite" style="left: {-31 + 32}px; top: 0px;">
        <img src="data:image/png;base64,{spriteDefaults[sprite.id]}" alt="" />
    </div>
{:else}
    <div class="sprite" style="left: {sprite.left + 32}px; top: {sprite.top}px;">
        <img src="data:image/png;base64,{sprite.base64Data}" alt="" />
    </div>
{/if}

<style>
    .sprite {
        position: absolute;
    }
</style>
