<template>
    <div class="ev-option-1-container ev-text-ellipsis-container">
        <span class="ev-option-1"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "ev-option-locked"
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-option-1 {
        font-size: 13px;

        font-weight: normal;

        color: $EVALON_FONT_COLOR_LIGHT;

        line-height: 24px;
    }
</style>
