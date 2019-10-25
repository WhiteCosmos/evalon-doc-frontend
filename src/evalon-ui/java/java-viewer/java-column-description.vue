<template>
    <div class="java-column" :class="columnOnHoverClass">
        <ev-column>{{ fieldComment || "/" }}</ev-column>

        <ev-col-gutter-4-px></ev-col-gutter-4-px>
    </div>
</template>

<script>
    import ClassFieldMixin from "@/evalon-ui/java/java-viewer/ClassFieldMixin";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    import EvColumn from "@/evalon-ui/typography/ev-column";

    export default {
        name: "java-column-description",
        components: {EvColumn, EvColGutter4Px, EvOption1},
        mixins: [
            ClassFieldMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "./java-viewer";

</style>
