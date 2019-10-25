<template>
    <div class="ev-row ev-width-max">
        <EvalonDocumataSidebar></EvalonDocumataSidebar>

        <EvalonDocumataContent v-if="hasService"></EvalonDocumataContent>

        <EvalonDocumataStruct v-if="hasStruct"></EvalonDocumataStruct>

        <EvalonDocumataWelcome v-if="!hasService && !hasStruct"></EvalonDocumataWelcome>
    </div>
</template>

<script>
    import EvalonDocumataSidebar from "@/pages/documata/EvalonDocumataSidebar";
    import EvalonDocumataContent from "@/pages/documata/EvalonDocumataContent";
    import EvalonDocumataWelcome from "@/pages/documata/EvalonDocumataWelcome";
    import EvalonDocumataStruct from "@/pages/documata/EvalonDocumataStruct";

    export default {
        name: "EvalonDocumataHolder",
        computed: {
            hasService() {
                return this.$store.state.documata.documentContent !== undefined
            },
            hasStruct() {
                return this.$store.state.documata.structContent !== undefined
            }
        },
        components: {EvalonDocumataStruct, EvalonDocumataWelcome, EvalonDocumataContent, EvalonDocumataSidebar},
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
