<template>
    <ev-page :padding-l="128" :padding-r="128">
        <ev-title>项目配置</ev-title>

        
    </ev-page>
</template>

<script>
    import EvPage from "@/evalon-ui/page/EvPage";
    import EvTitle from "@/evalon-ui/typography/ev-title";
    export default {
        name: "EvalonDocumataConfiguration",
        components: {EvTitle, EvPage},
        props: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .root {

    }
</style>
