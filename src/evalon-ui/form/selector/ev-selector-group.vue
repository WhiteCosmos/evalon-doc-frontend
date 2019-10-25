<template>
    <div class="ev-row ev-selector-group ev-width-max">
        <slot></slot>

        <!--        <EvOptions-->
        <!--            v-show="is(SELECT) && !isLocked"-->
        <!--            :options="options_"-->
        <!--            :has-default-option="hasDefaultOption"-->
        <!--            :option-head-key="optionHeadKey"-->
        <!--            :option-subhead-key="optionSubheadKey"-->
        <!--            @select="onSelectHandler"></EvOptions>-->
    </div>
</template>

<script>
    import EvResponseHandlerMixin from "@/evalon-ui/mixin/EvResponseHandlerMixin";
    import EvComponentUtilsMixin from "@/evalon-ui/mixin/EvComponentUtilsMixin";
    import EvSizeMixin from "@/evalon-ui/mixin/EvSizeStyleMixin";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "ev-selector-group",
        mounted() {
            this.$children.forEach((c, idx) => {
                c.groupIndex = idx

                c.groupTotal = this.$children.length

                if (this.isEvSelector(c)) {
                    c.optionsProviderCallback = this.optionsProviderCallback;
                }
            })
        },
        methods: {
            optionsProviderCallback(index, option) {
                let currentComponent = this.$children[index]

                if (currentComponent.isLastComponent) {
                    return
                }

                //TODO 其它selector收起

                let nextComponent = this.$children[++index];

                if (currentComponent.subOptionsKey) { // 使用对象内部的options
                    nextComponent.options_ = option[currentComponent.subOptionsKey]

                    this.setDefaultOption(nextComponent)
                } else {
                    nextComponent.optionsProviderParameter = option // 把上一个组件选择的Option作为下一个组件的参数
                }
            },
            isEvSelector(component) {
                return component.$options.name === "ev-selector"
            },
            setDefaultOption(selector) {
                if (!selector.hasDefaultOption) {
                    return
                }

                selector.currentSelectedOption = selector.options_[0]
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-selector-group {

    }
</style>
