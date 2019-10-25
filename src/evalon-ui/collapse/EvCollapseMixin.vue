<script>
    export default {
        name: "EvCollapse",
        mounted() {
            if (!this.canExpand) {
                this.expand = true
            }
        },
        props: {
            title: {
                type: String,
                default: "Evalon Collapse"
            },
            canExpand: {
                type: Boolean,
                default: true,
            },
            defaultExpand: {
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
                expand: false,
            }
        },
        methods: {
            toggleExpand() {
                if (!this.canExpand) {
                    return
                }

                this.expand = !this.expand
            }
        },
    }
</script>
