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
        name: "ev-icon-button-only-icon",
        props: {
            iconName: {type: String},

            iconColor: {type: String},

            iconActiveColor: {type: String},

            active: {type: Boolean, default: false},
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
                    'active': this.active_,
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

    .ev-icon-button-holder {
        width: 36px;

        height: 36px;

        border-radius: 36px;
    }
</style>
