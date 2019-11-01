<template>
    <div>
        <!--           v-shortkey="{up: ['arrowup'], down: ['arrowdown'], enter: ['enter']}"
                     @shortkey="shortKey" -->

        <div class="ev-options ev-col ev-width-max">

            <ev-row-gutter-32-px></ev-row-gutter-32-px>

            <EvAppIdGroup
                v-for="(project, index) in projects"
                v-show="isProjectVisible(project)"
                :key="index"
                :filter-keyword="filterKeyword"
                :project="project"
                :current-hovered-module="currentHoveredModule"
                :is-hovered-handler="isHoveredHandler_"
                @select="onSelectHandler"
                @hover="onHoverHandler"></EvAppIdGroup>

            <EvPlaceholder v-if="!anyMatch" :height=48>没有搜索结果。</EvPlaceholder>
        </div>

        <EvTransparentMask
            @click.native="doSelectOption(undefined)"></EvTransparentMask>
    </div>
</template>

<script>
    import EvOptionsMixin from "@/evalon-ui/form/basic/EvOptionsMixin";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvOption from "@/evalon-ui/form/basic/EvOption";
    import EvTransparentMask from "@/evalon-ui/modal/EvTransparentMask";
    import EvPlaceholder from "@/evalon-ui/form/basic/EvPlaceholder";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvScrollY from "@/evalon-ui/layout/ev-scroll-y";
    import EvAppIdGroup from "@/evalon-ui/form/basic/EvAppIdGroup";
    import EvRowGutter32Px from "@/evalon-ui/layout/ev-row-gutter-32-px";

    export default {
        name: "EvAppIdGroups",
        created() {
            this.projects.forEach(p => {
                p.modules.forEach(m => {
                    if (m.appName) {
                        this.allModuleNames.push(m.appName);
                    } else {
                        this.allModuleNames.push(m.moduleName);
                    }
                })
            })
        },
        props: {
            projects: {
                type: Array,
                default: () => {
                    return []
                }
            },

            filterKeyword: {type: String},
        },
        data() {
            return {
                /*
                {
                    repository

                    module
                }
                 */
                currentHoveredModule: undefined,

                allModuleNames: []
            }
        },
        methods: {
            onSelectHandler(option) { // repo + module
                this.$emit('select', option)
            },
            onHoverHandler(option) {
                this.currentHoveredModule = option.module
            },
            isHoveredHandler_(module) {
                return (this.currentHoveredModule && this.currentHoveredModule.module === module)
            },
            isSelectedHandler_(module) {

            },
            isProjectVisible(project) {
                if (!this.filterKeyword) {
                    return true
                }

                let m = project.modules.find(m => {
                    return m.appName.includes(this.filterKeyword)
                })

                return m !== undefined
            }
        },
        computed: {
            anyMatch() {
                if (!this.filterKeyword) {
                    return true
                }

                let r = this.allModuleNames.find(name => {
                    return name.includes(this.filterKeyword)
                })

                return r !== undefined
            }
        },
        components: {
            EvRowGutter32Px,
            EvAppIdGroup,
            EvScrollY,
            EvRowGutterL,
            EvPlaceholder,
            EvTransparentMask,
            EvOption
        },
        mixins: [
            EvAbstractComponent,

            EvOptionsMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";
    @import "../../basic/ev-scroll";

    .ev-options {
        display: block;

        position: absolute;

        max-height: 256px;

        overflow-y: auto;

        top: 16px;

        z-index: 1;

        background-color: white;

        border-radius: 2px 2px 16px 16px;

        border-left: 1px solid $EVALON_BLUE_VERY_LIGHT;

        border-right: 1px solid $EVALON_BLUE_VERY_LIGHT;

        box-shadow: 0 7px 5px -5px $EVALON_GREY_LEVEL_1;
    }
</style>
