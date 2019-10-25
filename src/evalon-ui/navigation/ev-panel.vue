<template>
    <div class="ev-panel ev-width-max" v-show="visible">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ev-panel",
        props: {
            name: {type: String},

            label: {type: String},

            visible: {
                type: Boolean,

                default: false,
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
