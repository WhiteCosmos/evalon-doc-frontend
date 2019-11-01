<template>
    <div class="ev-panel ev-width-max" v-show="visible_">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ev-panel",
        created() {
            this.visible_ = this.visible
        },
        props: {
            name: {type: String},

            label: {type: String},

            visible: {
                type: Boolean,

                default: false,
            }
        },
        data() {
            return {
                visible_: false
            }
        },
        watch: {
            visible(newVal) {
                this.visible_ = newVal
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-panel {
        overflow-y: auto;
    }
</style>
