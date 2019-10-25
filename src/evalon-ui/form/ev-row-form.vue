<template>
    <div class="ev-row ev-form-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ev-row-form",
        data() {
            return {
                options: []
            }
        },
        computed: {
            currentOptions() {
                return options
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

</style>
