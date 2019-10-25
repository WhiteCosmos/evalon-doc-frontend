<template>
    <div class="ev-key-value">
        <div class="key-container">
            <h6 class="key">{{title}}</h6>
        </div>

        <ev-col-gutter-4-px></ev-col-gutter-4-px>

        <h6 class="key">:</h6>

        <div class="value-container">
            <h6 class="value" :class="[valueColor]">{{value}}</h6>
        </div>
    </div>
</template>

<script>
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvColGutter4Px from "@/evalon-ui/layout/ev-col-gutter-4-px";

    export default {
        name: "ev-title-value",
        components: {EvColGutter4Px, EvColGutter8Px},
        props: {
            title: {type: String},

            value: {type: String},

            valueColor: {type: String},
        },
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-key-value {
        display: flex;

        flex-direction: row;

        height: 40px;

        align-items: center;
    }

    .key-container {
        display: flex;

        justify-content: flex-start;
    }

    .value-container {
        display: flex;

        flex: 1;

        justify-content: flex-end;
    }


    .key {
        font-size: 14px;

        //color: $EVALON_ROYAL_BLUE_5;

        font-weight: bolder;
    }

    .value {
        font-size: 14px;
    }
</style>
