<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvTableMixin",
        props: {
            title: {type: String, default: "Table"},

            options: {
                type: Array,
                default: () => {
                    return []
                }
            },

            optionsProvider: {
                type: Function,
            },

            optionHeadKey: {type: String},

            optionSubheadKey: {type: String}
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

