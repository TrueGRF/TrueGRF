<script lang="ts">
    export let sprite;
    export let noOffset = false;
</script>

{#if noOffset}
    <div class="sprite">
        {#if sprite}
            <img src="data:image/png;base64,{sprite.base64Data}" alt="" />
        {/if}
    </div>
{:else}
    <div class="sprite" style="left: {sprite.left + 32}px; top: {sprite.top}px;">
        {#if sprite}
            <img src="data:image/png;base64,{sprite.base64Data}" alt="" />
        {/if}
    </div>
{/if}

<style>
    .sprite {
        position: relative;
    }
</style>
