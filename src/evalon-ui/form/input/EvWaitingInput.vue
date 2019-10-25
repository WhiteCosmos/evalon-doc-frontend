<template>
    <div class="ev-row ev-waiting-input">
        <input type="text"
               class="ev-default-input"
               :placeholder="placeholder"
               v-model="value"
               :disabled="isLocked"
               @keydown="onInputting">

        <EvDotLoading v-show="isInputting"></EvDotLoading>
    </div>
</template>

<script>
    import EvFiniteStatusMachineMixin from "@/evalon-ui/mixin/EvFSMixin";
    import EvInputMixin from "@/evalon-ui/form/input/EvInputMixin";
    import EvDotLoading from "@/evalon-ui/loading/EvDotLoading";

    export default {
        name: "",
        components: {EvDotLoading},
        props: {
            isLocked: {type: Boolean, default: false},

            placeholder: {type: String, default: "请输入"},

            afterInputtingHandler: {type: Function}
        },
        data() {
            return {
                value: "",
            }
        },
        watch: {
            inputting(newVal, oldVal) {
                !newVal && this.afterInputtingHandler(value)
            }
        },
        mixins: [
            EvInputMixin,

            EvFiniteStatusMachineMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

</style>
