<template>
    <div class="java-viewer-title ev-row ev-no-select ev-col-center">
        <div class="ev-row xxx">
            <div class="ev-col-1 ev-col-center">
                <div class="icon-container ev-center" @click="expand_ = !expand_">
                    <ev-icon icon-name="compress" icon-color="neutral-grey-4" icon-scale=".8" v-if="expand_"></ev-icon>

                    <ev-icon icon-name="expand" icon-color="neutral-grey-4" icon-scale=".8" v-else></ev-icon>
                </div>

                <h5 class="ev-blue font">name</h5>

                <div class="icon-container ev-center" @click="sort_ = !sort_">
                    <ev-icon icon-name="sort-alpha-up" icon-color="ev-blue" v-if="sort_"></ev-icon>

                    <ev-icon icon-name="sort-alpha-up" icon-color="neutral-grey-4" v-else></ev-icon>
                </div>
            </div>

            <div class="ev-col-1">
                <h5 class="ev-blue font">type</h5>
            </div>

            <div class="ev-col-1">
                <h5 class="ev-blue font">comment</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";

    export default {
        name: "java-viewer-title",
        components: {EvColGutter8Px, EvIcon},
        created() {
            this.expand_ = this.defaultExpand
        },
        props: {
            defaultExpand : {type: Boolean, default: false}
        },
        data() {
            return {
                expand_: false,

                sort_: false,
            }
        },
        watch: {
            expand_() {
                this.$emit('toggle-expand')
            },
            sort_() {
                this.$emit('toggle-sort')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .java-viewer-title {
        height: 32px;
    }

    .icon-container {
        height: 32px;

        width: 24px;

        display: flex;

        align-items: center;
    }

    .icon-container:hover {
        cursor: pointer;
    }

    .font {
        line-height: 32px;
    }

    .xxx {
        height: 32px;

        border-bottom: 1px solid $EVALON_ROYAL_BLUE_2;

        flex: 1;

        align-items: center;
    }
</style>
