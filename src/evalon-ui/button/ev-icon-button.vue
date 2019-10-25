<template>
    <div class="ev-icon-button ev-center" @click="toggleActive">
        <div class="ev-icon-button-holder ev-center" :class="iconClasses">
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
        name: "ev-icon-button",
        props: {
            iconName: {type: String},

            iconColor: {type: String},

            iconActiveColor: {type: String},

            active: {type: Boolean, default: false},

            withoutBorder: {type: Boolean, default: false},
        },
        data() {
            return {
                iconColor: "ev-blue-light",

                iconActiveColor: "ev-blue",

                buttonColor: this.iconColor,

                active_: this.active,
            }
        },
        computed: {
            iconClasses() {
                return {
                    'active': this.active,
                    'ev-icon-button-border': !this.withoutBorder
                }
            }
        },
        methods: {
            toggleActive() {
                this.active_ = !this.active_
            }
        },
        watch: {
            active(newVal) {
                this.active_ = newVal

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
        width: 40px;

        height: 40px;

        transition: all 120ms;
    }

    .ev-icon-button:hover {
        cursor: pointer;
    }

    .ev-icon-button-border {
        @include ev-border($EVALON_BLUE_LIGHT, 40px);

        box-shadow: 0 6px 6px -6px $EVALON_BLUE_LIGHT;
    }

    .ev-icon-button-holder {
        width: 36px;

        height: 36px;

        border-radius: 36px;

        transition: all 120ms;
    }

    .ev-icon-button-holder:hover {
        background-color: $EVALON_BLUE_VERY_LIGHT;

        transition: all 120ms;
    }

    .active {
        //@include ev-border($EVALON_BLUE, 40px);

        background-color: $EVALON_BLUE_VERY_LIGHT;

        transition: all 120ms;
    }

</style>
