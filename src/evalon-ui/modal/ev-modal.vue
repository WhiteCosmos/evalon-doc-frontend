<template>
    <transition name="fade">
        <!--  直接使用居中有问题 -->
        <div class="ev-modal ev-row-center">
            <div class="ev-modal-container ev-col" :style="EvComponentStyle">
                <slot></slot>
            </div>

            <EvMask @click.native="cancelHandler"></EvMask>
        </div>
    </transition>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvMask from "@/evalon-ui/modal/EvMask";

    export default {
        name: "ev-modal",
        props: {
            cancelHandler: {
                type: Function,
            }
        },
        methods: {
            cancelModal() {
                this.$emit('cancel')
            }
        },
        components: {EvMask},
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-modal {
        position: fixed;

        top: 0;

        bottom: 0;

        left: 0;

        right: 0;

        z-index: 200;
    }

    .ev-modal-container {
        position: absolute;

        bottom: calc(100vh * (0.5));

        width: 640px;

        background-color: white;

        @include ev-shadow(20px);

        @include ev-padding(16px, 24px);

        border-radius: 5px;

        z-index: 201;

        //@include ev-border($EVALON_BLUE_LIGHT, $BORDER_RADIUS_S)
    }
</style>
