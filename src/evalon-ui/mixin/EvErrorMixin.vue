<script>
    export default {
        name: "EvErrorMixin",
        data() {
            return {
                has_error: false,

                error_code: undefined,

                error_message: undefined,

                stack_traces: [],
            }
        },
        methods: {
            clear() {
                this.has_error = false

                this.error_code = undefined

                this.error_message = undefined

                this.stack_traces = []
            },
            check(res) {
                if (res.hasError) {
                    this.has_error = true

                    this.error_message = res.errorMessage

                    return true
                }

                return false
            }
        }
    }
</script>

