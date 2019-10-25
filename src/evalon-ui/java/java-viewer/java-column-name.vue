<template>
    <div class="ev-row ev-col-1">
        <!--  缩进 -->
        <ev-col-gutter :gutter="16 * layer"></ev-col-gutter>

        <ev-col-gutter-24-px v-if="!showArrow"></ev-col-gutter-24-px>

        <div class="icon-container ev-center" v-if="showArrow">
            <ev-icon icon-name="angle-right" icon-color="neutral-grey-4" :icon-scale=0.8
                     :rotate="expand"></ev-icon>
        </div>

        <div class="ev-row indicator" v-bind:style="{left: n * 16 - 4 + 'px'}" v-for="n in layer"></div>

        <div class="java-column" :class="columnOnHoverClass">
            <ev-column :color="columnColor">{{ fieldName }}</ev-column>

            <ev-col-gutter-4-px></ev-col-gutter-4-px>
        </div>
    </div>
</template>

<script>
    import EvColGutter from "@/evalon-ui/layout/ev-col-gutter";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";
    import ClassFieldMixin from "@/evalon-ui/java/java-viewer/ClassFieldMixin";
    import EvColumn from "@/evalon-ui/typography/ev-column";
    import EvColGutter24Px from "@/evalon-ui/layout/ev-col-gutter-24-px";

    export default {
        name: "java-column-name",
        components: {EvColGutter24Px, EvColumn, EvColGutter4Px, EvOption1, EvIcon, EvColGutter},
        props: {
            isRequire: {type: Boolean, default: false},

            isExpand: {type: Boolean, default: false},

            isMapKey: {type: Boolean, default: false},

            isMapValue: {type: Boolean, default: false},

            showArrow: {type: Boolean, default: false},

            expand: {type: Boolean}

            // Style
        },
        computed: {
            columnColor() {
                let char = this.fieldName.charAt(0)

                let flag = (char.toUpperCase() === char)

                if (flag) {
                    return "#4A90E2"
                }
            }
        },
        mixins: [
            ClassFieldMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "./java-viewer";

    .icon-container {
        display: flex;

        width: 24px;

        height: 32px;
    }

    .indicator {
        position: absolute;
        width: 16px;
        height: 32px;
        border-left: 1px dotted $NEUTRAL_GREY_4;
    }
</style>
