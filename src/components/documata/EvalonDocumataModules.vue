<template>
    <div class="evalon-documata-modules ev-col ev-width-max">
        <div class="modules-title ev-col-center">
            <h6 class="ev-blue">模块列表</h6>
        </div>

        <ev-row-gutter-s></ev-row-gutter-s>

        <EvalonDocumataModule
            v-for="(module, idx) in modules"
            :key="idx"
            :module="module"></EvalonDocumataModule>

        <ev-row-gutter-l></ev-row-gutter-l>

        <div class="ev-row ev-center">
            <!--            <h6 class="ev-red">请选择需要接入的模块</h6>-->

            <!--            <ev-row-gutter-l></ev-row-gutter-l>-->

        </div>
    </div>
</template>

<script>
    import EvCollapse from "@/evalon-ui/collapse/EvCollapse";
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvalonDocumataModule from "@/components/documata/EvalonDocumataModule";
    import EvRoundButton2 from "@/evalon-ui/button/ev-round-button-2";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvScrollY from "@/evalon-ui/layout/ev-scroll-y";

    export default {
        name: "EvalonDocumataModules",
        components: {
            EvScrollY,
            EvRowGutterL, EvRoundButton2, EvalonDocumataModule, EvRowGutterM, EvRowGutterS, EvCollapse
        },
        props: {
            modules: {
                type: Array,
                default: () => {
                    return [] // class Module
                }
            },
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .modules-title {
        height: 48px;

        border-bottom: 1px solid $EVALON_GREY_LEVEL_2;
    }
</style>
