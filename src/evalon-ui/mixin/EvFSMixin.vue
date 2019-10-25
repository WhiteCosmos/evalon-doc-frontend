<script>
    export default {
        name: "EvFSMixin",
        mounted() {

        },
        props: {
            promiseResponseChecker: {
                type: Function,
                default: (res) => {
                    return !res.hasError
                }
            },

            promiseResponseExtractor: {
                type: Function,
                default: (res) => {
                    return res['result']
                }
            },

            promiseErrorExtractor: {
                type: Function,
                default: (res) => {
                    return {
                        errorCode: "",
                        errorMessage: res.errorMessage,
                        stackTraces: []
                    }
                }
            }
        },
        data() {
            return {
                previousStatus: "",

                currentStatus: "",

                statuses: {},

                events_: [],

                event: {
                    name: "状态名称",

                    can: "检查能否进行状态变化",

                    before: "状态变化前函数",

                    after: "状态变化后函数",

                    styleGroups: {},

                    classMap: {
                        "fooClassGroup": [
                            "xxx-error",
                            "xxx-locked"
                        ]
                    }
                },

                classMap: {},
            }
        },
        methods: {
            registry(events) {
                this.events_ = events

                if (this.events_) {
                    let first = this.events_[0]

                    this.currentStatus = first.name

                    first.before && first.before()

                    first.after && first.after()
                }
            },
            registryClass(event, classGroup) {

            },
            registryClasses(events, classGroup) {

            },
            to(name, payload) {
                let event = this.events_.find((e) => e.name === name)

                if (!event) {
                    throw new Error("状态: " + name + " 不存在")
                }

                if (event.classMap) {
                    let keys = event.classMap.keys()
                }

                this.previousStatus = this.currentStatus;

                event.before && event.before(payload)

                this.currentStatus = event.name

                event.after && event.after(payload)
            },
            toPrevious(flag, payload) {
                if (flag) { // 是否执行回调
                    this.to(this.previousStatus, payload)
                } else {
                    this.currentStatus = this.previousStatus
                }
            },
            is(status) {
                return this.currentStatus === status
            },
        },
    }
</script>

