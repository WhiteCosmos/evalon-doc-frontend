<!-- List是单层的，可选择的列表 -->

<template>
    <div class="ev-list ev-col ev-width-max ev-no-select" @mouseleave="toggleHovered(undefined)">
        <ev-list-item
            v-for="(item, idx) in items"
            :key="idx"
            :item="item"
            :item-head-key="itemHeadKey"
            :item-subhead-key="itemSubheadKey"
            :filter-keyword="filterKeyword"
            :filter-content="item[itemHeadKey]"
            :is-selected="isItemSelected(item)"
            :is-hovered="isItemHovered(item)"
            @mouseenter.native="toggleHovered(item)"
            @click.native="doSelect(item)"></ev-list-item>
    </div>
</template>

<script>
    import EvListItem from "@/evalon-ui/data/ev-list-item";
    import EvListMixin from "@/evalon-ui/data/EvListMixin";

    export default {
        name: "ev-list",
        props: {
            filterKeyword: {type: String}
        },
        methods: {
            doSelect(item) {
                this.currentSelectedItem = item

                this.$emit('select', item)
            },
            toggleHovered(item) {
                this.currentHoveredItem = item
            },
        },
        components: {EvListItem},
        mixins: [
            EvListMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-list {

    }
</style>
