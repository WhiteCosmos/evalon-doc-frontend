<template>
    <div class="ev-col ev-scroll-y ev-width-max">
        <slot></slot>

        <ev-col-gutter-s></ev-col-gutter-s>
    </div>
</template>

<script>
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    export default {
        name: "ev-scroll-y",
        components: {EvColGutterS},
        props: {
            height: {
                type: Number,
                default: 256
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-scroll-y {
        overflow-y: scroll;
    }
</style>
