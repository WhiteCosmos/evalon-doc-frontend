<script>
    export default {
        name: "EvListMixin",
        mounted() {
            //TODO 初始化

            this.currentSelectedItem = undefined

            this.currentHoveredItem = undefined
        },
        props: {
            items: {
                type: Array,
                default: () => {
                    return []
                }
            },

            itemsProvider: {
                type: Function,
                default: () => {
                    return []
                }
            },

            itemHeadKey: {
                type: String,
            },

            itemSubheadKey: {
                type: String,
            },

            emptyMessage: {
                type: String,
            },

            filterKeyword: {
                type: String,
            },

            onSelectHandler: {
                type: Function,
            }
        },
        data() {
            return {
                showEmptyMessage: false,

                showErrorMessage: false,

                showLoadingMessage: false,

                currentSelectedItem: undefined,

                currentHoveredItem: undefined,
            }
        },
        computed: {},
        methods: {
            isItemVisible(item) {
                return this.filterKeyword && item[this.itemHeadKey].includes(this.filterKeyword)
            },
            isItemSelected(item) {
                return this.currentSelectedItem === item

            },
            isItemHovered(item) {
                return this.currentHoveredItem === item
            }
        }
    }
</script>

