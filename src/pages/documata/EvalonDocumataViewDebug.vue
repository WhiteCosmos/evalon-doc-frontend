<template>
    <div class="root ev-row">
        <EvalonDocumataViewDebugRequest></EvalonDocumataViewDebugRequest>

        <ev-col-gutter-16-px></ev-col-gutter-16-px>

        <EvalonDocumataViewDebugResponse></EvalonDocumataViewDebugResponse>
    </div>
</template>

<script>
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvColGutterMax from "@/evalon-ui/layout/ev-col-gutter-max";
    import EvalonDocumataViewDebugOptions from "@/components/documata/EvalonDocumataViewDebugOptions";
    import EvalonDocumataViewDebugRequest from "@/components/documata/EvalonDocumataViewDebugRequest";
    import EvalonDocumataViewDebugResponse from "@/components/documata/EvalonDocumataViewDebugResponse";
    import EvRowGutter16Px from "@/evalon-ui/layout/ev-row-gutter-16-px";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";

    export default {
        name: "EvalonDocumataViewDebug",
        components: {
            EvColGutter16Px,
            EvRowGutter16Px,
            EvalonDocumataViewDebugRequest, EvalonDocumataViewDebugResponse,
            EvalonDocumataViewDebugOptions, EvColGutterMax, EvColGutter8Px, EvRoundButton, EvPanel, EvTab
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .root {

    }
</style>
