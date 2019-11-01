<template>
    <div class="ev-col">
        <div class="ev-row" @click="expand_ = !expand_" @mouseenter="hover_ = true" @mouseleave="hover_ = false">
            <java-column-name :java-field="javaField"
                              :layer="layer"
                              :show-arrow="true"
                              :is-hover="hover_"
                              :is-response="isResponse"
                              :expand="expand_"></java-column-name>

            <java-column-type :java-field="javaField" :is-hover="hover_" :is-response="isResponse"></java-column-type>

            <java-column-description :java-field="javaField" :is-hover="hover_"></java-column-description>
        </div>

        <div v-for="(field, index) in javaField.fields" :key="index" v-show="expand_">
            <java-field-object :java-field="field" :layer="layer + 1"
                               :expand="expand"
                               v-if="isContainer(field)"></java-field-object>

            <java-field-primitive :java-field="field" :layer="layer + 1"
                                  v-else></java-field-primitive>
        </div>
    </div>
</template>

<script>
    import JavaColumnDescription from "@/evalon-ui/java/java-viewer/java-column-description";
    import JavaColumnType from "@/evalon-ui/java/java-viewer/java-column-type";
    import JavaColumnName from "@/evalon-ui/java/java-viewer/java-column-name";
    import JavaFieldPrimitive from "@/evalon-ui/java/java-viewer/java-field-primitive";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import ClassFieldMixin from "@/evalon-ui/java/java-viewer/ClassFieldMixin";
    import EvColGutter from "@/evalon-ui/layout/ev-col-gutter";
    import EvColGutter24Px from "@/evalon-ui/layout/ev-col-gutter-24-px";

    export default {
        name: "java-field-object",
        components: {
            EvColGutter24Px,
            EvColGutter, EvIcon, JavaFieldPrimitive, JavaColumnName, JavaColumnType, JavaColumnDescription
        },
        mixins: [
            ClassFieldMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .icon-container {
        width: 24px;

        height: 32px;
    }
</style>
