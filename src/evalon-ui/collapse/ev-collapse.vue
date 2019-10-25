<template>
    <div class="ev-col ev-collapse ev-width-max">

        <!--   标题   -->

        <div class="ev-row ev-collapse-title ev-height-l ev-col-center" @click="toggleExpand">
            <ev-icon icon-name="arrow-right" class="ev-collapse-icon"></ev-icon>

            <h5 class="ev-blue">{{ title }}</h5>

            <ev-row-gutter-max></ev-row-gutter-max>

            <slot name="button"></slot>
        </div>

        <!--   内容  -->

        <div class="ev-collapse-slot-container" v-show="expand">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import EvCollapseMixin from "@/evalon-ui/collapse/EvCollapseMixin";
    import EvAngle from "@/evalon-ui/button/EvAngle";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvRowGutterMax from "@/evalon-ui/layout/ev-row-gutter-max";

    export default {
        name: "ev-collapse",
        components: {EvRowGutterMax, EvIcon, EvAngle},
        mixins: [
            EvCollapseMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-collapse {
        position: relative;
    }

    .ev-collapse-title {
        @include ev-border-bottom($EVALON_GREY_LEVEL_2)
    }

    .ev-collapse-title:hover {
        cursor: pointer;
    }

    .ev-collapse-icon {
        //@include ev-absolute(0, 0, -$SIZE_24_PX, 0)

        position: absolute;

        left: -24px;
    }

    .ev-collapse-slot-container {

    }
</style>
