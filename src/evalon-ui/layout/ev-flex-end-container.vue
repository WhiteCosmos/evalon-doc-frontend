<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ev-flex-end-container"
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;

        flex: 1;

        justify-content: flex-end;
    }
</style>
