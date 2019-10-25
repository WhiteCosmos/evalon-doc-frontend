<template>
    <div class="ev-page ev-background-light ev-width-max ev-row-center">
        <div class="ev-col ev-page-content" :style="paddingGroup">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EvPage",
        props: {
            paddingT: {
                type: Number,
                default: 32
            },
            paddingD: {
                type: Number,
                default: 32
            },
            paddingL: {
                type: Number,
                default: 32
            },
            paddingR: {
                type: Number,
                default: 32
            },
        },
        computed: {
            paddingGroup() {
                return {
                    'padding-top': this.paddingT + 'px',
                    'padding-bottom': this.paddingD + 'px',
                    'padding-left': this.paddingL + 'px',
                    'padding-right': this.paddingR + 'px',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-page {
        position: relative;

        @include ev-height($STANDARD_NAVIGATION_HEIGHT);
    }

    .ev-page-content {
        display: block;

        background-color: white;

        width: $STANDARD_WIDTH;

        @include ev-height($STANDARD_NAVIGATION_HEIGHT);

        @include ev-padding($SIZE_16_PX, $SIZE_24_PX);

        @include ev-border-left($EVALON_GREY_LEVEL_1);

        @include ev-border-right($EVALON_GREY_LEVEL_1);

        overflow-y: auto;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        width: 8px;

        background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border: 2px solid white;

        width: 6px;

        background: $NEUTRAL_GREY_3;

        border-radius: 8px;
    }


    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: $NEUTRAL_GREY_3;
    }
</style>
