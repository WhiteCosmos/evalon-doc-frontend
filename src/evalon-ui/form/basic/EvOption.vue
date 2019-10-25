<template>
    <div class="ev-row ev-option ev-width-max"
         @click="onClick(option)"
         @mouseenter="hoverHandler(option)"
         :class="hoverGroup">

        <ev-col-gutter-m></ev-col-gutter-m>

        <div class="ev-col ev-width-max ev-row-center">
            <ev-option-1>{{ optionHeadKey ? option[optionHeadKey] : option}}</ev-option-1>

            <ev-option-2 v-if="optionSubheadKey" class="reference ev-text-ellipsis">{{ option[optionSubheadKey] || "/" }}</ev-option-2>
        </div>
    </div>
</template>

<script>

    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvOption1 from "@/evalon-ui/typography/ev-option-1";
    import EvOption2 from "@/evalon-ui/typography/ev-option-2";

    export default {
        name: "EvOption",
        components: {EvOption2, EvOption1, EvColGutterM},
        props: {
            option: [Number, String, Object],

            optionIcon: {type: String},

            optionHeadKey: {type: String},

            optionSubheadKey: {type: String},

            optionTagKey: {type: String},

            isHover: {
                type: Boolean,

                default: false,
            },

            isSelect: {
              type: Boolean,

              default: false
            },

            hoverHandler: {
                type: Function,

                default: () => {},
            },

            selectHandler: {
                type: Function,

                default: () => {},
            }
        },
        computed: {
            hoverGroup() {
                return {
                    'ev-option-hover': this.isHover
                }
            }
        },
        methods: {
            onClick(option) {
                this.$emit('select', option)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .ev-option {
        height: 48px; // default height

        @include ev-transition("background-color", .12s)
    }

    .ev-option-hover {
        background-color: $EVALON_ROYAL_BLUE_0;

        cursor: pointer;

        @include ev-transition("background-color", .12s)
    }
</style>

