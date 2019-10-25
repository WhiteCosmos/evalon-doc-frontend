<template>
    <div class="evalon-document-api ev-col">
        <ev-collapse title="Struct" :can-expand="false">
            <template v-slot:button>
                <ev-text-button text-class="copy-button">复制代码</ev-text-button>
            </template>

            <java-viewer :java-fields="structs" :default-expand="true"></java-viewer>
        </ev-collapse>
    </div>
</template>

<script>
    import EvRowGutter32Px from "@/evalon-ui/layout/ev-row-gutter-32-px";
    import EvCollapse from "@/evalon-ui/collapse/ev-collapse";
    import JavaViewer from "@/evalon-ui/java/java-viewer/java-viewer";
    import EvTextButton from "@/evalon-ui/button/ev-text-button";

    export default {
        name: "EvalonDocumataViewStruct",
        computed: {
            structs() {
                return this.$store.state.documata.structContent
            }
        },
        components: {EvTextButton, JavaViewer, EvCollapse, EvRowGutter32Px}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
