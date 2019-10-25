<template>
    <div class="ev-abstract-button ev-switch" @click="flag = !flag"
         :class="{open: flag, close: !flag}">
        <div class="ev-switch-circle"
             :class="{'ev-switch-circle-open': flag, 'ev-switch-circle-close': !flag}"></div>
    </div>
</template>

<script>
    import EvButtonMixin from "@/evalon-ui/button/EvButtonMixin";

    export default {
        name: "EvSwitch",
        props: {
            tagForOpen: String,
            tagForClose: String,
        },
        mixins: [
            EvButtonMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-switch {
        display: flex;

        align-items: center;

        width: $SIZE_32_PX;

        height: $SIZE_14_PX;

        border-radius: $SIZE_14_PX;

        transition: .2s;
    }

    .ev-switch:hover {
        cursor: pointer;
    }

    .ev-switch-circle {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: $WHITE;
        margin-left: 2px;
        transition: .2s;
    }

    .open {
        background-color: $EVALON_GREEN;
        transition: background-color, .2s;
    }

    .close {
        background-color: $EVALON_GREY_REGULAR;
        transition: background-color, .2s;
    }

    .ev-switch-circle-open {
        margin-left: 20px;
        transition: margin-left .2s;

    }

    .ev-switch-circle-close {
        margin-left: 2px;
        transition: margin-left .2s;
    }

    h4 {
        font-size: 8px;
    }
</style>
