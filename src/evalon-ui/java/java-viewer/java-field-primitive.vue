<template>
    <div class="ev-row" @mouseenter="hover_ = true" @mouseleave="hover_ = false">
        <java-column-name :java-field="javaField" :layer="layer" :is-hover="hover_" :is-response="isResponse"></java-column-name>

        <java-column-type :java-field="javaField" :is-hover="hover_" :is-response="isResponse"></java-column-type>

        <java-column-description :java-field="javaField" :is-hover="hover_"></java-column-description>
    </div>
</template>

<script>
    import JavaColumnName from "@/evalon-ui/java/java-viewer/java-column-name";
    import JavaColumnType from "@/evalon-ui/java/java-viewer/java-column-type";
    import JavaColumnDescription from "@/evalon-ui/java/java-viewer/java-column-description";
    import EvColGutter from "@/evalon-ui/layout/ev-col-gutter";
    import ClassFieldMixin from "@/evalon-ui/java/java-viewer/ClassFieldMixin";

    export default {
        name: "java-field-primitive",
        components: {EvColGutter, JavaColumnDescription, JavaColumnType, JavaColumnName},
        mixins: [
            ClassFieldMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";
</style>
