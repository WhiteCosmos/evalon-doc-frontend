<template>
    <div class="evalon-documata-welcome ev-col-center ev-row-center">
        <div class="ev-col welcome-container">
            <div class="ev-row ev-col-center">
                <h4>选择项目与分支</h4>
                <ev-col-gutter-m></ev-col-gutter-m>
                <ev-icon icon-name="long-arrow-alt-up" :icon-scale="1" icon-color="font-color-3"></ev-icon>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <div class="ev-row ev-col-center">
                <h4>选择接口或结构体</h4>
                <ev-col-gutter-m></ev-col-gutter-m>
                <ev-icon icon-name="long-arrow-alt-left" :icon-scale="1" icon-color="font-color-3"></ev-icon>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <div class="ev-row ev-col-center">
                <h4>自助接入与帮助文档</h4>
                <ev-col-gutter-m></ev-col-gutter-m>
                <ev-icon icon-name="long-arrow-alt-right" :icon-scale="1" icon-color="font-color-3" :rotate="true"
                         :rotate-deg="-45"></ev-icon>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <div class="ev-col" v-if="gradle">
                <div class="ev-row ev-col-center">
                    <h4>依赖配置</h4>
                </div>

                <ev-row-gutter-m></ev-row-gutter-m>

                <h5>Gradle</h5>

                <ev-row-gutter-m></ev-row-gutter-m>

                <pre>{{ gradle }}</pre>

                <ev-row-gutter-m></ev-row-gutter-m>

                <h5>Maven</h5>

                <ev-row-gutter-m></ev-row-gutter-m>

                <pre>{{ maven }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvTitle from "@/evalon-ui/typography/ev-title";
    import EvCollapse from "@/evalon-ui/collapse/EvCollapse";

    export default {
        name: "EvalonDocumataWelcome",
        computed: {
            project() {
                return this.$store.state.documata.project
            },
            module() {
                return this.$store.state.documata.module
            },
            gradle() {
                if (!this.project || !this.module || !this.project.groupId) {
                    return
                }

                return `compile \"${this.project.groupId}:${this.module.moduleName}:${this.project.versionId}\"`
            },
            maven() {
                if (!this.project || !this.module || !this.project.groupId) {
                    return
                }

                return '<dependency>\n' +
                    '    <groupId>' + this.project.groupId + '</groupId>\n' +
                    '    <artifactId>' + this.module.moduleName + '</artifactId>\n' +
                    '    <version>' + this.project.versionId + '</version>\n' +
                    '</dependency>\n'
            }
        },
        components: {EvCollapse, EvTitle, EvRowGutterL, EvRowGutterM, EvColGutterM, EvIcon}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .evalon-documata-welcome {
        width: calc(100vw - 320px);

        height: calc(100vh - 56px);
    }

    .welcome-container {
        //padding-bottom: 72px;
    }

    h4 {
        color: $EVALON_FONT_COLOR_VERY_LIGHT;
    }

    h5 {
        color: $EVALON_FONT_COLOR_VERY_LIGHT;

        font-size: 12px;
    }

    pre {
        font-size: 12px;

        font-family: "Source Code Pro", serif;

        color: $EVALON_FONT_COLOR_VERY_LIGHT;

        background: $NEUTRAL_GREY_1;

        padding: 16px;

        border-radius: 5px;

        line-height: 20px;
    }
</style>
