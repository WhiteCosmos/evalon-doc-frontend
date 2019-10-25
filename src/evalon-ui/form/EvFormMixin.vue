<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvFormMixin",
        props: {
            inputtingCheckDelay: {
                type: Number,
                default: 300 // ms
            },

            isLocked: { // 是否处于锁定状态
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                isInputting: false, // 是否处于输入状态

                delayTimeoutId: 0
            }
        },
        methods: {
            onInputting() {
                this.isInputting = true

                if (this.delayTimeoutId) {
                    clearTimeout(this.delayTimeoutId)
                }

                this.timeoutId = setTimeout(() => {
                    this.isInputting = false
                }, this.inputtingCheckDelay);
            },
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>
