<template>
    <div class="evalon-documata-welcome ev-col-center">
        <div class="ev-col welcome-container">
            <h1>欢迎使用 Evalon 接口文档系统</h1>

            <ev-row-gutter-l></ev-row-gutter-l>

            <div class="ev-row ev-col-center">
                <ev-icon icon-name="arrow-up" icon-scale="1" icon-color="neutral-grey-4"></ev-icon>
                <ev-col-gutter-m></ev-col-gutter-m>
                <h4>选择项目与分支</h4>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <div class="ev-row ev-col-center">
                <ev-icon icon-name="arrow-left" icon-scale="1" icon-color="neutral-grey-4"></ev-icon>
                <ev-col-gutter-m></ev-col-gutter-m>
                <h4>选择接口或结构体</h4>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <div class="ev-row ev-col-center">
                <ev-icon icon-name="arrow-right" icon-scale="1" icon-color="neutral-grey-4"></ev-icon>
                <ev-col-gutter-m></ev-col-gutter-m>
                <h4>使用自助接入与帮助文档</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";

    export default {
        name: "EvalonDocumataWelcome",
        components: {EvRowGutterL, EvRowGutterM, EvColGutterM, EvIcon}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .evalon-documata-welcome {
        width: calc(100vw - 320px);

        height: calc(100vh - 56px);
    }

    .welcome-container {
        margin-left: 128px;

        width: 640px;

        height: 640px;

        //background-color: $EVALON_GREY_LEVEL_0;
    }
</style>
