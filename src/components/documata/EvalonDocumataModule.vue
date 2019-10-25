<template>
    <div>
        <div class="ev-row evalon-documata-module ev-width-max ev-col-center" @click="toggleCheck">
            <div class="ev-row module-checkbox-container ev-center">
                <!--            <ev-icon icon-name="" icon-color="ev-grey-1" v-show="!checked"></ev-icon>-->

                <ev-icon icon-name="check"
                         icon-color="ev-blue"
                         v-show="checked"></ev-icon>
            </div>

            <div class="ev-col module-name-container ev-width-max">
                <h6 class="content-head">{{ module.moduleName }}</h6>
                <h6 class="content-subhead">{{ module.appId }}</h6>
            </div>

            <ev-row-gutter-max></ev-row-gutter-max>

            <ev-text-button v-show="checked" @click.native.stop="selectingApp = true">填写 App Id</ev-text-button>

            <ev-col-gutter-m></ev-col-gutter-m>
        </div>

        <EvalonDocumataModuleConfiguration
            :module="module"
            v-show="selectingApp"
            v-on:select="selectHandler"></EvalonDocumataModuleConfiguration>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvRowGutterMax from "@/evalon-ui/layout/ev-row-gutter-max";
    import EvTextButton from "@/evalon-ui/button/ev-text-button";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvalonDocumataModuleConfiguration from "@/components/documata/EvalonDocumataModuleConfiguration";

    export default {
        name: "EvalonDocumataModule",
        components: {
            EvalonDocumataModuleConfiguration,
            EvColGutterM,
            EvRowGutterM,
            EvTextButton,
            EvRowGutterMax,
            EvIcon
        },
        created() {
            this.module_ = this.module
        },
        model: {
            prop: "module",
            event: "change"
        },
        props: {
            module: {
                type: Object,
            }
        },
        data() {
            return {
                checked: false,

                selectingApp: false,

                module_: undefined,
            }
        },
        methods: {
            toggleCheck() {
                this.checked = !this.checked

                this.module.needRegistry = !this.module.needRegistry
            },

            onSelectHandler(app) {
                if (app) {
                    this.module_.appId = app.appName

                    this.module_.teamName = app.teamName

                    this.$emit('change', this.module_)
                }

                this.selectingApp = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .evalon-documata-module {
        height: 56px;

        transition: all .12s;

        border-bottom: 1px solid $EVALON_GREY_LEVEL_1;

        //background-color: $EVALON_GREY_LEVEL_1;
    }

    .evalon-documata-module:hover {
        background-color: $EVALON_GREY_LEVEL_0;

        cursor: pointer;
    }

    .evalon-documata-module:hover {

    }

    .module-checkbox-container {
        height: 56px;

        width: 56px;
    }

    .module-name-container {
        width: 320px;
    }

    .content-head {
        font-size: 13px;

        color: $EVALON_FONT_COLOR;

        line-height: 24px;
    }

    .content-subhead {
        font-size: 12px;

        color: $EVALON_FONT_COLOR_LIGHT;

        font-weight: normal;

        line-height: 24px;
    }

</style>
