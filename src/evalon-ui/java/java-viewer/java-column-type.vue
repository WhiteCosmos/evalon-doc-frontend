<template>
    <div class="java-column" :class="columnOnHoverClass">
        <ev-column :color="columnColor">{{ fieldType }}</ev-column>

        <ev-col-gutter-4-px></ev-col-gutter-4-px>
    </div>
</template>

<script>
    import ClassFieldMixin from "@/evalon-ui/java/java-viewer/ClassFieldMixin";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    import EvColumn from "@/evalon-ui/typography/ev-column";

    export default {
        name: "java-column-type",
        components: {EvColumn, EvColGutter4Px, EvOption1},
        computed: {
            columnColor() {
                if (this.isContainerType) {
                    return "#4A90E2"
                }

                if (this.isStringType) {
                    return "#87b35b"
                }

                if (this.isNumberType) {
                    return "#f3d23e"
                }

                if (this.isDateTimeType) {
                    return "#8f70cc"
                }

                if (this.isBooleanType) {
                    return "#FF8282"
                }
            }
        },
        mixins: [
            ClassFieldMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "./java-viewer";

    .container-type {
        color: $EVALON_BLUE,
    }

    .string-type {
        color: $EVALON_GREEN,
    }

    .number-type {
        color: $EVALON_YELLOW,
    }

    .datetime-type {
        color: $EVALON_PURPLE,
    }

    .enumeration-type {
        color: $EVALON_BLUE,
    }

    .boolean-type {
        color: $EVALON_RED,
    }
</style>
