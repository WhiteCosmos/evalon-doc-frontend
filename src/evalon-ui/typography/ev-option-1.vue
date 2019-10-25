<template>
    <div class="ev-option-1-container ev-text-ellipsis-container ev-col-center">
        <span class="ev-option-1"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "ev-option-1",
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-option-1 {
        font-size: 12px;

        font-weight: normal;

        color: $EVALON_BLUE;

        line-height: 24px;
    }
</style>
