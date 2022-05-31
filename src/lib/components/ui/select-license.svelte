<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { RadioButtonGroup, RadioButton } from "carbon-components-svelte";

    export let value = undefined;
    export let labelText;

    let attribution;
    let commercial;
    let derivative;
    let sharing;

    let lockLicense = false;
    let lockAttribution = false;
    let lockCommercial = false;

    const licenseURLs = {
        "CC0-1.0": "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
        "CC-BY-4.0": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "CC-BY-NC-4.0": "https://creativecommons.org/licenses/by-nc/4.0/legalcode",
        "CC-BY-ND-4.0": "https://creativecommons.org/licenses/by-nd/4.0/legalcode",
        "CC-BY-NC-ND-4.0": "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode",
        "CC-BY-SA-4.0": "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
        "CC-BY-NC-SA-4.0": "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode",
    };

    const dispatch = createEventDispatcher();

    function UpdateShadow() {
        lockLicense = false;
        lockAttribution = false;
        lockCommercial = false;

        attribution = undefined;
        commercial = undefined;
        derivative = undefined;
        sharing = undefined;

        switch (value) {
            case "GPL-2.0":
                attribution = "Yes";
                commercial = "Yes";
                derivative = "Yes";
                sharing = "No";

                lockLicense = true;
                break;

            case "CC0-1.0":
                attribution = "No";
                commercial = "Yes";
                derivative = "Yes";
                sharing = "Yes";
                break;

            case "CC-BY-4.0":
                attribution = "Yes";
                commercial = "Yes";
                derivative = "Yes";
                sharing = "Yes";

                lockAttribution = true;
                break;

            case "CC-BY-NC-4.0":
                attribution = "Yes";
                commercial = "No";
                derivative = "Yes";
                sharing = "Yes";

                lockCommercial = true;
                break;

            case "CC-BY-ND-4.0":
                attribution = "Yes";
                commercial = "Yes";
                derivative = "No";
                sharing = "No";

                lockLicense = true;
                break;

            case "CC-BY-NC-ND-4.0":
                attribution = "Yes";
                commercial = "No";
                derivative = "No";
                sharing = "No";

                lockLicense = true;
                break;

            case "CC-BY-SA-4.0":
                attribution = "Yes";
                commercial = "Yes";
                derivative = "Yes";
                sharing = "No";

                lockLicense = true;
                break;

            case "CC-BY-NC-SA-4.0":
                attribution = "Yes";
                commercial = "No";
                derivative = "Yes";
                sharing = "No";

                lockLicense = true;
                break;

            case "":
            case undefined:
                break;

            default:
                lockLicense = true;
                break;
        }
    }

    function ChangeValue(newValue) {
        value = newValue;
        dispatch("change", value);
    }

    function UpdateDisabledState() {
        if (lockLicense) return;

        value = undefined;

        if (attribution === "No") {
            ChangeValue("CC0-1.0");
            return;
        }

        if (attribution === "Yes") {
            let license = "CC-BY";

            if (commercial === undefined) return;
            if (commercial === "No") {
                license += "-NC";
            }

            if (derivative === undefined) return;
            if (derivative === "No") {
                license += "-ND";
            } else {
                if (sharing === undefined) return;
                if (sharing === "No") {
                    license += "-SA";
                }
            }

            license += "-4.0";
            ChangeValue(license);
        }
    }

    $: if (value || value === undefined || value === "") UpdateShadow();
    $: if (attribution || commercial || derivative || sharing) UpdateDisabledState();
</script>

