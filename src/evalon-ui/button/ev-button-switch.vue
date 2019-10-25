<template>
    <div class="root ev-row">
        <div class="first-button ev-col-1 ev-center" :class="firstButtonStyle" @click="toggle(firstButtonLabel)">
            <h6 class="font" :class="firstFontStyle">{{ firstButtonName }}</h6>
        </div>
        <div class="second-button ev-col-1 ev-center" :class="secondButtonStyle" @click="toggle(secondButtonLabel)">
            <h6 class="font" :class="secondFontStyle">{{ secondButtonName }}</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ev-button-switch",
        props: {
            firstButtonName: {type: String},

            firstButtonLabel: {type: String},

            secondButtonName: {type: String},

            secondButtonLabel: {type: String},
        },
        data() {
            return {
                currentLabel: this.firstButtonLabel
            }
        },
        computed: {
            isFirstButton() {
                return this.currentLabel === this.firstButtonLabel
            },
            isSecondButton() {
                return this.currentLabel === this.secondButtonLabel
            },
            firstButtonStyle() {
                return {
                    "first-button-selected": this.isFirstButton
                }
            },
            secondButtonStyle() {
                return {
                    "second-button-selected": this.isSecondButton,
                }
            },
            firstFontStyle() {
                return {
                    "font-selected": this.isFirstButton
                }
            },
            secondFontStyle() {
                return {
                    "font-selected": this.isSecondButton,
                }
            },
        },
        methods: {
            toggle(label) {
                this.currentLabel = label
            }
        },
        watch: {
            currentLabel(newValue) {
                this.$emit('switch', newValue)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .root {
        width: 276px;

        transition: all .12s;
    }

    .root:hover {
        cursor: pointer;
    }

    .first-button {
        @include ev-border-without-right($NEUTRAL_GREY_5, 8px);

        height: 32px;

        transition: all .12s;

        border-right: 1px solid $EVALON_ROYAL_BLUE_5;
    }

    .second-button {
        @include ev-border-without-left($NEUTRAL_GREY_5, 5px);

        height: 32px;

        transition: all .12s;
    }

    .font {
        color: $EVALON_FONT_COLOR_VERY_LIGHT;
    }

    .first-button-selected {
        @include ev-border-without-right($EVALON_ROYAL_BLUE_5, 5px);
    }

    .second-button-selected {
        @include ev-border-without-left($EVALON_ROYAL_BLUE_5, 5px);
    }

    .font-selected {
        color: $EVALON_ROYAL_BLUE_5;
    }
</style>
