<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        name: "ev-key-value-slot",
        props: {
            keyWidth: {type: Number, default: 72},

            valueWidth: {type: Number, default: -1},

            keyClass: {type: String},

            valueClass: {type: String},
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

</style>
