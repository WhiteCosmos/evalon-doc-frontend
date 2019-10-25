<template>
    <div class="ev-tab ev-width-max">

        <!--  按钮区域 -->

        <div class="ev-row ev-panel-button-container" :class="buttonAlignClass" :style="buttonContainerStyles">
            <ev-panel-button
                v-for="p in panels"
                :active="p.label === currentLabel"
                @click.native="togglePanel(p)">{{ p.panel.name }}
            </ev-panel-button>
        </div>

        <!--  面板区域 -->

        <div class="ev-panel-container ev-col">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import EvTabMixin from "@/evalon-ui/navigation/EvTabMixin";
    import EvPanelButton from "@/evalon-ui/navigation/ev-panel-button";
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";

    export default {
        name: "ev-tab",
        components: {EvRowGutterM, EvRowGutterS, EvPanelButton},
        computed: {
            buttonAlignClass() {
                return {
                    'ev-row-align-left': this.buttonAlign === "left",
                    'ev-row-align-center': this.buttonAlign === "center",
                    'ev-row-align-right': this.buttonAlign === "right",
                }
            },
        },
        mixins: [
            EvTabMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-tab {

    }

    .ev-panel-button-container {
        height: 40px;

        @include ev-border-bottom($EVALON_GREY_LEVEL_2);
    }

    .ev-panel-container {
        overflow-y: scroll;
    }
</style>
