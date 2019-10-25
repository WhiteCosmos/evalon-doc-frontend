<!--
    即支持select也支持search的组件

    可以通过select-handler拉取默认选项
-->

<template>
    <div class="ev-search-selector">

    </div>
</template>

<script>
    import EvSearchMixin from "@/evalon-ui/form/search/EvSearchMixin";

    export default {
        name: "EvSearchSelector",
        created() {
            this.actions.beforeSearchAction = () => {
                console.log("this is before search action")
            }
        },
        props: {

        },
        data() {
            return {
                currentResults: []
            }
        },
        methods: {
        },
        mixins: [
            EvSearchMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-search-selector {
        width: 100%;

        height: 32px;

        background-color: grey;
    }
</style>
