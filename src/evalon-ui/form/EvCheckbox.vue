<template>
    <div class="ev-checkbox ev-center ev-cursor-pointer" @click="flag = !flag" :class="{'ev-checkbox-checked': flag}">
        <icon name="check" scale=".7" v-show="flag"></icon>
    </div>
</template>

<script>
    import EvHandlerMixin from "@/evalon-ui/mixin/EvHandlerMixin";
    import Icon from 'vue-awesome/components/Icon'
    import 'vue-awesome/icons/check'

    export default {
        name: "EvCheckbox",
        mixins: [
            EvHandlerMixin
        ],
        components: {Icon}
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-checkbox {
        width: $SIZE_16_PX;

        height: $SIZE_16_PX;

        @include ev-border($EVALON_GREY_REGULAR, $BORDER_RADIUS_S)
    }

    .ev-checkbox-checked {
        background-color: $EVALON_BLUE;

        @include ev-border($EVALON_BLUE, $BORDER_RADIUS_S)
    }

    .ev-checkbox-checked > .fa-icon {
        color: white;
    }

    .ev-checkbox-unchecked {

    }
</style>
