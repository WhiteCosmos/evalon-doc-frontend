<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvFilterMixin",
        created() {
            this.registry([
                {
                    name: this.BEFORE_FILTER,

                    before: this.beforeFilter,
                },
                {
                    name: this.AFTER_FILTER,

                    after: this.afterFilter,
                }
            ])
        },
        model: {
            prop: "filterKeyword",
            event: "change",
        },
        props: {
            placeholder: {
                type: String,
                default: "请搜索"
            },
            filterKeyword: {
                type: String,
                default: undefined,
            }
        },
        data() {
            return {
                BEFORE_FILTER: "BEFORE_FILTER",

                AFTER_FILTER: "AFTER_FILTER",
            }
        },
        methods: {
            beforeFilter() {
                this.$emit("change", undefined)
            },
            afterFilter() {

            },
            cancelFilter() {
                this.to(this.BEFORE_FILTER)
            }
        },
        watch: {
            filterKeyword(newVal) {
                if (newVal) {
                    this.to(this.AFTER_FILTER)

                    this.$emit("change", newVal)
                } else {
                    this.to(this.BEFORE_FILTER)
                }
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

