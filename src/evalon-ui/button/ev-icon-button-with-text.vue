<template>
    <div class="ev-icon-button-with-text ev-row ev-col-center">
        <ev-icon :icon-name="iconName" icon-color="evalon-royal-blue-4"></ev-icon>

        <ev-col-gutter-4-px></ev-col-gutter-4-px>

        <h6 class="evalon-royal-blue-4">ESC</h6>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    export default {
        name: "ev-icon-button-with-text",
        components: {EvColGutter4Px, EvIcon},
        props: {
            iconName: {
                type: String,
                default: "times"
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-icon-button-with-text {
        background-color: $EVALON_ROYAL_BLUE_0;

        height: 16px;

        border-radius: 16px;

        @include ev-padding-left-and-right(4px, 4px);

        transition: all .12s;
    }

    .ev-icon-button-with-text:hover {
        cursor: pointer;

        background-color: $EVALON_ROYAL_BLUE_1;
    }

    h6 {
        font-weight: bold;
    }
</style>
