<template>
    <div class="ev-icon ev-center" :style="styleeee">
        <Icon :name="iconName" :scale="iconScale" :class="color"></Icon>
    </div>
</template>

<script>
    import Icon from "vue-awesome/components/Icon"

    import "vue-awesome/icons"
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-icon",
        created() {

        },
        props: {
            iconName: String,

            iconColor: String,

            iconScale: {
                type: Number,
                default: 0.8,
            },

            rotate: {type: Boolean, default: false},

            rotateDeg: {type: Number, default: 90},
        },
        computed: {
            color() {
                if (this.iconColor) {
                    return [this.iconColor];
                } else {
                    return []
                }
            },
            styleeee() {
                let group = {}

                if (this.height) {
                    group.height = this.height + "px"
                } else {
                    group.height = "16px"
                }

                if (this.width) {
                    group.width = this.width + "px"
                } else {
                    group.width = "16px"
                }

                group['border-radius'] = group.width + "px"

                if (this.rotate) {
                    group.transform = `rotate(${this.rotateDeg}deg)`
                }

                return group;
            }
        },
        components: {
            Icon
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>


<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-icon {
        transition: transform 72ms;
    }
</style>
