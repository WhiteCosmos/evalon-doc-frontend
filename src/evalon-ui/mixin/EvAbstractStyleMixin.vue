<script>
    import EvSizeStyleMixin from "@/evalon-ui/mixin/EvSizeStyleMixin";
    import EvGroupClassMixin from "@/evalon-ui/mixin/EvGroupClassMixin";

    export default {
        name: "EvAbstractStyleMixin",
        mounted() {
            this.style = Object.assign(this.style, this.EvSizeStyle)

            this.clazz = Object.assign(this.clazz, this.EvGroupClass)
        },
        data() {
            return {
                style: {},

                clazz: {},

                customClassGroups: {}, // class name -> class 1 class 2 class 3

                customStyleGroups: {}, // style name -> style 1 style 2
            }
        },
        computed: {
            EvComponentStyle() {
                return this.style
            },
            EvComponentClass() {
                return this.clazz
            }
        },
        methods: {
            toggleCSSClass(className) {
                this.clazz[className] = !this.clazz[className];
            },
            addCSSClass(className) {
                this.clazz[className] = true
            },
            removeCSSClass(className) {
                delete this.clazz[className]
            },
            addCSSStyle(styleName, styleValue) {
                this.style[styleName] = styleValue
            },
            removeCSSStyle(styleName) {
                delete this.style[styleName]
            }
        },
        mixins: [
            EvSizeStyleMixin,

            EvGroupClassMixin,
        ]
    }
</script>

