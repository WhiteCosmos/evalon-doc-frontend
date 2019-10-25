<template>
    <div class="ev-selector" :style="EvComponentStyle" v-if="project">
        <div
            class="ev-row ev-selector-container ev-width-max ev-col-center ev-no-select ev-selector-style"
            @click="toggle"
            :class="EvSelectorCSSClasses">

            <ev-col-gutter-16-px></ev-col-gutter-16-px>

            <!-- 搜索框 -->

            <ev-filter-input
                v-model="keyword"
                :placeholder="placeholder"
                :default-value="module.appName"></ev-filter-input>

            <!-- 仓库名 / 项目名 -->

            <div class="ev-row">
                <h6 class="ev-font-color-light">{{ project.repositoryName }}</h6>

                <ev-col-gutter-4-px></ev-col-gutter-4-px>

                <h6 class="ev-font-color-light">/</h6>

                <ev-col-gutter-4-px></ev-col-gutter-4-px>

                <h6 class="ev-font-color-light">{{ project.projectName }}</h6>
            </div>

            <ev-col-gutter-s></ev-col-gutter-s>

            <EvIcon icon-name="angle-left"
                    icon-color="ev-blue-light"
                    v-show="!is(SELECT_LOCKED)"
                    :rotate="is(SELECTING)"></EvIcon>

            <ev-col-gutter-m></ev-col-gutter-m>
        </div>

        <transition name="fade">
            <EvAppIdGroups
                v-show="is(SELECTING)"
                :keyword="keyword"
                :projects="projects"
                @select="onSelectHandler"></EvAppIdGroups>
        </transition>
    </div>
</template>

<script>
    import EvSelectorMixin from "@/evalon-ui/form/selector/EvSelectorMixin";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvMask from "@/evalon-ui/modal/EvMask";
    import EvTransparentMask from "@/evalon-ui/modal/EvTransparentMask";
    import EvOptions from "@/evalon-ui/form/basic/EvOptions";
    import EvSelectorSplit from "@/evalon-ui/form/selector/ev-selector-split";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";
    import EvOptionLocked from "@/evalon-ui/typography/ev-option-locked";
    import EvOption2 from "@/evalon-ui/typography/ev-option-2";
    import EvAppIdGroups from "@/evalon-ui/form/basic/EvAppIdGroups";
    import EvRowGutter4Px from "@/evalon-ui/layout/ev-row-gutter-4-px";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    import EvInput from "@/evalon-ui/form/input/ev-input";
    import EvFilterInput from "@/evalon-ui/form/search/ev-filter-input";
    import EvColGutter32Px from "@/evalon-ui/layout/ev-col-gutter-32-px";
    import EvColGutter24Px from "@/evalon-ui/layout/ev-col-gutter-24-px";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";

    export default {
        name: "EvalonDocumataAppIdSelector",
        data() {
            return {
                keyword: "",

                currentHoveredOption: undefined
            }
        },
        computed: {
            projects() {
                return this.$store.state.documata.projects
            },
            project() {
                return this.$store.state.documata.project
            },
            module() {
                return this.$store.state.documata.module
            },
            branch() {
                return this.$store.state.documata.branch
            },
            EvSelectorCSSClasses() {
                return {
                    'ev-is-first-component': this.isFirstComponent,

                    'ev-is-middle-component': this.isMiddleComponent,

                    'ev-is-last-component': this.isLastComponent,

                    'ev-selector-locked': this.is(this.SELECT_LOCKED),
                }
            }
        },
        methods: {
            clearHandler() {

            },
            escHandler() {
                this.keyword = ""

                this.to(this.AFTER_SELECT, undefined)
            },
            onSelectHandler(option) {
                let project = option.project

                let module = option.module

                this.switchModule({
                    repositoryName: project.repositoryName,
                    projectName: project.projectName,
                    moduleName: module.appName,
                })

                this.keyword = ""

                //
                // if (!option) {
                //     this.to(this.AFTER_SELECT, option)
                //
                //     return
                // }
                //
                // this.currentRepository = option
                //
                // this.currentModule = option.module

                this.to(this.AFTER_SELECT, option)
            },
        },
        components: {
            EvColGutter16Px,
            EvColGutter24Px,
            EvColGutter32Px,
            EvFilterInput,
            EvInput,
            EvColGutter4Px,
            EvRowGutter4Px,
            EvAppIdGroups,
            EvOption2,
            EvOptionLocked,
            EvOption1,
            EvSelectorSplit, EvOptions, EvTransparentMask, EvMask, EvColGutterM, EvColGutterS, EvIcon
        },
        mixins: [
            EvSelectorMixin,

            EvalonDocumataRouterMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/form/selector/ev-selector";

    .ev-selector {
        position: relative;

        height: 40px;

        width: 560px;
    }

    .ev-selector-locked {

    }

    .input-area {
        flex: 1;
    }

    .font {
        color: $EVALON_BLUE;

        font-weight: normal;

        line-height: 32px;

    }

    .selector-container-locked {
        background-color: $NEUTRAL_GREY_0;
    }

    .ev-is-first-component {
        border-right: none;

        border-radius: 40px 0 0 40px;
    }

    .ev-is-middle-component {
        border-left: none;

        border-right: none;

        border-radius: 0 0 0 0;
    }

    .ev-is-last-component {
        border-left: none;

        border-radius: 0 40px 40px 0;
    }

    .ev-selector-container {
        position: absolute;

        height: 40px;
    }

    .ev-selector-container:hover {
        cursor: pointer;
    }

    .ev-option-container {
        min-width: 0; // 让elipsis生效

        flex: 1;
    }

    .ev-options-container {

    }

    .ev-selector-locked {
        background-color: $EVALON_GREY_LIGHT;
    }

    .ev-selector-locked:hover {
        cursor: not-allowed;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 72ms;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
