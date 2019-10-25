<template>
    <div class="ev-col ev-search-item ev-row-center" @mouseover="to(HOVER)" @mouseleave="to(NOT_HOVER)">
        <h5 class="ev-blue ev-text-ellipsis">{{ itemFirstKey ? item[itemFirstKey] : item }}</h5>

        <h5 v-if="itemSecondKey" class="reference ev-text-ellipsis">{{ item[itemSecondKey] }}</h5>
    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvSearchItem",
        created() {
            this.registry([
                this.HOVER,
                this.CLICK,
                this.NOT_HOVER,
            ])
        },
        mounted() {
            this.to(this.NOT_HOVER)
        },
        props: {
            module: {type: Object},

            itemFirstKey: {type: String},

            itemSecondKey: {type: String},

            hoverHandler: {type: Function},

            clickHandler: {type: Function},

            notHoverHandler: {type: Function},
        },
        data() {
            return {
                HOVER: "hover",

                CLICK: "click",

                NOT_HOVER: "notHover",
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-search-item {
        height: 48px;

        padding-left: $SIZE_16_PX;

        @include ev-transition("background-color", .12s)
    }

    .ev-search-item:hover {
        background-color: $EVALON_BLUE_VERY_LIGHT;

        cursor: pointer;

        @include ev-transition("background-color", .12s)
    }
</style>

