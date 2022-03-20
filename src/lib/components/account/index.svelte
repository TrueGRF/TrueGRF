<script lang="ts">
    import { ProgressIndicator, ProgressStep } from "carbon-components-svelte";

    import Initialize from "$lib/components/account/initialize.svelte";
    import Login from "$lib/components/account/login.svelte";
    import Repositories from "$lib/components/account/repositories.svelte";

    let progressIndex = 0;
    let accessToken;
    let username;
    let project;

    function LoginSuccess(event) {
        username = event.detail;
        progressIndex = 1;
    }

    function ProjectSelected(event) {
        project = event.detail;
        progressIndex = 2;
    }
</script>

<div>
    <div class="title">
        Let's get you started ...
    </div>

    <div>
        <ProgressIndicator currentIndex={progressIndex} preventChangeOnClick spaceEqually>
            <ProgressStep
                complete={progressIndex > 0}
                label="Log in"
                description="Logging in to GitHub to store your work"
            />
            <ProgressStep
                complete={progressIndex > 1}
                label="Select project"
                description="Select what project you want to work on"
            />
            <ProgressStep
                label="Initialize"
                description="Initializing the selected project"
            />
        </ProgressIndicator>
    </div>

    {#if progressIndex == 0}
    <Login on:login={LoginSuccess} bind:accessToken />
    {/if}

    {#if progressIndex == 1}
    <Repositories accessToken={accessToken} on:selected={ProjectSelected} />
    {/if}

    {#if progressIndex == 2}
    <Initialize accessToken={accessToken} project={project} />
    {/if}
</div>

<style>
    .title {
        font-size: 20px;
        margin-bottom: 40px;
        text-align: center;
    }
</style>
