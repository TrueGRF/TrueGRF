<script lang="ts">
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    import { Button } from "carbon-components-svelte";
    import { InlineNotification } from "carbon-components-svelte";
    import { InlineLoading } from "carbon-components-svelte";

    const dispatch = createEventDispatcher();

    export let accessToken = window.localStorage.getItem("access-token") || "";

    let oauthEndpoint = import.meta.env.VITE_OAUTH_ENDPOINT || "";
    let error = "";

    function checkUsername() {
        fetch("https://api.github.com/user", {
            headers: {
                accept: "application/vnd.github.v3+json",
                authorization: `token ${accessToken}`
            }
        }).then(function(response) {
            /* This most likely means the acess-token is no longer valid. */
            if (response.status != 200) {
                accessToken = "";
                return;
            }

            return response.json().then(function(result) {
                dispatch("login", result.login);
            });
        });
    }

    onMount(async () => {
        /* Check if we have a ?error= parameter in the URL. */
        const error_description = new URL(location.href).searchParams.get("error_description");
        if (error_description) {
            error = error_description;
        }

        /* Check if we have a ?code= parameter in the URL. */
        const code = new URL(location.href).searchParams.get("code");
        if (!code) {
            /* If no code and access token, check if it is still valid. */
            if (accessToken) {
                checkUsername();
            }
            return;
        }

        /* Remove all parameters from the URL. */
        const path = location.pathname;
        history.replaceState({}, "", path);

        /* Get the access token. */
        fetch(oauthEndpoint,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({code})
            }
        ).then(function(response) {
            return response.json().then(function(result) {
                /* User denied access or the authentication timed out. */
                if (result.error) {
                    accessToken = "";
                    error = result.error;
                    return;
                }

                accessToken = result.token;
                window.localStorage.setItem("access-token", accessToken);
                checkUsername();
            });
        });
    });
</script>

<div class="login">
    {#if accessToken !== ""}
        <InlineLoading description="Checking credentials ..." />
    {:else}
        <div>
            <Button on:click={() => location.href = oauthEndpoint}>
                Login via GitHub
            </Button>
        </div>
        <div>
            In order to use TrueGRF, you need a GitHub account.<br/>
            Your work will automatically be stored in a GitHub repository which you can select after logging in.
        </div>
    {/if}

    {#if error}
        <InlineNotification
            title="GitHub authentication failed:"
            subtitle={error}
            />
    {/if}
</div>

<style>
    .login {
        padding-top: 20px;
        text-align: center;
    }
    .login > div {
        padding: 20px;
    }
</style>
