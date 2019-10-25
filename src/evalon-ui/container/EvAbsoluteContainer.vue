<template>
    <div class="ev-absolute-container">
        <slot></slot>

        <div class="ev-mask ev-bottom-layer" @click="doClick">

        </div>
    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvAbsoluteContainer",
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-absolute-container {
        position: absolute;

        z-index: 999;
    }
</style>
