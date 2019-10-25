<template>
    <div class="ev-panel-button ev-center ev-no-select" :style="EvComponentStyle" :class="buttonClassGroup">
        <h6 :class="textClassGroup">
            <slot></slot>
        </h6>
    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-panel-button",
        props: {
            active: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {}
        },
        computed: {
            textClassGroup() {
                return {
                    'text-active': this.active,
                    'text-not-active': !this.active,
                }
            },
            buttonClassGroup() {
                return {
                    'button-active': this.active,
                    'button-not-active': !this.active,
                }
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-panel-button {
        width: 64px;

        height: 40px;

        margin-right: 16px;

        //@include ev-margin-lr(16px, 16px);

        transition: all .12s;
    }

    .ev-panel-button:hover {
        cursor: pointer;
    }

    .text-active {
        color: $EVALON_BLUE;
    }

    .text-not-active {
        color: $EVALON_FONT_COLOR_VERY_LIGHT;
    }

    .button-active {
        border-bottom: 2px solid $EVALON_BLUE;
    }

    .button-not-active {
        border-bottom: 2px solid transparent;
    }
</style>
