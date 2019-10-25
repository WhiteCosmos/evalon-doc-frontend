<template>
    <div class="ev-row ev-col-center" @click="doClick">
        <button class="ev-button ev-no-outline ev-no-select ev-cursor-pointer" :class="styleGroup">
            <slot></slot>
        </button>

        <ev-col-gutter-s v-if="showLabel"></ev-col-gutter-s>

        <h6 v-if="showLabel" :class="labelGroup">{{ label }}</h6>

        <h6 v-if="hasError" class="ev-red">{{ errorMessage }}</h6>
    </div>
</template>

<script>
    import EvButtonMixin from "@/evalon-ui/button/EvButtonMixin";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import {choose_color} from "@/evalon-ui/basic/ev-palette";
    import {EV_BUTTON_DISABLE} from "@/evalon-ui/button/EvButtonStatus";

    export default {
        name: "EvButton",
        components: {EvColGutterS},
        props: {
            showLabel: {type: Boolean, default: false},

            label: {type: String},

            labelColor: {type: String, default: "blue"}
        },
        computed: {
            isDefaultButton() {

            },
            isTextButton() {

            },
            rotateGroup() {
                return {
                    'ev-button-blue': this.color === "blue",
                    'ev-button-red': this.color === "red",
                    'ev-button-green': this.color === "green",
                    'ev-button-disable': this.status === EV_BUTTON_DISABLE
                }
            },
            labelGroup() {
                return choose_color(this.labelColor)
            }
        },
        mixins: [
            EvButtonMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-button {
        width: 72px;

        height: 32px;

        @include ev-border($EVALON_BLUE_LIGHT, $BORDER_RADIUS_S);

        font-size: 12px;

        font-weight: normal;

        color: $EVALON_BLUE;

        @include ev-transition("border", .22s);
    }

    .ev-button:hover {
        @include ev-border($EVALON_BLUE, $BORDER_RADIUS_S);

        @include ev-transition("border", .22s);
    }

    .ev-button-disable {
        background-color: $EVALON_GREY_LIGHT;

        color: $EVALON_GREY_REGULAR;

        cursor: not-allowed;

        @include ev-border($EVALON_GREY_REGULAR, $BORDER_RADIUS_S)
    }

    .ev-button-s {

    }

    .ev-button-m {

    }

    .ev-button-l {

    }

    .ev-button-blue {

    }

    .ev-button-red {

    }
</style>
