<template>
    <div class="ev-option-1-container ev-text-ellipsis-container ev-col-center">
        <span class="ev-option-1" :style="{'color': color}"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "ev-column",
        created() {

        },
        props: {
            color: {type: String}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-option-1 {
        font-size: 12px;

        font-weight: normal;

        color: $EVALON_FONT_COLOR;

        line-height: 32px;
    }
</style>
