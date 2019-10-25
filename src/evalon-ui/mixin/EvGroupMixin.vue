<!-- 处理组件组合为Group时的逻辑 -->

<script>
    export default {
        name: "EvGroupMixin",
        data() {
            return {
                groupIndex: -1,

                groupTotal: 0,

                clazz: {
                    'ev-is-first-component': false,

                    'ev-is-middle-component': false,

                    'ev-is-last-component': false,
                }
            }
        },
        computed: {
            isUnderGroup() {
                return this.groupIndex !== -1
            },
            isFirstComponent() {
                return this.groupIndex === 0
            },
            isMiddleComponent() {
                return this.isUnderGroup && !this.isFirstComponent && !this.isLastComponent
            },
            isLastComponent() {
                return this.isUnderGroup && (this.groupTotal - 1) === this.groupIndex
            },
        },
        watch: {
            groupIndex() {
                this.clazz["ev-is-first-component"] = this.isFirstComponent

                this.clazz["ev-is-middle-component"] = this.isMiddleComponent

                this.clazz["ev-is-last-component"] = this.isLastComponent
            }
        }
    }
</script>
