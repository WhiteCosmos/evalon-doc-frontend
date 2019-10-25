<template>
    <div class="evalon-service-list">
        <ev-tree
            :nodes="documentTree"
            :filter-keyword="filterKeyword"
            parent-head-key="serviceName"
            parent-subhead-key="commentTitle"
            children-key="methods"
            child-head-key="methodName"
            child-subhead-key="commentTitle"
            @select="doSelect"></ev-tree>
    </div>
</template>

<script>
    import EvPlaceholder from "@/evalon-ui/form/basic/EvPlaceholder";
    import EvTree from "@/evalon-ui/data/ev-tree";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";

    export default {
        name: "EvalonServiceList",
        mounted() {

        },
        props: {
            filterKeyword: {
                type: String,
            }
        },
        computed: {
            documentTree() {
                return this.$store.state.documata.documentTree
            }
        },
        methods: {
            doSelect(option) {
                let parent = option.parent

                let child = option.child

                let serviceQualifiedName = parent.serviceQualifiedName

                let methodName = child.methodName

                this.switchApi(serviceQualifiedName, methodName)
            }
        },
        components: {EvTree, EvPlaceholder},
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    .evalon-service-list {
        display: block;

        overflow-y: auto;

        height: 640px;
    }
</style>
