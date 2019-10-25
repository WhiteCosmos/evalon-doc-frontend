<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        name: "EvLoadingModal",
        props: {
            title: { type: String },

            loadingHandler: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {
                message: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

</style>
