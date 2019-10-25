<template>
    <div class="ev-col ev-search-container" :style="EvComponentStyle" :class="EvComponentClass">

        <!-- 搜索框 -->

        <div class="ev-row ev-search ev-width-max ev-col-center ev-top-layer"
             :class="EvSearchCSSClasses">
            <ev-col-gutter-16-px></ev-col-gutter-16-px>

            <EvIcon icon-name="search" :icon-color="searchIconColor"></EvIcon>

            <ev-col-gutter-8-px></ev-col-gutter-8-px>

            <input type="text"
                   ref="input"
                   class="ev-search-input"
                   @keyup.esc="escHandler"
                   :placeholder="placeholder"
                   v-model="keyword"
                   :disabled="isLocked">

            <div class="ev-row search-icon-container ev-center">
                <EvDotLoading v-show="is(SEARCHING) || is(INPUTTING)"></EvDotLoading>

                <ev-icon-button-with-text v-show="showCancelIcon" @click.native="beforeSearch"></ev-icon-button-with-text>

                <EvIcon icon-name="lock" icon-color="neutral-grey-4" v-show="is(SEARCH_LOCKED)"></EvIcon>
            </div>

            <ev-col-gutter-m></ev-col-gutter-m>
        </div>

        <ev-row-gutter-s></ev-row-gutter-s>

        <transition name="fade">
            <EvOptions
                v-show="showOptions"
                :options="options"
                :current-selected-option="currentSelectedOption"
                :option-head-key="optionHeadKey"
                :option-subhead-key="optionSubheadKey"
                :show-empty-message="is(EMPTY_OPTIONS)"
                :show-error-message="is(SEARCH_ERROR)"
                @select="onSelectHandler"></EvOptions>
        </transition>
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
    import EvIconButton from "@/evalon-ui/button/ev-icon-button";
    import EvIconButtonSmall from "@/evalon-ui/button/ev-icon-button-small";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvIconButtonWithText from "@/evalon-ui/button/ev-icon-button-with-text";

    export default {
        name: "ev-search",
        components: {
            EvIconButtonWithText,
            EvColGutter8Px,
            EvColGutter16Px,
            EvIconButtonSmall,
            EvIconButton,
            EvIcon,
            EvTransparentMask,
            EvOptions,
            EvOption,
            EvMask,
            EvAbsoluteContainer,
            EvRowGutterS,
            EvColGutterM, EvDotLoading, EvLoading, EvSearchItem, EvSplitLine, EvColGutterS
        },
        mounted() {
            this.$refs.input.focus()
        },
        computed: {
            showCancelIcon() {
                return this.is(this.SEARCH_ERROR) ||
                    this.is(this.EMPTY_OPTIONS) ||
                    this.is(this.BEFORE_SELECT) ||
                    this.is(this.AFTER_SELECT)
            },
            EvSearchCSSClasses() {
                return {
                    'ev-is-first-component': this.isFirstComponent,

                    'ev-is-middle-component': this.isMiddleComponent,

                    'ev-is-last-component': this.isLastComponent,

                    'ev-search-locked': this.is(this.SEARCH_LOCKED),
                }
            },
            searchIconColor() {
                if (this.is(this.SEARCH_LOCKED)) {
                    return "neutral-grey-3";
                } else {
                    return "evalon-royal-blue-4";
                }
            }
        },
        methods: {
            escHandler() {
                this.to(this.BEFORE_SEARCH)
            },
            onSelectHandler(option) {
                if (!option) {
                    this.to(this.BEFORE_SEARCH);
                } else {
                    this.to(this.AFTER_SELECT, option);
                }
            },
            blurHandler() {
                // if (!this.currentSelectedOption) {
                //     this.to(this.BEFORE_SEARCH);
                // }
            },
            isStillSearching() {
                return this.is(this.SEARCHING) && this.options.length !== 0
            }
        },
        mixins: [
            EvSearchMixin
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

        //@include ev-form-shadow;

        @include ev-border($EVALON_BLUE_LIGHT, $FORM_COMPONENT_HEIGHT)
    }

    .ev-search-locked {
        background-color: $EVALON_GREY_LEVEL_1;
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

    .ev-search-locked:hover {
        cursor: not-allowed;
    }

    .ev-search-locked > input {
        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .search-icon-container {
        width: 40px;

        height: 40px;
    }

    ::placeholder {
        font-size: 13px;

        font-weight: normal;

        color: $EVALON_ROYAL_BLUE_5;
    }

    .ev-is-first-component {
        border-right: none;

        border-radius: 40px 0 0 40px;
    }

    .ev-is-middle-component {
        border-left: none;

        border-right: none;

        border-radius: 0 0 0 0;
    }

    .ev-is-last-component {
        border-left: none;

        border-radius: 0 40px 40px 0;
    }
</style>
