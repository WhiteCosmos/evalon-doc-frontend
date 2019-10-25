<template>
    <div class="ev-placeholder ev-width-max ev-center" :style="EvSizeStyle">
        <h5 class="reference-bolder">
            <slot></slot>
        </h5>
    </div>
</template>

<script>
    import EvSizeMixin from "@/evalon-ui/mixin/EvSizeStyleMixin";

    export default {
        name: "EvPlaceholder",
        mixins: [
            EvSizeMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-placeholder {
        height: 48px;
    }
</style>
