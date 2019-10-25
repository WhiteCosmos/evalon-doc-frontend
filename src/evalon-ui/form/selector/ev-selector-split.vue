<template>
    <div class="ev-selector-split ev-col-center">
        <div class="split-bar"></div>
    </div>
</template>

<script>
    export default {
        name: "ev-selector-split"
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-selector-split {
        height: 40px;

        width: 16px;
    }

    .split-bar {
        height: 24px;

        border-left: 1px solid $EVALON_BLUE_LIGHT;
    }

</style>
