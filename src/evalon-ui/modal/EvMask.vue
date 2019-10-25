<template>
    <div class="ev-mask ev-bottom-layer">

    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvMask",
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-mask {
        position: fixed;

        top: 0;

        bottom: 0;

        left: 0;

        right: 0;

        background-color: rgba(255, 255, 255, .9);
    }
</style>
