<template>
    <div class="ev-options-container">
        <div class="ev-col ev-options ev-width-max"
             v-shortkey="{up: ['arrowup'], down: ['arrowdown'], enter: ['enter']}"
             @shortkey="shortKey">
            <ev-row-gutter-l></ev-row-gutter-l>

            <!-- 无限循环问题 -->

            <EvOption
                v-for="(option, idx) in options"
                v-show="isOptionVisible(option)"
                :is-hover="option === currentHoveredOption"
                :is-selected="option === currentSelectedOption"
                :key="idx"
                :option="option"
                :option-head-key="optionHeadKey"
                :option-subhead-key="optionSubheadKey"
                :hover-handler="hoverHandler"
                @select="doSelectOption(option)">
            </EvOption>

            <EvPlaceholder v-if="showEmptyMessage" :height=48>{{ emptyMessage }}</EvPlaceholder>
        </div>

        <EvTransparentMask
            @click.native="doSelectOption(null)"></EvTransparentMask>
    </div>
</template>

<script>
    import EvTransparentMask from "@/evalon-ui/modal/EvTransparentMask";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvPlaceholder from "@/evalon-ui/form/basic/EvPlaceholder";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvScrollY from "@/evalon-ui/layout/ev-scroll-y";
    import EvOptionsMixin from "@/evalon-ui/form/basic/EvOptionsMixin";
    import EvOption from "@/evalon-ui/form/basic/EvOption";

    export default {
        name: "EvOptions",
        mounted() {
            if (this.hasDefaultOption && this.options.length !== 0) { // 是否使用默认值
                this.$emit('select', this.options[0])
            }
        },
        components: {EvScrollY, EvRowGutterL, EvPlaceholder, EvTransparentMask, EvOption},
        mixins: [
            EvAbstractComponent,

            EvOptionsMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-options-container {

    }

    .ev-options {
        display: block;

        position: absolute;

        max-height: 256px;

        overflow-y: auto;

        top: 16px;

        z-index: 1;

        background-color: white;

        border-radius: 2px 2px 16px 16px;

        border-left: 1px solid $EVALON_BLUE_VERY_LIGHT;

        border-right: 1px solid $EVALON_BLUE_VERY_LIGHT;

        box-shadow: 0 7px 5px -5px $EVALON_GREY_LEVEL_1;
    }
</style>
