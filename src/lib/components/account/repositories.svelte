<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { ClickableTile } from "carbon-components-svelte";
    import { InlineLoading } from "carbon-components-svelte";

    import { refreshRepositories } from "$lib/helpers/github";

    const dispatch = createEventDispatcher();

    export let accessToken;

    let repositoriesSelf = [];
    let repositoriesExamples = [];
    let loadedSelf = false;
    let loadedExamples = false;

    async function refreshRepositoriesSelf() {
        repositoriesSelf = await refreshRepositories(accessToken, "user/repos", 1);
        loadedSelf = true;
    }
    async function refreshRepositoriesExamples() {
        repositoriesExamples = await refreshRepositories(accessToken, "orgs/TrueGRF/repos", 1);
        loadedExamples = true;
    }

    $: if (accessToken) {
        refreshRepositoriesSelf();
        refreshRepositoriesExamples();
    }
</script>

<div class="repositories">
    {#if loadedSelf === false}
        <InlineLoading description="Loading your projects ..." />
    {:else}
        <p>Your projects</p>

        {#if repositoriesSelf.length === 0}
            <div>
                No TrueGRF project found under your account.<br />
                Currently it is not possible to create (or fork) a (new) project from this interface.<br />
                This will be added soon.<br />
            </div>
        {/if}

        {#each repositoriesSelf as repository}
            <ClickableTile
                on:click={() => {
                    dispatch("selected", repository.full_name);
                }}
            >
                {repository.full_name}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{repository.description}
            </ClickableTile>
        {/each}
    {/if}

    <br />

    {#if loadedExamples === false}
        <InlineLoading description="Loading example projects ..." />
    {:else}
        <p>Base your new project on</p>

        {#each repositoriesExamples as repository}
            <ClickableTile
                on:click={() => {
                    dispatch("create", repository.full_name);
                }}
            >
                {repository.full_name}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{repository.description}<br />
            </ClickableTile>
        {/each}
    {/if}
</div>

<style>
    .repositories {
        padding-top: 20px;
    }
</style>
