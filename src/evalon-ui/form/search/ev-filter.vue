<!-- 只提供过滤值， 不发起请求 -->

<template>
    <div class="ev-col ev-search-container ev-width-max">

        <!-- 搜索框 -->

        <div class="ev-row ev-search ev-width-max ev-col-center ev-top-layer">
            <ev-col-gutter-m></ev-col-gutter-m>

            <input type="text"
                   class="ev-search-input"
                   :placeholder="placeholder"
                   v-model="filterKeyword"
                   @keypress.esc="cancelFilter">

            <ev-col-gutter-m></ev-col-gutter-m>

            <ev-icon icon-name="search" icon-color="ev-blue-light" v-show="is(BEFORE_FILTER)"></ev-icon>

            <ev-icon icon-name="times" icon-color="ev-blue-light" v-show="is(AFTER_FILTER)"></ev-icon>

            <ev-col-gutter-m></ev-col-gutter-m>
        </div>
    </div>
</template>

<script>
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvSplitLine from "@/evalon-ui/layout/ev-split-line";
    import EvSearchItem from "@/evalon-ui/form/EvSearchItem";
    import EvLoading from "@/evalon-ui/loading/EvLoading";
    import EvDotLoading from "@/evalon-ui/loading/EvDotLoading";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvAbsoluteContainer from "@/evalon-ui/container/EvAbsoluteContainer";
    import EvMask from "@/evalon-ui/modal/EvMask";
    import EvSearchMixin from "@/evalon-ui/form/search/EvSearchMixin";
    import EvOption from "@/evalon-ui/form/basic/EvOption";
    import EvOptions from "@/evalon-ui/form/basic/EvOptions";
    import EvTransparentMask from "@/evalon-ui/modal/EvTransparentMask";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvFilterMixin from "@/evalon-ui/form/search/EvFilterMixin";

    export default {
        name: "ev-filter",
        components: {
            EvIcon,
            EvTransparentMask,
            EvOptions,
            EvOption,
            EvMask,
            EvAbsoluteContainer,
            EvRowGutterS,
            EvColGutterM, EvDotLoading, EvLoading, EvSearchItem, EvSplitLine, EvColGutterS
        },
        watch: {},
        mixins: [
            EvFilterMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../ev-form";

    .ev-search-container {
        position: relative;
    }

    .ev-search {
        height: $FORM_COMPONENT_HEIGHT;

        background-color: white;

        @include ev-form-shadow;

        @include ev-border($EVALON_BLUE_LIGHT, $FORM_COMPONENT_HEIGHT)
    }

    .ev-search-inactive {
        @include ev-border($EVALON_BLUE_LIGHT, $FORM_COMPONENT_HEIGHT);
    }

    .ev-search-active {
        border-radius: $BORDER_RADIUS_S, $BORDER_RADIUS_S, 0 0;
    }

    .ev-search-locked {
        background-color: $EVALON_GREY_LIGHT;
    }

    .ev-search-locked > input {
        color: $EVALON_FONT_COLOR_LIGHT;
    }

    ::placeholder {
        font-size: 12px;

        color: $EVALON_BLUE;
    }

    .ev-search-input {
        font-size: 12px;

        color: $EVALON_BLUE;

        outline: none;

        border: none;

        height: 32px;

        //flex: 1;

        background-color: transparent;
    }
</style>
