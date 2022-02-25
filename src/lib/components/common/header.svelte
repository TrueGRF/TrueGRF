<script lang="ts">
    import Select, { Option } from "@smui/select";
    import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
    import Menu, { MenuComponentDev, SelectionGroup, SelectionGroupIcon } from "@smui/menu";
    import List, { Item, Text } from "@smui/list";
    import Login from "$lib/components/general/login.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let categories = [];
    export let category = "";

    let test_action = "New-game";
    let test_menu: MenuComponentDev;
    let download_action = "GRF";
    let download_menu: MenuComponentDev;
</script>

<div class="title">
    <h1>TrueGRF</h1>
</div>
<div class="header">
    <div class="category">
        <Select class="shaped-filled" variant="filled" bind:value={category} label="Category" style="width: 100%;">
            {#each categories as option}
                <Option value={option}>{option}</Option>
            {/each}
        </Select>
    </div>
    <div class="filler">
        <Login />
    </div>
    <div class="icons">
        <Group variant="raised">
            <Button variant="raised" on:click={() => dispatch("download", download_action)}>
                <Label>Download: {download_action}</Label>
            </Button>
            <div use:GroupItem>
                <Button
                    on:click={() => download_menu.setOpen(true)}
                    variant="raised"
                    style="padding: 0; min-width: 36px;"
                >
                    <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
                </Button>
                <Menu bind:this={download_menu} anchorCorner="BOTTOM_LEFT">
                    <List>
                        <SelectionGroup>
                            {#each ["GRF", "JSON"] as item}
                                <Item
                                    on:SMUI:action={() => ((download_action = item), download_menu.setOpen(false))}
                                    selected={download_action === item}
                                >
                                    <SelectionGroupIcon>
                                        <i class="material-icons">check</i>
                                    </SelectionGroupIcon>
                                    <Text>{item}</Text>
                                </Item>
                            {/each}
                        </SelectionGroup>
                    </List>
                </Menu>
            </div>
        </Group>
        <Group variant="raised">
            <Button variant="raised" on:click={() => dispatch("test", test_action)}>
                <Label>Test: {test_action}</Label>
            </Button>
            <div use:GroupItem>
                <Button on:click={() => test_menu.setOpen(true)} variant="raised" style="padding: 0; min-width: 36px;">
                    <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
                </Button>
                <Menu bind:this={test_menu} anchorCorner="BOTTOM_LEFT">
                    <List>
                        <SelectionGroup>
                            {#each ["New-game", "Reload"] as item}
                                <Item
                                    on:SMUI:action={() => ((test_action = item), test_menu.setOpen(false))}
                                    selected={test_action === item}
                                >
                                    <SelectionGroupIcon>
                                        <i class="material-icons">check</i>
                                    </SelectionGroupIcon>
                                    <Text>{item}</Text>
                                </Item>
                            {/each}
                        </SelectionGroup>
                    </List>
                </Menu>
            </div>
        </Group>
    </div>
</div>

<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 24px;
    }

    .title {
        flex: 1 0;
        padding: 16px 0;
        text-align: center;
    }
    .title > h1 {
        margin: 0;
    }

    .category {
        width: 300px;
    }
    .filler {
        flex: 1 0;
        padding-left: 20px;
        padding-top: 20px;
    }
    .icons {
        padding-top: 20px;
    }

    .category :global(.mdc-deprecated-list) {
        padding: 0;
    }
    .category :global(.shaped-filled),
    .category :global(.shaped-filled .mdc-select__anchor) {
        border-radius: 16px 16px 0 0;
    }
</style>
