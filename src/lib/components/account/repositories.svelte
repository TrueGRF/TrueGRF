<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import { ClickableTile } from "carbon-components-svelte";
    import { InlineLoading } from "carbon-components-svelte";

    const dispatch = createEventDispatcher();

    export let accessToken;

    let repositoriesSelf = [];
    let repositoriesExamples = [];
    let loadedSelf = false;
    let loadedExamples = false;

    async function doApiCall(url) {
        const response = await fetch(url, {
            headers: {
                accept: "application/vnd.github.v3+json",
                authorization: `token ${accessToken}`
            }
        });
        if (response.status != 200) {
            throw new Error(`GitHub API error [${response.status}]: ${response.statusText}`);
        }

        return await response.json();
    }

    async function refreshRepositories(url, page) {
        const result = await doApiCall(`https://api.github.com/${url}?sort=created&direction=asc&per_page=100&page=${page}`);

        let repositories = [];
        for (let repository of result) {
            if (repository.topics.indexOf("truegrf") === -1) continue;

            repositories.push({
                "name": repository.name,
                "full_name": repository.full_name,
                "description": repository.description,
            });
        }

        /* Check if we reached the limit of the page; continue on next page if so. */
        if (result.length == 100) {
            repositories = repositories.concat(await refreshRepositories(url, page + 1));
            return repositories;
        }

        return repositories;
    }

    async function refreshRepositoriesSelf() {
        repositoriesSelf = await refreshRepositories("user/repos", 1);
        loadedSelf = true;
    }
    async function refreshRepositoriesExamples() {
        repositoriesExamples = await refreshRepositories("orgs/TrueGRF/repos", 1);
        console.log(repositoriesExamples);
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
        {#if repositoriesSelf.length === 0}
            <div>
                No TrueGRF project found under your account.<br/>
                Currently it is not possible to create (or fork) a (new) project from this interface.<br/>
                This will be added soon.<br/>
            </div>
        {/if}

        {#each repositoriesSelf as repository}
            <ClickableTile on:click={() => { dispatch("selected", repository.full_name) }}>
                {repository.full_name}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{repository.description}
            </ClickableTile>
        {/each}
    {/if}

    {#if loadedExamples === false}
        <InlineLoading description="Loading example projects ..." />
    {:else}
        {#each repositoriesExamples as repository}
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
