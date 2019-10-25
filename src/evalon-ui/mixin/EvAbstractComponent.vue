<!-- 所有组件的父类 -->
<script>
    import EvResponseHandlerMixin from "@/evalon-ui/mixin/EvResponseHandlerMixin";
    import EvComponentUtilsMixin from "@/evalon-ui/mixin/EvComponentUtilsMixin";
    import EvAbstractStyleMixin from "@/evalon-ui/mixin/EvAbstractStyleMixin";
    import EvFSMixin from "@/evalon-ui/mixin/EvFSMixin";
    import EvErrorMixin from "@/evalon-ui/mixin/EvErrorMixin";

    export default {
        name: "EvAbstractComponent",
        props: {
            clickHandler: {
                type: Function,
                default: () => {
                }
            },

            height: {type: Number},

            width: {type: Number},
        },
        data() {
            return {
                colorStyleGroup: {
                    "color:": this["color"],

                    "background-color": this["background-color"]
                }
            }
        },
        methods: {
            isEmptyArray(arr) {
                return arr && (arr instanceof Array) && arr.length === 0
            },
            isEmptyString(str) {
                return !str || ((str instanceof String) && str === "")
            },
            px(number) {
                return number + 'px'
            }
        },
        mixins: [
            EvFSMixin, // 状态机处理组件

            EvResponseHandlerMixin, // 响应处理组件

            EvAbstractStyleMixin, //  样式组件

            EvComponentUtilsMixin,

            EvErrorMixin,
        ]
    }
</script>
