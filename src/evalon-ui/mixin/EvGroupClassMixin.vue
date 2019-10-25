<script>
    import EvGroupMixin from "@/evalon-ui/mixin/EvGroupMixin";

    export default {
        name: "EvGroupClassMixin",
        data() {
            return {}
        },
        computed: {
            EvGroupClass() {
                return this.clazz
            }
        },
        mixins: [
            EvGroupMixin,
        ]
    }
</script>

