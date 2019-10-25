<!-- 支持搜索选项的Selector，比基础选项多了搜索功能。 -->

<template>
    <div class="root ev-relative ev-width-max" :style="EvComponentStyle">
        <div class="ev-row ev-selector-container ev-width-max ev-col-center ev-no-select ev-selector-style "
             :class="EvFilterSelectorCSSClasses"
             @click="toggle">

            <ev-selector-split v-if="isLastComponent || isMiddleComponent"></ev-selector-split>

            <ev-col-gutter-m v-if="!isUnderGroup || isFirstComponent"></ev-col-gutter-m>

            <ev-filter-input
                v-model="filterKeyword"
                :default-value="currentSelectedOptionValue"
                :placeholder="placeholder"></ev-filter-input>

            <ev-col-gutter-s></ev-col-gutter-s>

            <EvIcon icon-name="angle-left"
                    icon-color="ev-blue-light"
                    v-show="!is(SELECT_LOCKED)"
                    :rotate="is(SELECTING)"></EvIcon>

            <EvIcon icon-name="lock"
                    icon-color="evalon-neutral-grey-4"
                    v-show="is(SELECT_LOCKED)"></EvIcon>

            <ev-col-gutter-16-px></ev-col-gutter-16-px>

            <slot name="button"></slot>
        </div>

        <EvOptions
            v-show="is(SELECTING)"
            :options="options_"
            :filter-key="filterKeyword"
            :option-head-key="optionHeadKey"
            :option-subhead-key="optionSubheadKey"
            @select="onSelectHandler"></EvOptions>
    </div>
</template>

<script>
    import EvOptions from "@/evalon-ui/form/basic/EvOptions";
    import EvSelectorMixin from "@/evalon-ui/form/selector/EvSelectorMixin";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvSelectorSplit from "@/evalon-ui/form/selector/ev-selector-split";
    import EvFilterInput from "@/evalon-ui/form/search/ev-filter-input";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";

    export default {
        name: "EvFilterSelector",
        computed: {
            EvFilterSelectorCSSClasses() {
                return {
                    'ev-is-first-component': this.isFirstComponent,

                    'ev-is-middle-component': this.isMiddleComponent,

                    'ev-is-last-component': this.isLastComponent,

                    'ev-selector-locked': this.is(this.SELECT_LOCKED),
                }
            }
        },
        methods: {
            onSelectHandler(option) {
                this.to(this.AFTER_SELECT, option)

                this.filterKeyword = this.currentSelectedOptionValue

                this.$emit('select', option)
            }
        },
        components: {EvColGutter16Px, EvFilterInput, EvSelectorSplit, EvIcon, EvColGutterS, EvColGutterM, EvOptions},
        mixins: [
            EvSelectorMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../ev-form";
    @import "./ev-selector";

    .root {
        height: 40px;

        width: 256px;
    }

    .ev-selector {
        position: relative;

        height: 40px;

        // width: 240px;
    }

    .ev-selector-input {
        font-size: 12px;

        color: $EVALON_BLUE;

        outline: none;

        border: none;

        height: 32px;

        background-color: transparent;
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

    .ev-selector-container {
        position: absolute;

        height: 40px;
    }

    .ev-selector-container:hover {
        cursor: pointer;
    }

    .ev-option-container {
        min-width: 0; // 让elipsis生效

        flex: 1;
    }

    .ev-options-container {

    }

    .ev-selector-locked {
        background-color: $EVALON_GREY_LIGHT;
    }

    .ev-selector-locked:hover {
        cursor: not-allowed;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 72ms;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
