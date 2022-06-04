<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";
    import WatsonHealthRotate_360 from "carbon-icons-svelte/lib/WatsonHealthRotate_360.svelte";

    import { Button } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import { Tabs, Tab, TabContent } from "carbon-components-svelte";
    import { Tooltip } from "carbon-components-svelte";
    import { TreeView } from "carbon-components-svelte";

    import NumberInput from "$lib/components/ui/number-input.svelte";
    import Pagination from "$lib/components/ui/pagination.svelte";
    import Switch from "$lib/components/ui/switch.svelte";
    import TextInput from "$lib/components/ui/text-input.svelte";

    const dispatch = createEventDispatcher();

    export let townname;
    export let townnames;

    let deleteTownnameOpen = false;
    let deletePartOpen = false;
    let deleteSetOpen = false;
    let tree = [];
    let selectedSet = 0;
    let selectedPart = 1;
    let parts = [];
    let example = "";
    let newProbability = 1;
    let newName = "";
    let shadowTownnameId = undefined;

    const mainsetName = "(main)";

    function DeleteTownname() {
        dispatch("delete", townname.id);
        deleteTownnameOpen = false;
    }

    function GenerateSingleExample(parts, ignoreList = undefined) {
        let firsttime = false;
        if (ignoreList === undefined) {
            firsttime = true;
            if (selectedSet === 0) {
                ignoreList = [];
            } else {
                ignoreList = ["@" + townname.subsets[selectedSet - 1].name];
            }
        }

        let example = "";
        let id = 0;

        for (let part of parts) {
            id += 1;

            let probability_total = 0;
            for (let item of part.names) {
                /* Skip empty parts when it is selected in the example. */
                if (id == selectedPart && item.name == "") continue;

                probability_total += item.probability || 1;
            }

            if (probability_total === 0) {
                if (id == selectedPart) {
                    example += `<span class="active">&nbsp;&nbsp;&nbsp;</span>`;
                }
            } else {
                let pick = Math.floor(Math.random() * probability_total);
                for (let item of part.names) {
                    /* Skip empty parts when it is selected in the example. */
                    if (id == selectedPart && item.name == "") continue;

                    if (pick < (item.probability || 1)) {
                        let text = item.name;
                        if (text[0] == "@") {
                            if (ignoreList.indexOf(text) !== -1) {
                                text = '<font color="red">reference causes a recursion!</font>';
                            } else {
                                let subparts = townname.subsets.find((i) => i.name == text.substring(1));
                                text = GenerateSingleExample(subparts.parts, ignoreList + [text]);
                            }
                        }

                        if (firsttime && id == selectedPart) {
                            example += `<span class="active">${text}</span>`;
                        } else {
                            example += text;
                        }
                        break;
                    }
                    pick -= item.probability || 1;
                }
            }
        }

        return example;
    }

    function GenerateExample() {
        example = GenerateSingleExample(parts);
    }

    function UpdateTownname() {
        /* Only reset the selection if we actually change townname. */
        if (shadowTownnameId !== townname.id) {
            shadowTownnameId = townname.id;

            selectedSet = 0;
            selectedPart = 1;
        }

        if (selectedSet === 0) {
            parts = townname.mainset;
        } else {
            parts = townname.subsets[selectedSet - 1].parts;
        }
        GenerateExample();

        let id = 0;

        tree = [];
        for (let set of townname.subsets) {
            id += 1;

            tree.push({
                id: id,
                text: set.name,
            });
        }
        tree.push({
            id: 0,
            text: mainsetName,
        });
        tree.push({
            id: 0xff,
            text: "+ New set",
        });
    }

    $: if (townname !== undefined) UpdateTownname();

    function OnChange() {
        if (townname.source === "") townname.source = null;

        dispatch("change", townname);
    }

    function ValidateName(value) {
        if (townnames.find((i) => i.id != townname.id && i.name == value)) {
            return "Name already exists";
        }
    }

    function TreeSelect(event) {
        let id = event.detail.id;

        if (id === 0xff) {
            townname.subsets.push({
                name: `newset-${townname.subsets.length}`,
                parts: [{ names: [] }],
            });
            id = townname.subsets.length;
            selectedSet = id;

            /* Inform Svelte the array is changed. */
            townname.subsets = townname.subsets;
        }

        if (id === 0) {
            parts = townname.mainset;
        } else {
            parts = townname.subsets[id - 1].parts;
        }

        if (selectedPart > parts.length) {
            selectedPart = parts.length;
        }

        GenerateExample();
    }

    function CreatePart() {
        parts.push({
            names: [],
        });

        selectedPart = parts.length;

        /* Inform Svelte the array is changed. */
        parts = parts;
    }

    function DeletePart() {
        deletePartOpen = false;

        parts.splice(selectedPart - 1, 1);
        if (parts.length === 0) {
            CreatePart();
        }
        if (selectedPart > parts.length) {
            selectedPart = parts.length;
        }

        /* Inform Svelte the array is changed. */
        parts = parts;
    }

    function CreateName() {
        parts[selectedPart - 1].names.push({
            probability: newProbability,
            name: newName,
        });

        GenerateExample();

        newName = "";
        /* Inform Svelte the array is changed. */
        parts = parts;
    }

    function DeleteName(index) {
        parts[selectedPart - 1].names.splice(index, 1);

        GenerateExample();

        /* Inform Svelte the array is changed. */
        parts = parts;
    }

    function DeleteSet() {
        deleteSetOpen = false;

        townname.subsets.splice(selectedSet - 1, 1);

        if (selectedSet > townname.subsets.length) {
            selectedSet = townname.subsets.length;
        }

        /* Inform Svelte the array is changed. */
        townname = townname;
    }

    $: if (selectedPart) GenerateExample();
