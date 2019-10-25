<script>
    export default {
        name: "EvalonDocumataPropsMixin",
        props: {
            appId: {type: String},

            branch: {type: String},

            serviceQualifiedName: {type: String},

            methodName: {type: String},

            classQualifiedName: {type: String}, // 用于结构体导航
        },
        watch: {
            appId(newVal) {
                //TODO 触发ACTION
            },
            branch(newVal) {
                //TODO 触发ACTION
            },
            methodName(newVal) {
                //TODO 触发ACTION
            },
            classQualifiedName(newVal) {

            }
        }
    }
</script>
