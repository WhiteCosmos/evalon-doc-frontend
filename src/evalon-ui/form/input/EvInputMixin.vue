<script>
    export default {
        name: "EvInputMixin",
        props: {
            isLocked: {
                type: Boolean,
                default: false
            },
            inputCheckDelay: {
                type: Number,
                default: 300,
            }
        },
        data() {
            return {
                isInputting: false,
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
        }
    }
</script>



