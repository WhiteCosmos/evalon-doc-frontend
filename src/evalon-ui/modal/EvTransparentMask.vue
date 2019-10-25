<template>
    <div class="ev-mask"></div>
</template>

<script>
    export default {
        name: "EvTransparentMask",
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-mask {
        position: fixed;

        top: 0;

        bottom: 0;

        left: 0;

        right: 0;

        z-index: 0;

        background-color: transparent;
    }
</style>
