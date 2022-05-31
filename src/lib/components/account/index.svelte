<script lang="ts">
    import slug from "slug";

    import { createEventDispatcher } from "svelte";

    import { ProgressIndicator, ProgressStep } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";

    import { forkProject, getLicense } from "$lib/helpers/github";

    import Initialize from "$lib/components/account/initialize.svelte";
    import Login from "$lib/components/account/login.svelte";
    import Repositories from "$lib/components/account/repositories.svelte";
    import SelectLicense from "$lib/components/ui/select-license.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    const dispatch = createEventDispatcher();

    let progressIndex = 0;
    let accessToken;
    let username;
    let project;
    let newProject;
    let newProjectError = "";
    let newLicense;

    let newProjectDialogOpen = false;

    function LoginSuccess(event) {
        username = event.detail;
        progressIndex = 1;
    }

    function ProjectSelected(event) {
        project = event.detail;
        progressIndex = 2;
    }

    async function ProjectCreate(event) {
        project = event.detail;
        newLicense = await getLicense(accessToken, project);
        newProjectDialogOpen = true;
    }

    async function ProjectCreateConfirm() {
        if (newProject === "") {
            return;
        }

        newProjectDialogOpen = false;

        project = await forkProject(accessToken, project, newProject, newLicense);
        progressIndex = 2;
    }

    function ProjectCached(event) {
        dispatch("loaded", {
            project,
            accessToken,
            files: event.detail,
        });
    }

    function CheckNewProject() {
        newProjectError = "";

        if (newProject === "") {
            newProjectError = "Project name cannot be empty";
        }

        if (newProject !== slug(newProject, { lower: true })) {
            newProjectError = "Project name must be lowercase and contain only letters, numbers, and dashes.";
        }
    }

    $: if (newProject !== undefined) CheckNewProject();
</script>

<div class="account">
    <div class="title">Let's get you started ...</div>

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
            <ProgressStep label="Initialize" description="Initializing the selected project" />
        </ProgressIndicator>
    </div>

    {#if progressIndex == 0}
        <Login on:login={LoginSuccess} bind:accessToken />
    {/if}

    {#if progressIndex == 1}
        <Repositories {accessToken} on:selected={ProjectSelected} on:create={ProjectCreate} />
    {/if}

    {#if progressIndex == 2}
        <Initialize {accessToken} {project} on:cached={ProjectCached} />
    {/if}

    <Modal
        size="lg"
        bind:open={newProjectDialogOpen}
        modalHeading="Create new project based on {project}?"
        primaryButtonText="Create"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (newProjectDialogOpen = false)}
        on:click:button--primary={ProjectCreateConfirm}
        primaryButtonDisabled={newProject === undefined || newProjectError !== "" || newLicense === undefined}
    >
        <TextInput
            labelText="Name"
            placeholder="Name of your new project"
            bind:value={newProject}
            invalidText={newProjectError}
        />
        <SelectLicense labelText="License" bind:value={newLicense} />

        <p class="small">
            By clicking "create", a new (public) repository will be created on GitHub{#if newLicense}&nbsp;under the {newLicense}
                license{/if}.
        </p>
    </Modal>
</div>

<style>
    .account {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }

    .title {
        font-size: 20px;
        margin-bottom: 40px;
        text-align: center;
    }

    .small {
        font-size: 12px;
        margin-top: 36px;
    }
</style>
