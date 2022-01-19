<script lang="ts">
    import { Icon } from "@smui/common";
    import FormField from "@smui/form-field";
    import Slider from "@smui/slider";
    import Tooltip, { Wrapper } from "@smui/tooltip";

    export let value = 0;
</script>

<span class="tg-slider-root">
    <FormField align="end" class="tg-slider">
        <Slider bind:value {...$$restProps} discrete />
        <span slot="label">
            <slot name="label" />
            {#if $$slots.help}
                <Wrapper>
                    <Icon class="help material-icons">help</Icon>
                    <Tooltip>
                        <slot name="help" />
                    </Tooltip>
                </Wrapper>
            {/if}
        </span>
    </FormField>
</span>

<style>
    .tg-slider-root :global(label) {
        position: relative;
    }
    .tg-slider-root :global(.mdc-slider),
    .tg-slider-root :global(.mdc-slider__thumb) {
        height: 56px;
    }

    .tg-slider-root :global(.tg-slider) {
        display: flex;
    }
    .tg-slider-root :global(.mdc-slider) {
        flex-grow: 1;
    }

    .tg-slider-root :global(.material-icons.help) {
        position: absolute;
        top: -3px;
        right: 0px;
    }
</style>
