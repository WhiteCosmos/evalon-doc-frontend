<script>
    export default {
        name: "EvSizeMixin",
        props: {
            height: {type: Number},

            width: {type: Number},

            flex: {type: Number} // flex 比例控制 和 width 不能共存
        },
        computed: {
            EvSizeStyle() {
                let group = {}

                if (this.height) {
                    group['height'] = this.height + "px";
                }

                if (this.width) {
                    group['width'] = this.width + "px";
                }

                if (this.flex) {
                    group['flex'] = this.flex;
                }

                return group;
            }
        }
    }
</script>