</script>

<div class="listing">
    <Tabs class="subnav">
        <Tab label="Properties" />
        <Tab label="Names" />

        <svelte:fragment slot="content">
            <TabContent>
                <div class="flex">
                    <Switch
                        labelText="Availability"
                        labelOff="Hidden"
                        labelOn="Available"
                        bind:value={townname.available}
                        on:change={OnChange}
                    />
                    <Button
                        kind="danger-tertiary"
                        iconDescription="Delete townname"
                        icon={TrashCan}
                        size="small"
                        tooltipPosition="bottom"
                        tooltipAlignment="end"
                        on:click={() => (deleteTownnameOpen = true)}
                    />
                </div>

                <br />

                <TextInput
                    labelText="Name"
                    placeholder="Name of townname"
                    validate={ValidateName}
                    bind:value={townname.name}
                    on:change={OnChange}
                />

                <TextInput
                    labelText="Source"
                    placeholder="(Optional) Source of this set"
                    bind:value={townname.source}
                    on:change={OnChange}
                >
                    <svelte:fragment slot="tooltip">
                        In case you have used an open source for this set, you can mention that here.
                    </svelte:fragment>
                </TextInput>
            </TabContent>
            <TabContent>
                <Tooltip triggerText="Names" direction="right" style="margin-bottom: 6px;">
                    <p>
                        Each name can consist of one or more parts, that are generated one after the other. In the
                        example you can see how this could look in-game.
                    </p>
                    <br />
                    <p>
                        A name can also reference another set by prefixing it with a "@". Each set can generate a
                        subpart of the name. This is for example useful if you only want a prefix once out of every 10
                        names, and there are multiple prefixes it pick from.
                    </p>
                    <br />
                    <p>
                        Townname generation always start from the "{mainsetName}" set.
                    </p>
                </Tooltip>

                <div class="flex">
                    <TreeView bind:activeId={selectedSet} hideLabel children={tree} on:select={TreeSelect} />

                    <div class="names">
                        <div class="flex">
                            <div>
                                {#if selectedSet === 0}
                                    <TextInput
                                        labelText="Set name"
                                        placeholder="Name of set"
                                        value={mainsetName}
                                        disabled
                                    />
                                {:else}
                                    <TextInput
                                        labelText="Set name"
                                        placeholder="Name of set"
                                        bind:value={townname.subsets[selectedSet - 1].name}
                                    />
                                {/if}
                            </div>
                            <Button
                                kind="danger-tertiary"
                                iconDescription="Delete townname"
                                icon={TrashCan}
                                size="small"
                                tooltipPosition="bottom"
                                tooltipAlignment="end"
                                on:click={() => (deleteSetOpen = true)}
                                disabled={selectedSet === 0}
                            />
                        </div>

                        <br />

                        <Pagination
                            bind:selected={selectedPart}
                            items={parts}
                            labelText="part"
                            on:new={() => CreatePart()}
                            on:delete={() => (deletePartOpen = true)}
                        />

                        <div class="example">
                            <div class="flex">
                                <div class="text flex">
                                    <Tooltip triggerText="Example:">
                                        <p>
                                            Example of a townname. Empty entries of the current selected part are
                                            ignored.
                                        </p>
                                    </Tooltip>
                                    <div>
                                        {@html example}
                                    </div>
                                </div>

                                <Button
                                    kind="ghost"
                                    iconDescription="Generate new example"
                                    icon={WatsonHealthRotate_360}
                                    size="small"
                                    tooltipPosition="left"
                                    on:click={() => GenerateExample()}
                                />
                            </div>
                        </div>

                        <div>
                            {#if parts.length !== 0}
                                {#each parts[selectedPart - 1].names as item, i}
                                    <div class="flex row">
                                        <NumberInput
                                            hideLabel
                                            placeholder="Weight"
                                            min={1}
                                            bind:value={item.probability}
                                        />
                                        <TextInput hideLabel placeholder="Part name" bind:value={item.name} />

                                        <Button
                                            kind="danger-ghost"
                                            iconDescription="Delete entry"
                                            icon={TrashCan}
                                            size="small"
                                            tooltipPosition="left"
                                            on:click={() => DeleteName(i)}
                                        />
                                    </div>
                                {/each}

                                <span class="bx--label newrow-label">Add new name (press enter to add multiple)</span>
                                <div class="flex newrow">
                                    <NumberInput hideLabel placeholder="Weight" min={1} bind:value={newProbability} />
                                    <TextInput
                                        hideLabel
                                        placeholder="Part name"
                                        bind:value={newName}
                                        on:change={() => CreateName()}
                                    />

                                    <Button
                                        kind="primary"
                                        iconDescription="Add entry"
                                        icon={Add}
                                        size="small"
                                        tooltipPosition="left"
                                    />
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </TabContent>
        </svelte:fragment>
    </Tabs>

    <Modal
        bind:open={deleteSetOpen}
        modalHeading="Delete set?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deleteSetOpen = false)}
        on:click:button--primary={() => DeleteSet()}
        danger
    >
        {#if selectedSet > 0}
            Are you sure you want to delete '{townname.subsets[selectedSet - 1].name}'?
        {/if}
    </Modal>

    <Modal
        bind:open={deletePartOpen}
        modalHeading="Delete part?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deletePartOpen = false)}
        on:click:button--primary={() => DeletePart()}
        danger
    >
        Are you sure you want to delete this part?
    </Modal>

    <Modal
        bind:open={deleteTownnameOpen}
        modalHeading="Delete townname?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        on:click:button--secondary={() => (deleteTownnameOpen = false)}
        on:click:button--primary={() => DeleteTownname()}
        danger
    >
        Are you sure you want to delete '{townname.name}'?
    </Modal>
</div>

<style>
    .listing :global(.bx--text-input__label-helper-wrapper) {
        max-width: 10rem;
        width: 10rem;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .listing :global(.bx--tree) {
        margin-right: 1.5rem;
        width: 10rem;
    }

    .example {
        border: 1px solid var(--cds-ui-04, #8d8d8d);
        margin-bottom: 12px;
    }
    .example .text {
        padding: 12px;
    }
    .example .text > div:last-child {
        margin-left: 12px;
    }
    .example :global(.active) {
        border-bottom: 1px solid var(--cds-support-error-inverse, #fa4d56);
    }

    .names {
        width: calc(100% - 10rem - 1.5rem);
    }
    .names :global(.bx--number__input-wrapper) {
        width: 130px;
    }
    .names :global(.bx--number__input-wrapper > input) {
        min-width: 132px;
        padding-right: 0;
    }

    .names .flex :global(> .bx--form-item:first-child) {
        flex: 0;
        margin-right: 12px;
        width: 130px;
    }
    .names .flex :global(> .bx--form-item:first-child > .bx--form-item) {
        flex: 0;
    }

    .names .newrow-label {
        margin-top: 24px;
    }

    .names .newrow :global(> button) {
        margin-left: 12px;
    }
    .listing :global(> button),
    .names .row :global(> button) {
        margin-left: 12px;
        padding: 0;
        width: 32px;
    }

    .listing :global(.subnav) {
        display: flex;
        width: 100%;
        justify-content: center;
    }
</style>
