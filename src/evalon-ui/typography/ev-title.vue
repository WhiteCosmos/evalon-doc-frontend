<template>
    <div class="ev-title ev-width-max" :style="EvComponentStyle" :class="EvComponentClass">
        <span class="ev-title-text">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-title",
        created() {
            this.addCSSStyle("text-align", this.textAlign)
        },
        props: {
            textAlign: {
                type: String,
                default: "left" // left center right
            },
            cancelHandler: {
                type: Function,
                default: () => {

                }
            }
        },
        mixins: [
            EvAbstractComponent,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-title {
        height: 40px;

        border-bottom: 1px solid $EVALON_GREY_LEVEL_1;
    }

    .ev-title-text {
        height: 24px;

        line-height: 24px;

        font-size: 14px;

        font-weight: bolder;

        color: $EVALON_BLUE;
    }
</style>
