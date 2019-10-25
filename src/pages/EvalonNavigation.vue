<template>
    <div class="evalon-navigation ev-col-center ev-width-max">
        <div class="ev-banner-container">
            <img src="../assets/logo.png" height="40">
        </div>

        <EvalonDocumataNavigation></EvalonDocumataNavigation>
    </div>
</template>

<script>
    import EvSelectorGroup from "@/evalon-ui/form/selector/ev-selector-group";
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvIconButton from "@/evalon-ui/button/ev-icon-button";
    import EvColGutterL from "@/evalon-ui/layout/ev-col-gutter-l";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvalonDocumataNavigation from "@/pages/documata/EvalonDocumataNavigation";

    export default {
        name: "EvalonNavigation",
        components: {
            EvalonDocumataNavigation,
            EvColGutterM, EvColGutterL, EvIconButton, EvRoundButton, EvSelector, EvSelectorGroup
        },
        computed: {
            isDocumata() {

            },
            isAutomata() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui/evalon-ui";

    .evalon-navigation {
        position: relative;

        height: 56px;

        @include ev-padding-left-and-right(24px, 24px);

        background-color: white;

        box-shadow: 0 8px 6px -6px $EVALON_GREY_LEVEL_1;

        z-index: 100;
    }

    .ev-banner-container {
        width: 296px;
    }

</style>
