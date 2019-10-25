<template>
    <div class="ev-text-button" :class="[textClass]">
        <slot></slot>
    </div>
</template>

<script>
    import EvButtonMixin from "@/evalon-ui/button/EvButtonMixin";

    export default {
        name: "ev-text-button",
        props: {
            textClass: {type: String}
        },
        mixins: [
            EvButtonMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-text-button {
        //min-width: 72px;

        width: fit-content;

        height: 24px;

        font-size: 12px;

        font-weight: bolder;

        line-height: 24px;

        color: $EVALON_FONT_COLOR_VERY_LIGHT;

        transition: all 120ms;
    }

    .ev-text-button:hover {
        color: $EVALON_BLUE;
    }
</style>
