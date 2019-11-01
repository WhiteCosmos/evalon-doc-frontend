<!-- 文档系统所使用的导航条 -->

<template>
    <div class="evalon-documata-navigation ev-col-center ev-width-max">
        <ev-col-gutter :gutter="56"></ev-col-gutter>

        <div class="ev-app-id-selector-container">
            <EvalonDocumataAppIdAndBranchSelector v-show="isDocument"></EvalonDocumataAppIdAndBranchSelector>
        </div>

        <div class="evalon-documata-icon-group">
            <ev-col-gutter-l></ev-col-gutter-l>

            <ev-icon-button icon-name="plug"
                            icon-color="ev-blue-light"
                            icon-active-color="ev-blue"
                            @click.native="toRegistry"
                            :active="isRegistry"></ev-icon-button>

            <ev-col-gutter-m></ev-col-gutter-m>

            <ev-icon-button icon-name="question"
                            icon-color="ev-blue-light"
                            icon-active-color="ev-blue"
                            @click.native="toHelp"
                            :active="isHelp"></ev-icon-button>

            <ev-col-gutter-m></ev-col-gutter-m>

<!--            <ev-icon-button icon-name="cog"-->
<!--                            icon-color="ev-blue-light"-->
<!--                            icon-active-color="ev-blue"-->
<!--                            @click.native="toConfig"-->
<!--                            :active="isConfig"></ev-icon-button>-->
        </div>
    </div>
</template>

<script>
    import EvSelectorGroup from "@/evalon-ui/form/selector/ev-selector-group";
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvIconButton from "@/evalon-ui/button/ev-icon-button";
    import EvColGutterL from "@/evalon-ui/layout/ev-col-gutter-l";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutter from "@/evalon-ui/layout/ev-col-gutter";
    import EvColGutter40Px from "@/evalon-ui/layout/ev-col-gutter-40-px";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";
    import EvalonDocumataAppIdAndBranchSelector from "@/components/documata/EvalonDocumataAppIdAndBranchSelector";

    export default {
        name: "EvalonDocumataNavigation",
        computed: {
            isDocument() {
                return this.$route.path.startsWith("/api") || this.$route.path.startsWith("/struct")
            },
            isRegistry() {
                return this.$route.path.startsWith("/registry")
            },
            isHelp() {
                return this.$route.path.startsWith("/help")
            },
            isConfig() {
                return this.$route.path.startsWith("/config")
            }
        },
        methods: {
            toRegistry() {
                this.$router.push('/registry')
            },
            toHelp() {
                window.open("https://yuque.antfin-inc.com/rmb/evalon_doc")
            },
            toConfig() {
                this.$router.push('/config')
            },
        },
        components: {
            EvalonDocumataAppIdAndBranchSelector,
            EvColGutter40Px,
            EvColGutter,
            EvColGutterM, EvColGutterL, EvIconButton, EvRoundButton, EvSelector, EvSelectorGroup
        },
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";


    .evalon-documata-navigation {
        display: flex;

        flex: 1;
    }

    .ev-app-id-selector-container {

    }

    .evalon-documata-icon-group {
        display: flex;

        justify-content: flex-end;

        flex: 1;
    }
</style>
