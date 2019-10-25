<script>
    export default {
        name: "EvResponseHandlerMixin",
        props: {
            responseChecker: {
                type: Function,
                default: (res) => {
                    this.hasResponseError = res.hasError

                    this.responseErrorMessage = res.errorMessage

                    return res.hasError
                }
            },
            responseExtractor: {
                type: Function,
                default: (res) => {
                    return res.result
                }
            },
        },
        data() {
            return {
                hasResponseError: false,

                responseErrorMessage: "",

                responseStackTraces: []
            }
        },
        methods: {}
    }
</script>
