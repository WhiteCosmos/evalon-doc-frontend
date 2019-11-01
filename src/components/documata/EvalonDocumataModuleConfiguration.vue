<template>
    <ev-modal :cancel-handler="onCancel">
        <ev-title>{{ module.moduleName }}</ev-title>

        <ev-row-gutter-l></ev-row-gutter-l>

        {{ appId }}

        <ev-input :auto-focus="true" v-model="appId" placeholder="请输入AppId..."></ev-input>

        <ev-row-gutter-l></ev-row-gutter-l>

        <ev-round-button @click.native="confirm">确认</ev-round-button>
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
    import EvInput from "@/evalon-ui/form/input/ev-input";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";

    export default {
        name: "EvalonDocumataModuleConfiguration",
        props: {
            module: {type: Object}
        },
        data() {
            return {
                appId: ""
            }
        },
        methods: {
            onCancel() {
                this.$emit('confirm', undefined)
            },
            confirm() {
                this.$emit('confirm', this.appId)
            },
        },
        components: {
            EvRoundButton,
            EvInput,
            EvTitle, EvRowGutterL, EvTextButton, EvRowGutterMax, EvButton, EvSearch, EvRowGutterM, EvModal
        },
        mixins: [
            EvalonDocApiMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
