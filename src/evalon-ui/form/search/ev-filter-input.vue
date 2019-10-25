<template>
    <div class="ev-filter-input">
        <input
            ref="input"
            type="text"
            class="ev-selector-input"
            :placeholder="placeholder"
            @keyup.esc="escHandler"
            @keyup.enter="enterHandler"
            @click="clickHandler"
            v-model="value_">
    </div>
</template>

<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-filter-input",
        created() {
            this.registry([
                {
                    name: this.BEFORE_INPUT,

                    before: this.beforeInputHandler
                },
                {
                    name: this.INPUTTING,

                    before: this.onInputtingHandler
                },
            ])
        },
        mounted() {

        },
        model: {
            prop: "value",

            event: "change"
        },
        props: {
            // Data

            defaultValue: {type: String},

            value: {type: String},

            placeholder: {type: String},

            // Handler


        },
        data() {
            return {
                value_: "",

                BEFORE_INPUT: "BEFORE_INPUT",

                INPUTTING: "INPUTTING",
            }
        },
        methods: {
            escHandler() {
                this.to(this.BEFORE_INPUT)
            },

            clickHandler() {
                this.to(this.INPUTTING)
            },

            beforeInputHandler() {
                this.value_ = this.defaultValue

                this.$emit('change', "") // 清空搜索值
            },

            onInputtingHandler() {
                this.$refs.input.focus()

                this.$refs.input.select()
            }
        },
        watch: {
            value_(newValue, oldValue) {
                if (this.is(this.INPUTTING)) {
                    this.$emit('change', newValue)
                }
            },
            defaultValue(newValue, oldValue) {
                this.to(this.BEFORE_INPUT)
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";


    .ev-filter-input {
        display: flex;

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
