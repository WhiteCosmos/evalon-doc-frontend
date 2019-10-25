<template>
    <ev-modal :cancel-handler="onCancel">
        <ev-title>abc-service-descriptor</ev-title>

        <ev-row-gutter-l></ev-row-gutter-l>

        <ev-search
            placeholder="搜索 App Id ..."
            :options-provider="searchApplications"
            option-head-key="appName"
            :select-callback="onSelectApp"></ev-search>

        <ev-row-gutter-l></ev-row-gutter-l>
    </ev-modal>
</template>

<script>
    import EvModal from "@/evalon-ui/modal/ev-modal";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvSearch from "@/evalon-ui/form/search/ev-search";
    import EvButton from "@/evalon-ui/button/EvButton";
    import EvRowGutterMax from "@/evalon-ui/layout/ev-row-gutter-max";
    import EvTextButton from "@/evalon-ui/button/ev-text-button";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvTitle from "@/evalon-ui/typography/ev-title";
    import EvalonDocApiMixin from "@/api/EvalonDocApiMixin";

    export default {
        name: "EvalonDocumataModuleConfiguration",
        methods: {
            onSelectApp(app) {
                this.$emit('select', app)
            },
            onCancel() {
                this.$emit('select')
            }
        },
        components: {EvTitle, EvRowGutterL, EvTextButton, EvRowGutterMax, EvButton, EvSearch, EvRowGutterM, EvModal},
        mixins: [
            EvalonDocApiMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
