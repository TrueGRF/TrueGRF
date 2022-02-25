<script lang="ts">
    import { onMount } from 'svelte';
    import Button, { Label } from "@smui/button";

    let access_token = window.localStorage.getItem("access-token") || "";
    let username = "";

    async function checkUsername() {
        const response = await fetch("https://api.github.com/user", {
            headers: {
                accept: "application/vnd.github.v3+json",
                authorization: `token ${access_token}`
            }
        });
        /* This most likely means the acess-token is no longer valid. */
        if (response.status != 200) {
            access_token = "";
            return;
        }

        const result = await response.json();
        username = result.login;
    }

    onMount(async () => {
        /* Check if we have a ?code= parameter in the URL. */
        const code = new URL(location.href).searchParams.get("code");

        if (!code) {
            /* If no code and access token, check if it is still valid. */
            if (access_token) {
                await checkUsername();
            }
            return;
        }

        /* Remove the ?code= from the URL. */
        const path =
            location.pathname +
            location.search.replace(/\bcode=\w+/, "").replace(/\?$/, "");
        history.replaceState({}, "", path);

        /* Get the access token. */
        const response = await fetch("https://truegrf.truebrain.workers.dev/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({code})
            }
        );
        const result = await response.json();

        /* User denied access or the authentication timed out. */
        if (result.error) {
            access_token = "";
            // TODO
            return;
        }

        access_token = result.token;
        await checkUsername();
    });

    $: window.localStorage.setItem("access-token", access_token);
</script>

<div>
    {#if access_token !== ""}
        Logged in as: {username}
    {:else}
        <Button variant="raised" on:click={() => location.href = "https://truegrf.truebrain.workers.dev/"}>
            <Label>Login</Label>
        </Button>
    {/if}
</div>

<style>
</style>
