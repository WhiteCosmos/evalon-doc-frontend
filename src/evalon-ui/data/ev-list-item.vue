<template>
    <div class="ev-col ev-list-item" :class="itemClass" v-show="isCamelMatch">
        <span :class="headKeyClass" class="highlight-block" v-html="highlightContent" v-if="highlightContent"></span>

        <span :class="headKeyClass" class="ev-text-ellipsis" v-else>{{ item[itemHeadKey] }}</span>

        <ev-row-gutter-s></ev-row-gutter-s>

        <span :class="subheadKeyClass" class="ev-text-ellipsis">{{ item[itemSubheadKey] || "/" }}</span>
    </div>
</template>

<script>
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvCamelFilterMixin from "@/evalon-ui/mixin/EvCamelFilterMixin";

    export default {
        name: "ev-list-item",
        components: {EvRowGutterS},
        props: {
            item: {
                type: Object,
                default: () => {
                    return {}
                }
            },

            itemHeadKey: {
                type: String,
            },

            itemSubheadKey: {
                type: String,
            },

            isSelected: {
                type: Boolean,
                default: false
            },

            isHovered: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            itemClass() {
                return {
                    'ev-list-item-selected': this.isSelected,
                    'ev-list-item-hovered': this.isHovered,
                }
            },
            headKeyClass() {
                return {
                    'item-head-key': !this.isSelected,
                    'item-head-key-selected': this.isSelected || this.isHovered,
                }
            },
            subheadKeyClass() {
                return {
                    'item-subhead-key': !this.isSelected,
                    'item-subhead-key-selected': this.isSelected || this.isHovered,
                }
            },
        },
        mixins: [
            EvCamelFilterMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-list-item {
        height: 56px;

        transition: all 96ms;

        border-right: 3px solid transparent;
    }

    .highlight-block /deep/ .highlight {
        background-color: $EVALON_YELLOW;

        color: black;

        border-radius: 2px;
    }

    .ev-list-item-selected {
        background-color: $EVALON_GREY_LEVEL_1;


    }

    .ev-list-item-hovered {
        background-color: $EVALON_GREY_LEVEL_1;
    }

    .ev-list-item:hover {
        cursor: pointer;
    }

    .item-head-key {
        font-size: 15px;

        line-height: 28px;

        font-weight: bolder;

        text-indent: 16px;

        color: $EVALON_FONT_COLOR;
    }

    .item-subhead-key {
        font-size: 12px;

        line-height: 24px;

        font-weight: normal;

        text-indent: 16px;

        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .item-head-key-selected {
        font-size: 15px;

        line-height: 28px;

        font-weight: bolder;

        text-indent: 16px;

        color: $EVALON_BLUE;
    }

    .item-subhead-key-selected {
        font-size: 12px;

        line-height: 24px;

        font-weight: normal;

        text-indent: 16px;

        color: $EVALON_BLUE;
    }
</style>
