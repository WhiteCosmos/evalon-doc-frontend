<template>
    <button class="ev-round-button ev-no-outline ev-no-select ev-cursor-pointer ev-last-component-class">
        <slot></slot>
    </button>
</template>

<script>
    import EvButtonMixin from "@/evalon-ui/button/EvButtonMixin";

    export default {
        name: "ev-round-button",
        computed: {},
        mixins: [
            EvButtonMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";
    @import "ev-button";

    .ev-round-button {
        @include ev-padding-left-and-right(24px, 24px);

        //min-width: 96px;

        width: fit-content;

        height: 32px;

        border-radius: 32px;

        box-shadow: 0 1px 2px 2px $EVALON_BLUE_VERY_LIGHT;

        font-size: 12px;

        font-weight: normal;

        color: $EVALON_BLUE;

        border: 1px solid $EVALON_BLUE_LIGHT;

        transition: all 96ms;
    }

    .ev-round-button:hover {
        //border: 1px solid $EVALON_BLUE;

        //color: $EVALON_BLUE_DARK;

        color: $EVALON_BLUE;

        background-color: $EVALON_ROYAL_BLUE_0;

        transition: all 96ms;
    }
</style>
