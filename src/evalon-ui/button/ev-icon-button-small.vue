<template>
    <div class="ev-icon-button ev-center" @click="toggleActive" :style="EvComponentStyle">
        <div class="ev-icon-button-holder ev-center">
            <ev-icon :icon-name="iconName"
                     :icon-color="buttonColor"
                     icon-scale=0.9></ev-icon>
        </div>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-icon-button-small",
        props: {
            iconName: {type: String},

            iconColor: {type: String},

            iconActiveColor: {type: String},

            iconHoverColor: {type: String},

            active: {type: Boolean, default: false}
        },
        data() {
            return {
                iconColor: "ev-blue-light",

                iconActiveColor: "ev-blue",

                buttonColor: this.iconColor,

                active_: this.active,

                hover_: false,
            }
        },
        methods: {
            toggleActive() {
                this.active_ = !this.active_
            },
        },
        watch: {
            active_(newVal) {
                if (newVal) {
                    this.buttonColor = this.iconActiveColor
                } else {
                    this.buttonColor = this.iconColor
                }
            }
        },
        components: {EvIcon},
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-icon-button {
        @include ev-circle(24px);

        transition: all 120ms;
    }

    .ev-icon-button:hover {
        background-color: $EVALON_ROYAL_BLUE_0;

        cursor: pointer;
    }

    .ev-icon-button-holder {

    }
</style>
