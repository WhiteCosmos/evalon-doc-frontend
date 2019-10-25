<!-- Tree是最多两层的，可以展开的节点组合 -->

<template>
    <div class="ev-tree ev-width-max">
        <ev-tree-parent
            v-for="(parent, idx) in nodes"
            :key="idx"
            :parent="parent"
            :filter-keyword="filterKeyword"
            :current-selected-child="currentSelectedChild"
            :children-key="childrenKey"
            :parent-head-key="parentHeadKey"
            :parent-subhead-key="parentSubheadKey"
            :child-head-key="childHeadKey"
            :child-subhead-key="childSubheadKey"
            @select="doSelect"></ev-tree-parent>
    </div>
</template>

<script>
    import EvTreeMixin from "@/evalon-ui/data/EvTreeMixin";
    import EvTreeParent from "@/evalon-ui/data/ev-tree-parent";

    export default {
        name: "ev-tree",
        data() {
            return {
                currentSelectedChild: undefined // 同时只能选中一个对象
            }
        },
        methods: {
            doSelect(option) {
                this.currentSelectedChild = option.child

                this.$emit('select', option)
            }
        },
        components: {EvTreeParent},
        mixins: [
            EvTreeMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-tree {
        display: block;
    }
</style>
