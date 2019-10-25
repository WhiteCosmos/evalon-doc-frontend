<template>
    <div class="ev-option-2-container ev-text-ellipsis-container">
        <span class="ev-option-2"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "ev-option-2",
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-option-2 {
        font-size: 12px;

        font-weight: normal;

        color: $EVALON_FONT_COLOR_LIGHT;

        line-height: 24px;
    }
</style>
