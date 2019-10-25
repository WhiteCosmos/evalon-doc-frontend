<template>
    <div class="ev-input">
        <input
            ref="input"
            type="text"
            class="ev-selector-input"
            :placeholder="placeholder"
            @keyup.esc="escHandler"
            @keyup.enter="enterHandler"
            @click="clickHandler_"
            v-model="value_">
    </div>
</template>

<script>
    export default {
        name: "ev-input",
        mounted() {
            if (this.defaultValue) {
                this.value_ = this.defaultValue
            }

            if (this.autoFocus) {
                this.$refs.input.focus()
            }
        },
        model: {
            prop: "value",

            event: "change",
        },
        props: {
            // Data

            defaultValue: {type: String},

            value: {type: String},

            placeholder: {type: String},

            // Handler

            escHandler: {
                type: Function,
                default: () => {
                }
            },

            enterHandler: {
                type: Function,
                default: () => {
                }
            },

            clearHandler: {
                type: Function,
                default: () => {
                }
            },

            clickHandler: {
                type: Function,
                default: () => {
                }
            },

            // Configuration

            autoFocus: {type: Boolean, default: false},

            selectAllOnClick: {type: Boolean, default: false},

            clearAllOnClick: {type: Boolean, default: false}
        },
        data() {
            return {
                value_: ""
            }
        },
        methods: {
            clickHandler_() {
                if (this.selectAllOnClick) {
                    this.$refs.input.select()
                }

                // if (this.clearAllOnClick) {
                //
                // }

                // this.clickHandler && this.clickHandler()
            }
        },
        watch: {
            value_(newValue, oldValue) {
                // if (oldValue && !newValue) {
                //     this.clearHandler && this.clearHandler()
                // }
                if (!oldValue && newValue) {
                    return
                }

                if (newValue) {
                    this.$emit('change', newValue);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-input {
        flex: 1;
    }

    .ev-selector-input {
        font-size: 12px;

        color: $EVALON_BLUE;

        outline: none;

        border: none;

        height: 32px;

        width: 100%;

        background-color: transparent;
    }
</style>
