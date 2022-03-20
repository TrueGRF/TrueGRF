<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import { ClickableTile } from "carbon-components-svelte";
    import { InlineLoading } from "carbon-components-svelte";

    const dispatch = createEventDispatcher();

    export let accessToken;

    let repositories = [];
    let loaded = false;

    function refreshRepositories(page) {
        fetch(`https://api.github.com/user/repos?sort=created&direction=asc&per_page=100&page=${page}`, {
            headers: {
                accept: "application/vnd.github.v3+json",
                authorization: `token ${accessToken}`
            }
        }).then(function(response) {
            if (response.status != 200) {
                return;
            }

            response.json().then(function(result) {
                for (let repository of result) {
                    if (repository.topics.indexOf("truegrf") !== -1) {
                        repositories.push({
                            "name": repository.name,
                            "full_name": repository.full_name,
                            "description": repository.description,
                        });
                    }
                }

                /* Check if we reached the limit of the page; continue on next page if so. */
                if (result.length == 100 && page == 1) {
                    refreshRepositories(page + 1);
                    return;
                }

                /* Inform Svelte the array is changed. */
                repositories = repositories;
                loaded = true;
            });
        });
    }

    $: if (accessToken) refreshRepositories(1);
</script>

<div class="repositories">
    {#if loaded === false}
        <InlineLoading description="Loading projects ..." />
    {:else}
        {#if repositories.length === 0}
            <div>
                No TrueGRF project found under your account.<br/>
                Currently it is not possible to create (or fork) a (new) project.<br/>
                This will be added soon.<br/>
            </div>
        {/if}

        {#each repositories as repository}
            <ClickableTile on:click={() => { dispatch("selected", repository.full_name) }}>
                {repository.full_name}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{repository.description}
            </ClickableTile>
        {/each}
    {/if}
</div>

<style>
    .repositories {
        padding-top: 20px;
    }
</style>
