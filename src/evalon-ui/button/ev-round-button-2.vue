<template>
    <div class="ev-round-button ev-row ev-no-outline ev-no-select ev-cursor-pointer ev-center" :style="EvComponentStyle">
        <ev-icon icon-name="plug" icon-color="ev-white"></ev-icon>

        <ev-row-gutter-m></ev-row-gutter-m>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import EvButtonMixin from "@/evalon-ui/button/EvButtonMixin";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";

    export default {
        name: "ev-round-button-2",
        components: {EvRowGutterM, EvRowGutterS, EvIcon},
        data() {
            return {
                isHover: false,
            }
        },
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
        background: linear-gradient(to right, #66ccff, $EVALON_BLUE);

        width: 176px;

        height: 40px;

        border-radius: 40px;

        font-size: 13px;

        font-weight: bolder;

        color: white;

        //border: 1px solid $EVALON_BLUE_LIGHT;

        border: none;

        transition: all .12s;
    }

    .ev-round-button:hover {
        //box-shadow: 0 10px ;
    }
</style>
