<script>
    export default {
        name: "EvComponentUtilsMixin",
        methods: {
            isEmptyArray(array) {
                if (!array) {
                    return true
                }

                if (!(array instanceof Array)) {
                    return true
                }

                return array.length === 0
            },
            isEmptyString() {

            }
        }
    }
</script>
