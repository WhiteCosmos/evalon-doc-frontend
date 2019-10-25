<template>
    <div class="java-viewer">
        <java-viewer-title v-on:toggle-expand="expand_ = !expand_" v-on:toggle-sort="sort_ = !sort_"
                           :default-expand="defaultExpand"></java-viewer-title>

        <div v-for="(javaField, index) in javaFields" :key="index" class="ev-col">
            <java-field-object :java-field="javaField"
                               :expand="expand_"
                               :is-response="isResponse"
                               v-if="isContainer(javaField)"></java-field-object>

            <java-field-primitive :java-field="javaField"
                                  :expand="expand_"
                                  :is-response="isResponse"
                                  v-else></java-field-primitive>
        </div>
    </div>
</template>

<script>
    import JavaViewerMixin from "@/evalon-ui/java/java-viewer/JavaViewerMixin";
    import JavaViewerTitle from "@/evalon-ui/java/java-viewer/java-viewer-title";
    import JavaFieldPrimitive from "@/evalon-ui/java/java-viewer/java-field-primitive";
    import JavaFieldObject from "@/evalon-ui/java/java-viewer/java-field-object";

    export default {
        name: "java-viewer",
        created() {
            this.expand_ = this.defaultExpand // init expand
        },
        props: {
            javaFields: {
                type: Array,
                default: () => {
                    return []
                }
            },

            defaultExpand: {type: Boolean, default: false},

            isResponse: {type: Boolean, default: false}
        },
        data() {
            return {
                expand_: false,

                sort_: false
            }
        },
        watch: {
            javaFields() {
                this.expand_ = this.defaultExpand // reset expand
            }
        },
        components: {JavaFieldObject, JavaFieldPrimitive, JavaViewerTitle},
        mixins: [
            JavaViewerMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";
</style>