<div class="bx--form-item bx--text-input-wrapper bx--text-input-wrapper--inline">
    <div class="bx--text-input__label-helper-wrapper">
        <span class="bx--label--inline--sm bx--label bx--label--inline">{labelText}</span>
    </div>
    <div class="content">
        <RadioButtonGroup
            orientation="vertical"
            legendText="Attribution - Do you want attribution for your work?"
            bind:selected={attribution}
            disabled={lockLicense || lockAttribution}
        >
            <RadioButton labelText="Yes. Anyone using my work must include proper attribution." value="Yes" />
            <RadioButton labelText="No. Anyone can use my work, even without giving me attribution." value="No" />

            {#if lockAttribution === true}
                <br />
                <span class="bx--label"
                    >This choice is disabled due to original license, which requires attribution.</span
                >
            {/if}
        </RadioButtonGroup>

        <RadioButtonGroup
            orientation="vertical"
            legendText="Commercial Use - Do you want to allow others to use your work commercially?"
            disabled={lockLicense || lockCommercial || attribution !== "Yes"}
            bind:selected={commercial}
        >
            {#if attribution !== "No"}
                <RadioButton labelText="Yes. Others can use my work, even for commercial purposes." value="Yes" />
                <RadioButton labelText="No. Others can not use my work for commercial purposes." value="No" />

                {#if lockCommercial === true}
                    <br />
                    <span class="bx--label"
                        >This choice is disabled due to original license, which does not allow commercial use.</span
                    >
                {/if}
            {:else}
                <span class="bx--label"
                    >This choice is disabled due to selecting waiver of copyright in the first question.</span
                >
            {/if}
        </RadioButtonGroup>

        <RadioButtonGroup
            orientation="vertical"
            legendText="Derivative Works - Do you want to allow others to remix, adapt, or build upon your work?"
            disabled={lockLicense || attribution !== "Yes" || commercial === undefined}
            bind:selected={derivative}
        >
            {#if attribution !== "No"}
                <RadioButton labelText="Yes. Others can remix, adapt, or build upon my work." value="Yes" />
                <RadioButton labelText="No. Others may only use my work in unadapted form." value="No" />
            {:else}
                <span class="bx--label"
                    >This choice is disabled due to selecting waiver of copyright in the first question.</span
                >
            {/if}
        </RadioButtonGroup>

        <RadioButtonGroup
            orientation="vertical"
            legendText="Sharing Requirements - Do you want to allow others to share adaptations of your work under any terms?"
            disabled={lockLicense || attribution !== "Yes" || derivative !== "Yes"}
            bind:selected={sharing}
        >
            {#if attribution !== "No" && derivative !== "No"}
                <RadioButton labelText="Yes. Others can share adaptations of my work under any terms." value="Yes" />
                <RadioButton labelText="No. Others must use the same license if they adapt my work." value="No" />
            {:else if attribution === "No"}
                <span class="bx--label"
                    >This choice is disabled due to selecting waiver of copyright in the first question.</span
                >
            {:else}
                <span class="bx--label"
                    >This choice is disabled due to selecting no derivative in the last question.</span
                >
            {/if}
        </RadioButtonGroup>

        {#if value !== undefined}
            <div class="summary">
                {#if lockLicense}
                    License: {value}<br />
                    <br />
                    This license is inherited from the project you are basing your new project on.
                    {#if sharing === "No"}
                        This license cannot be changed, as it is a "Share Alike" license, requiring you to adapt the
                        same license.
                    {:else}
                        This license cannot be changed, as TrueGRF doesn't know this license, and as such cannot judge
                        if it is a "Share Alike" license or not.
                    {/if}
                {:else}
                    <div>
                        {#if value === "CC-BY-4.0"}
                            Recommended license: CC BY 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to distribute,
                            remix, adapt, and build upon the material in any medium or format, even for commercial purposes.
                        {:else if value === "CC-BY-NC-4.0"}
                            Recommended license: CC BY-NC 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to distribute,
                            remix, adapt, and build upon the material in any medium or format, for noncommercial purposes
                            only.
                        {:else if value === "CC-BY-ND-4.0"}
                            Recommended license: CC BY-ND 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to copy and
                            distribute the material in any medium or format in unadapted form only, even for commercial purposes.
                        {:else if value === "CC-BY-NC-ND-4.0"}
                            Recommended license: CC BY-NC-ND 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to copy and
                            distribute the material in any medium or format in unadapted form and for noncommercial purposes
                            only.
                        {:else if value === "CC-BY-SA-4.0"}
                            Recommended license: CC BY-SA 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to distribute,
                            remix, adapt, and build upon the material in any medium or format, even for commercial purposes.
                            If others remix, adapt, or build upon the material, they must license the modified material under
                            identical terms.
                        {:else if value === "CC-BY-NC-SA-4.0"}
                            Recommended license: CC BY-NC-SA 4.0<br />
                            <br />
                            This license requires that reusers give credit to the creator. It allows reusers to distribute,
                            remix, adapt, and build upon the material in any medium or format, for noncommercial purposes
                            only. If others modify or adapt the material, they must license the modified material under identical
                            terms.
                        {:else if value === "CC0-1.0"}
                            Recommended license: CC0 1.0<br />
                            <br />
                            By marking the work with a CC0 public domain dedication, the creator is giving up their copyright
                            and allowing reusers to distribute, remix, adapt, and build upon the material in any medium or
                            format, even for commercial purposes.
                        {/if}
                    </div>
                    <br />
                    <a href={licenseURLs[value]} target="_new">Full license</a>.
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .content {
        max-width: 700px;
    }

    .content :global(.bx--form-item) {
        margin-top: 12px;
    }

    .summary {
        margin-top: 12px;
    }
</style>
