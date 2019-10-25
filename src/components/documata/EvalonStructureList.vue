<template>
    <div class="evalon-structure-list">
        <ev-list
            :items="structTree"
            :filter-keyword="filterKeyword"
            item-head-key="fieldName"
            item-subhead-key="fieldCommentTitle"
            @select="doSelect">
        </ev-list>
    </div>
</template>

<script>
    import EvPlaceholder from "@/evalon-ui/form/basic/EvPlaceholder";
    import EvList from "@/evalon-ui/data/ev-list";
    import EvScrollY from "@/evalon-ui/layout/ev-scroll-y";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";

    export default {
        name: "EvalonStructureList",
        props: {
            filterKeyword: {
                type: String,
            }
        },
        computed: {
            structTree() {
                return this.$store.state.documata.structTree
            },
            struct() {
                // return this.$store.state.documata.structContent
            }
        },
        methods: {
            doSelect(item) {
                this.switchStruct(item.fieldQualifyName)
            },
        },
        components: {EvScrollY, EvList, EvPlaceholder},
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    .evalon-structure-list {
        max-height: calc(100vh - 240px);

        overflow-y: scroll;
    }
</style>
