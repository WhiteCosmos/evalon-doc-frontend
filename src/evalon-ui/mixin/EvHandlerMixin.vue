<script>
    export default {
        name: "EvHandlerMixin",
        props: {
            handler: {
                type: Function,
                default: () => {
                }
            }
        },
        data() {
            return {
                flag: false,
            }
        },
        watch: {
            flag(newVal, oldVal) {
                this.handler(newVal)
            }
        }
    }
</script>
