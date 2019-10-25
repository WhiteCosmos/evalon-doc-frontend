<script>
    export default {
        name: "EvTreeMixin",
        props: {
            nodes: {
                type: Array,
                default: () => {
                    return []
                }
            },

            filterKeyword: {
                type: String
            },

            parentHeadKey: {
                type: String,
            },

            parentSubheadKey: {
                type: String,
            },

            childrenKey: {
                type: String,
            },

            childHeadKey: {
                type: String,
            },

            childSubheadKey: {
                type: String,
            },

            showSubheadIfEmpty: {
                type: Boolean,
            },

            onSelectHandler: {},

            emptyMessage: {
                type: String,
                default: "没有内容",
            },

            errorMessage: {
                type: String,
                default: "加载失败"
            },
        },
        data() {
            return {
                //currentSelectedChild: undefined
            }
        },
        methods: {

        },
        watch: {

        }
    }
</script>
