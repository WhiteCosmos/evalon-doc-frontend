<template>
    <div class="ev-col evalon-documata-content">
        <div class="ev-col evalon-documata-container">
            <EvalonDocumataApiTitle></EvalonDocumataApiTitle>

            <ev-row-gutter-24-px></ev-row-gutter-24-px>

            <ev-tab>
                <ev-panel name="接口定义" label="api">
                    <ev-row-gutter-16-px></ev-row-gutter-16-px>

                    <EvalonDocumataViewApi></EvalonDocumataViewApi>
                </ev-panel>

                <!--<ev-panel name="接口调试" label="debug">-->
                <!--<EvalonDocumataViewDebug></EvalonDocumataViewDebug>-->
                <!--</ev-panel>-->

                <!--<ev-panel name="接口MOCK" label="mock">-->
                <!--接口MOCK-->
                <!--</ev-panel>-->
            </ev-tab>
        </div>
    </div>
</template>

<script>
    import EvalonDocumataApiTitle from "@/pages/documata/EvalonDocumataApiTitle";
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";
    import EvRowGutter24Px from "@/evalon-ui/layout/ev-row-gutter-24-px";
    import EvalonDocumataViewApi from "@/pages/documata/EvalonDocumataViewApi";
    import EvalonDocumataViewDebug from "@/pages/documata/EvalonDocumataViewDebug";
    import EvRowGutter16Px from "@/evalon-ui/layout/ev-row-gutter-16-px";

    export default {
        name: "EvalonDocumataContent",
        computed: {},
        components: {
            EvRowGutter16Px,
            EvalonDocumataViewDebug,
            EvalonDocumataViewApi, EvRowGutter24Px, EvPanel, EvTab, EvalonDocumataApiTitle
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";
    @import "../../evalon-ui/basic/ev-scroll";

    .evalon-documata-content {
        width: calc(100vw - 320px);
    }

    .evalon-documata-container {
        display: block;

        width: 100%;

        overflow-y: scroll;

        @include ev-padding-tb(24px, 0px);

        @include ev-padding-lr(72px, 72px);

        //background-color: $EVALON_GREY_LEVEL_1;

        height: calc(100vh - 56px);
    }
</style>
