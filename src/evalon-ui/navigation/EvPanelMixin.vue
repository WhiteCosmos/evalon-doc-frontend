<script>
    export default {
        name: "EvTabPanelMixin",
        props: {
            name: {type: String},

            label: {type: String},

            visible: {type: Boolean},

            index: {
                type: Number,
                default: 0
            }
        }
    }
</script>

