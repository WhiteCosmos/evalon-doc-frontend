<template>
    <div class="ev-col">
        <div class="app-id-group ev-row ev-col-center">
            <ev-col-gutter-16-px></ev-col-gutter-16-px>

            <div class="ev-row left-group">
                <h6 class="ev-font-color-light">{{ project.repositoryName }}</h6>

                <ev-col-gutter-4-px></ev-col-gutter-4-px>

                <h6 class="ev-font-color-light">/</h6>

                <ev-col-gutter-4-px></ev-col-gutter-4-px>

                <h6 class="ev-font-color-light">{{ project.projectName }}</h6>
            </div>
        </div>

        <EvOption
            v-for="(module, idx) in project.modules"
            v-show="isOptionVisible(module)"
            :key="idx"
            :option="module"
            option-head-key="appName"
            :is-hover="module === currentHoveredModule"
            :is-select="isSelected(module)"
            :hover-handler="onHoverHandler"
            @select="onSelectHandler"></EvOption>


    </div>
</template>

<script>
    import EvOption from "@/evalon-ui/form/basic/EvOption";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    import EvOptionsMixin from "@/evalon-ui/form/basic/EvOptionsMixin";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";

    export default {
        name: "EvAppIdGroup",
        props: {
            project: {
                type: Object
            },

            filterKeyword: {type: String},

            currentHoveredModule: undefined
        },
        data() {
            return {

            }
        },
        methods: {
            onHoverHandler(module) {
                this.$emit('hover', {
                    project: {
                        projectId: this.project.projectId,
                        projectName: this.project.projectName,
                        repositoryName: this.project.repositoryName,
                    },
                    module: module
                })
            },
            onSelectHandler(module) {
                console.log(module)

                this.$emit('select', {
                    project: {
                        projectId: this.project.projectId,
                        projectName: this.project.projectName,
                        repositoryName: this.project.repositoryName,
                    },
                    module: module
                })
            },
            isOptionVisible(module) {
                if (this.filterKeyword === undefined || this.filterKeyword === "") {
                    return true
                }

                return module.appName.includes(this.filterKeyword)
            }
        },
        watch: {
            filterKeyword(newVal) {
                // if (!this.project || !newVal) {
                //     return
                // }
                //
                // let m = this.project.modules.find(m => {
                //     m.appName.includes(newVal)
                // })
                //
                // if (m) {
                //     this.$emit()
                // }
            }
        },
        components: {EvColGutter16Px, EvColGutter8Px, EvColGutter4Px, EvOption},
        mixins: [
            EvOptionsMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .app-id-group {
        height: 32px;

        background-color: $NEUTRAL_GREY_0;
    }

    .left-group {
        flex: 1;

        justify-content: flex-start;
    }

    .right-group {
        flex: 1;

        justify-content: flex-end;
    }
</style>
