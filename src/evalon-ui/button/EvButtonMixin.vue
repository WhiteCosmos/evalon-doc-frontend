<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvButtonMixin",
        props: {
            handler: {
                type: Function,
                default: () => {

                }
            },
            statuses: {}
        },
        data() {
            return {
                flag: false, // 状态控制

                ACTIVE: "active",

                INACTIVE: "inactive",

                LOCKED: "locked",
            }
        },
        watch: {
            flag(newVal, oldVal) {
                this.handler(newVal)
            }
        },
        mixins: [
            EvAbstractComponent,
        ]
    }
</script>

<style>
    .ev-abstract-button {

    }

    .ev-abstract-button:hover {
        cursor: pointer;
    }
</style>
