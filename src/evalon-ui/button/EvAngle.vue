<template>
    <div class="ev-angle ev-center" @click="">
        <icon name="angle-down" scale="0.8" v-if="flag"></icon>

        <icon name="angle-right" scale="0.8" v-if="!flag"></icon>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import 'vue-awesome/icons/angle-down'
    import 'vue-awesome/icons/angle-right'

    export default {
        name: "EvAngle",
        props: {
            flag: Boolean,
        },
        components: {
            Icon
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-angle {
        width: $SIZE_24_PX;

        height: $SIZE_32_PX;
    }

    .fa-icon {
        color: $EVALON_GREY_DARK
    }
</style>
