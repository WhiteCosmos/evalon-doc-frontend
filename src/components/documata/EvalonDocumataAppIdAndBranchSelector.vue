<template>
    <div class="root">
        <ev-selector-group>
            <EvalonDocumataAppIdSelector></EvalonDocumataAppIdSelector>

            <ev-selector :options="branches"
                         :has-default-option="true"
                         :default-option="branch"
                         option-head-key="branchName"
                         @select="switchBranch">
                <template v-slot:button>
                    <ev-icon-button-small @click.native.stop="update" icon-name="redo-alt"
                                          icon-color="ev-blue-light"
                                          icon-active-color="ev-blue-light"></ev-icon-button-small>

                    <ev-col-gutter-16-px></ev-col-gutter-16-px>
                </template>
            </ev-selector>
        </ev-selector-group>
    </div>
</template>

<script>
    import EvSelectorGroup from "@/evalon-ui/form/selector/ev-selector-group";
    import EvFilterSelector from "@/evalon-ui/form/selector/ev-filter-selector";
    import EvIconButton from "@/evalon-ui/button/ev-icon-button";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvIconButtonSmall from "@/evalon-ui/button/ev-icon-button-small";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";
    import EvalonDocumataAppIdSelector from "@/components/documata/EvalonDocumataAppIdSelector";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";

    export default {
        name: "EvalonDocumataAppIdAndBranchSelector",
        computed: {
            branches() {
                return this.$store.state.documata.branches
            },
            branch() {
                return this.$store.state.documata.branch
            }
        },
        methods: {
            update() {
                this.routeToUpate()
            }
        },
        components: {
            EvSelector,
            EvalonDocumataAppIdSelector,
            EvColGutter16Px,
            EvIconButtonSmall, EvIcon, EvIconButton, EvFilterSelector, EvSelectorGroup
        },
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .root {

    }
</style>
