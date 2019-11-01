<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        name: "ev-icon-toggle-button",

        props: {
            iconName: { type: String},

            iconColor: {type: String},

            isActive: {
                type: Boolean,

                default: false,
            }
        },

        data() {
            return {
                isActive_: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

</style>
