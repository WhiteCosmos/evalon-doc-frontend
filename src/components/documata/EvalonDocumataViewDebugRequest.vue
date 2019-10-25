<template>
    <div class="root">
        <div class="root">
            <ev-tab button-align="center" class="tab-container">
                <ev-panel name="Options" label="options">
                    <EvalonDocumataViewDebugOptions></EvalonDocumataViewDebugOptions>
                </ev-panel>

                <ev-panel name="Headers" label="headers"></ev-panel>

                <ev-panel name="Cookies" label="cookies"></ev-panel>

                <ev-panel name="Parameters" label="parameters"></ev-panel>
            </ev-tab>

            <div class="button-container ev-row ev-col-center">
                <ev-col-gutter-8-px></ev-col-gutter-8-px>

                <ev-round-button>保存请求</ev-round-button>

                <ev-col-gutter-8-px></ev-col-gutter-8-px>

                <ev-round-button>保存为默认参数</ev-round-button>

                <ev-col-gutter-max></ev-col-gutter-max>

                <ev-round-button>发起请求</ev-round-button>

                <ev-col-gutter-8-px></ev-col-gutter-8-px>
            </div>
        </div>
    </div>
</template>

<script>
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvColGutterMax from "@/evalon-ui/layout/ev-col-gutter-max";
    import EvalonDocumataViewDebugOptions from "@/components/documata/EvalonDocumataViewDebugOptions";

    export default {
        name: "EvalonDocumataViewDebugRequest",
        components: {EvalonDocumataViewDebugOptions, EvColGutterMax, EvColGutter8Px, EvRoundButton, EvPanel, EvTab}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    @import "../../evalon-ui/evalon-ui";

    .root {
        width: 720px;
    }

    .tab-container {
        height: calc(100vh - 320px);
    }

    .button-container {
        height: 56px;

        width: 100%;

        border-top: 1px solid $EVALON_BORDER_COLOR_GREY;
    }
</style>
