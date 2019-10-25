<template>
    <div class="evalon-document-api ev-col">
        <ev-collapse title="Parameters" :can-expand="false">
            <template v-slot:button v-if="parameters && parameters.length !== 0">
                <ev-copy-button :content="parametersAsJson" before-copy-title="复制代码"
                                after-copy-title="已复制"></ev-copy-button>
            </template>

            <java-viewer v-if="parameters"
                         :java-fields="parameters"
                         :default-expand="true"></java-viewer>

            <ev-placeholder v-if="!parameters || parameters.length === 0">该接口没有请求参数。</ev-placeholder>
        </ev-collapse>

        <ev-row-gutter-32-px></ev-row-gutter-32-px>

        <ev-collapse title="Response" :can-expand="false">
            <template v-slot:button v-if="response && response.length !== 0">
                <ev-copy-button :content="responseAsJson" before-copy-title="复制代码"
                                after-copy-title="已复制"></ev-copy-button>
            </template>

            <java-viewer v-if="response"
                         :java-fields="response"
                         :is-response="true"
                         :default-expand="true"></java-viewer>

            <ev-placeholder v-if="!response || response.length === 0">该接口没有响应参数。</ev-placeholder>
        </ev-collapse>

        <ev-row-gutter-32-px></ev-row-gutter-32-px>

        <ev-collapse title="Exceptions" :can-expand="false" v-if="exceptions.length !== 0">
            <java-viewer :java-fields="exceptions"></java-viewer>
        </ev-collapse>

        <ev-row-gutter-32-px></ev-row-gutter-32-px>
    </div>
</template>

<script>
    import EvRowGutter32Px from "@/evalon-ui/layout/ev-row-gutter-32-px";
    import EvCollapse from "@/evalon-ui/collapse/ev-collapse";
    import JavaViewer from "@/evalon-ui/java/java-viewer/java-viewer";
    import EvTextButton from "@/evalon-ui/button/ev-text-button";
    import EvCopyButton from "@/evalon-ui/button/ev-copy-button";
    import EvPlaceholder from "@/evalon-ui/form/basic/EvPlaceholder";

    export default {
        name: "EvalonDocumataViewApi",
        computed: {
            parameters() {
                return this.$store.state.documata.documentContent.parameters
            },
            response() {
                return this.$store.state.documata.documentContent.response
            },
            exceptions() {
                return this.$store.state.documata.documentContent.exceptions
            },
            parametersAsJson() {
                return this.$store.state.documata.documentContent.parametersAsJson
            },
            responseAsJson() {
                return this.$store.state.documata.documentContent.responseAsJson
            }
        },
        components: {EvPlaceholder, EvCopyButton, EvTextButton, JavaViewer, EvCollapse, EvRowGutter32Px}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
