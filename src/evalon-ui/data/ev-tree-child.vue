<template>
    <div class="ev-tree-child ev-row ev-col-center" :class="backgroundClass" v-show="isCamelMatch">
        <ev-col-gutter-m></ev-col-gutter-m>

        <ev-col-gutter-s></ev-col-gutter-s>

        <div class="ev-col">
            <span :class="headKeyClass" class="child-head-key-class highlight-block" v-html="highlightContent" v-if="isCamelMatch"></span>

            <span class="child-head-key-class" :class="headKeyClass" v-else>{{ childHeadValue }}</span>

            <span class="child-subhead-key-class" :class="subheadKeyClass">{{ childSubheadValue }}</span>
        </div>
    </div>
</template>

<script>
    import EvColGutterL from "@/evalon-ui/layout/ev-col-gutter-l";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvCamelFilterMixin from "@/evalon-ui/mixin/EvCamelFilterMixin";

    export default {
        name: "ev-tree-child",
        components: {EvColGutterS, EvColGutterM, EvColGutterL},
        props: {
            child: {
                type: Object,
            },

            childHeadKey: {
                type: String,
            },

            childSubheadKey: {
                type: String,
            },

            isSelected: {
                type: Boolean,
                default: false,
            },

            isHovered: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            childHeadValue() {
                return this.child[this.childHeadKey]
            },
            childSubheadValue() {
                if (!this.childSubheadKey) {
                    return "/"
                }

                let value = this.child[this.childSubheadKey]

                return value || "/"
            },
            backgroundClass() {
                return {
                    'ev-tree-child-hovered': this.isHovered,

                    'ev-tree-child-selected': this.isSelected
                }
            },
            headKeyClass() {
                return {
                    'child-head-key-selected': this.isSelected
                }
            },
            subheadKeyClass() {
                return {
                    'child-subhead-key-selected': this.isSelected
                }
            }
        },
        mixins: [
            EvCamelFilterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";


    .ev-tree-child {
        height: 56px;

        transition: all 96ms;

        padding-left: 16px;

        //border-left: 3px solid transparent;
    }

    .ev-tree-child:hover {
        cursor: pointer;
    }

    .highlight-block /deep/ .highlight {
        background-color: $EVALON_YELLOW;

        color: black;

        border-radius: 2px;
    }

    .ev-tree-child-hovered {
        background-color: $EVALON_GREY_LEVEL_1;
    }

    .ev-tree-child-selected {
        background: rgb(235,244,255);
        background: linear-gradient(90deg, rgba(235,244,255,1) 0%, rgba(245,245,245,1) 20%);
    }

    .ev-tree-child-key-selected {
        color: $EVALON_BLUE;
    }

    .child-head-key-class {
        font-size: 14px;

        line-height: 24px;

        font-weight: bolder;

        color: $EVALON_FONT_COLOR;
    }

    .child-head-key-selected {
        color: $EVALON_BLUE;
    }

    .child-subhead-key-class {
        font-size: 12px;

        line-height: 24px;

        font-weight: normal;

        color: $EVALON_FONT_COLOR;
    }

    .child-subhead-key-selected {
        color: $EVALON_BLUE;
    }
</style>
