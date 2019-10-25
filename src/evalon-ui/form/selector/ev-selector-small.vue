<!-- 基础Selector，只能使用固定选项，可以从接口加载选项 -->

<template>
    <div class="ev-selector" :style="EvComponentStyle">
        <div class="ev-row ev-selector-container ev-width-max ev-col-center ev-no-select ev-selector-style "
             @click="toggle"
             :class="EvComponentClass">

            <ev-selector-split v-if="isLastComponent || isMiddleComponent"></ev-selector-split>

            <ev-col-gutter-m v-if="!isUnderGroup || isFirstComponent"></ev-col-gutter-m>

            <ev-option-1>{{ currentSelectedOptionValue || placeholder }}</ev-option-1>

            <ev-col-gutter-s></ev-col-gutter-s>

            <EvIcon icon-name="angle-left"
                    icon-color="ev-blue-light"
                    v-show="!is(SELECT_LOCKED)"
                    :rotate="is(SELECTING)"></EvIcon>

            <EvIcon icon-name="lock"
                    icon-color="ev-blue-light"
                    v-show="is(SELECT_LOCKED)"></EvIcon>

            <ev-col-gutter-m></ev-col-gutter-m>
        </div>

        <transition name="fade">
            <EvOptions
                v-show="is(SELECTING)"
                :options="options_"
                :has-default-option="hasDefaultOption"
                :option-head-key="optionHeadKey"
                :option-subhead-key="optionSubheadKey"
                @select="selectHandler"></EvOptions>
        </transition>
    </div>
</template>

<script>
    import EvSelectorMixin from "@/evalon-ui/form/selector/EvSelectorMixin";
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvMask from "@/evalon-ui/modal/EvMask";
    import EvTransparentMask from "@/evalon-ui/modal/EvTransparentMask";
    import EvOptions from "@/evalon-ui/form/basic/EvOptions";
    import EvSelectorSplit from "@/evalon-ui/form/selector/ev-selector-split";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";

    export default {
        name: "ev-selector-small",
        created() {

        },
        computed: {
            shapeStyleGroup() { //TODO
                let group = {}

                group['ev-selector-locked'] = this.isLocked

                return group
            }
        },
        methods: {
            onSelectHandler(option) {
                console.log(option)

                this.to(this.AFTER_SELECT, option)
            }
        },
        components: {
            EvOption1,
            EvSelectorSplit, EvOptions, EvTransparentMask, EvMask, EvColGutterM, EvColGutterS, EvIcon},
        mixins: [
            EvSelectorMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "./ev-selector";

    .ev-selector {
        position: relative;

        height: 40px;

        width: 240px;
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
