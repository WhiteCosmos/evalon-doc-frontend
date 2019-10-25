<!-- 处理操作延迟 一般用于网络请求 -->

<script>
    export default {
        name: "EvDelayMixin",
        data() {
            return {
                delayTimeoutId: 0,

                delayTime: 120, // ms

                afterDelayCallback: () => {} // delay结束时的回调
            }
        },
        methods: {
            registryDelayCallback(callback) {
                this.afterDelayCallback = callback
            },
            refreshDelay() {
                if (this.delayTimeoutId) {
                    clearTimeout(this.delayTimeoutId)
                }

                this.delayTimeoutId = setTimeout(() => {
                    this.afterDelayCallback && this.afterDelayCallback()
                }, this.delayTime);
            },
        }
    }
</script>
