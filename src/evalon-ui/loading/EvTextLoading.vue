<template>
    <div class="ev-text-loading ev-col-center">
        <div class="ev-row" v-if="!hasError">
            <EvRingLoading></EvRingLoading>
            <ev-col-gutter-xs></ev-col-gutter-xs>
            <h5 class="ev-blue">{{ message }}</h5>
        </div>

        <div class="ev-row" v-if="hasError">
            <h5 class="ev-red">{{ errorMessage }}</h5>
        </div>
    </div>
</template>

<script>
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvDotLoading from "@/evalon-ui/loading/EvDotLoading";
    import EvRingLoading from "@/evalon-ui/loading/EvRingLoading";
    import EvColGutterXs from "@/evalon-ui/layout/ev-col-gutter-xs";
    import EvLoadingMixin from "@/evalon-ui/loading/EvLoadingMixin";

    export default {
        name: "EvTextLoading",
        components: {EvColGutterXs, EvRingLoading, EvDotLoading, EvColGutterS},
        mixins: [
            EvLoadingMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-text-loading {
        min-height: $SIZE_24_PX;
    }
</style>
