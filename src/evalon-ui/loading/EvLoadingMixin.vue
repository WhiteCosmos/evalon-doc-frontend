<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvLoadingMixin",
        props: {
            message: {type: String, default: "加载中..."},
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>
