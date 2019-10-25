<template>
    <div class="ev-tree-parent ev-col ev-no-select" @mouseleave="doHover(undefined)">
        <div class="ev-tree-parent-container ev-row ev-col-center" @click="toggleExpand" :class="parentClass">
            <ev-icon icon-name="angle-right"
                     icon-color="neutral-grey-5"
                     :icon-scale=0.8
                     :rotate="isExpand_ || hasMatchedResults"></ev-icon>

            <ev-col-gutter-s></ev-col-gutter-s>

            <div class="parent-head-row ev-col">
                <span class="parent-head-key-class" :class="headKeyClass">{{ parentHeadValue }}</span>

                <span v-if="parentSubheadKey" class="parent-subhead-key-class" :class="headKeyClass">{{ parentSubheadValue }}</span>
            </div>
        </div>

        <ev-tree-child
            v-show="isExpand_"
            v-for="(child, idx) in children"
            :key="idx"
            :is-selected="isSelected(child)"
            :is-hovered="isHovered(child)"
            :child="child"
            :child-head-key="childHeadKey"
            :child-subhead-key="childSubheadKey"
            :filter-keyword="filterKeyword"
            :filter-content="child[childHeadKey]"
            :default-camel-match="false"
            @camel-match="camelMatch"
            @mouseenter.native="doHover(child)"
            @click.native="doSelect(child)"></ev-tree-child>
    </div>
</template>

<script>
    import EvTreeChild from "@/evalon-ui/data/ev-tree-child";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvCamelFilterMixin from "@/evalon-ui/mixin/EvCamelFilterMixin";

    export default {
        name: "ev-tree-parent",
        props: {
            parent: {
                type: Object,
            },

            filterKeyword: {
                type: String,
            },

            childrenKey: {
                type: String,
            },

            defaultSelectedChild: {
                type: Object,
            },

            currentSelectedChild: {
                type: Object,
                default: undefined,
            },

            parentHeadKey: {
                type: String,
            },

            parentSubheadKey: {
                type: String,
            },

            childHeadKey: {
                type: String,
            },

            childSubheadKey: {
                type: String,
            },

            isExpand: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                currentHoveredChild: undefined,

                isExpand_: false,

                hasMatchedResults: false,
            }
        },
        computed: {
            children() {
                return this.parent[this.childrenKey]
            },
            parentHeadValue() {
                return this.parent[this.parentHeadKey]
            },
            parentSubheadValue() {
                if (!this.parentSubheadKey) {
                    return "/"
                }

                let value = this.parent[this.parentSubheadKey]

                return value || "/"
            },
            parentClass() {
                return {
                    'ev-tree-parent-height-large': this.parentSubheadKey,
                    'ev-tree-parent-height-small': !this.parentSubheadKey
                }
            },
            headKeyClass() {
                return {
                    'parent-head-key-expand': this.isExpand_
                }
            },
            textClass() {
                return {
                    'ev-tree-parent-expand': this.isExpand_
                }
            },
            iconColor() {
                return {}
            }
        },
        methods: {
            toggleExpand() {
                this.isExpand_ = !this.isExpand_
            },
            doHover(child) {
                this.currentHoveredChild = child
            },
            doSelect(child) {
                this.$emit('select', {
                    parent: this.parent,
                    child: child
                })
            },
            isSelected(child) {
                return child === this.currentSelectedChild
            },
            isHovered(child) {
                return child === this.currentHoveredChild
            },
            camelMatch() {
                this.hasMatchedResults = true
            }
        },
        watch: {
            parent() {
                this.isExpand_ = false // reset expand after change

                this.hasMatchedResults = false
            },
            filterKeyword(newVal) {
                if (!newVal) {
                    this.hasMatchedResults = false
                }
            }
        },
        components: {EvColGutterS, EvColGutterM, EvIcon, EvTreeChild},
        mixins: [
            EvCamelFilterMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-tree-parent-container {
        padding-left: 8px;
    }

    .ev-tree-parent-height-large {
        height: 56px;
    }

    .ev-tree-parent-height-small {
        height: 40px;
    }


    .ev-tree-parent-container {
        cursor: pointer;
    }

    .ev-tree-parent-expand {
        color: $EVALON_BLUE;
    }

    .parent-head-key-class {
        font-size: 14px;

        line-height: 24px;

        font-weight: bolder;

        color: $EVALON_FONT_COLOR;
    }

    .parent-head-key-expand {
        color: $EVALON_BLUE;
    }

    .parent-subhead-key-class {
        font-size: 12px;

        line-height: 24px;

        font-weight: normal;

        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .parent-head-row {

    }

    .parent-subhead-row {

    }
</style>
