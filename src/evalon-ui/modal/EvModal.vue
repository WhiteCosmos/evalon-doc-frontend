<template>
    <div class="ev-modal ev-center">
        <div class="ev-modal-container ev-top-layer" :style="EvSizeStyle">
            <slot></slot>
        </div>

        <EvMask :cancel-handler="cancelHandler" class="ev-middle-layer"></EvMask>
    </div>
</template>

<script>
    import EvMask from "@/evalon-ui/modal/EvMask";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvModal",
        components: {EvMask},
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-modal {
        @include ev-fixed
    }

    .ev-modal-container {
        background-color: white;

        @include ev-padding(32px, 72px);

        @include ev-border(transparent, $BORDER_RADIUS_S);

        @include ev-shadow(30px)
    }
</style>
