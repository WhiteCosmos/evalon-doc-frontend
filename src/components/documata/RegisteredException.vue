<template>
    <div class="registered-exception ev-col ev-no-select">
        <div class="registered-exception-title">
            <ev-icon icon-name="caret-right" icon-color="ev-font-color-light" :rotate="expand_"
                     rotate-deg="90"></ev-icon>

            <h5 @click="toggleExpand">{{ exception.exceptionName }}</h5>

            <ev-flex-end-container v-if="exception.filePath">
                <ev-text-button>查看文件</ev-text-button>
            </ev-flex-end-container>
        </div>

        <ev-stacktrace v-show="expand_" :stacktraces="exception.stacktraces"></ev-stacktrace>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvTextButton from "@/evalon-ui/button/ev-text-button";
    import EvFlexEndContainer from "@/evalon-ui/layout/ev-flex-end-container";
    import EvStacktrace from "@/evalon-ui/other/ev-stacktrace";

    export default {
        name: "RegisteredException",
        props: {
            exception: {
                type: Object, default: () => {
                    return {
                        exceptionName: "",
                        filePath: undefined,
                        stacktraces: []
                    }
                }
            }
        },
        data() {
            return {
                expand_: false
            }
        },
        methods: {
            toggleExpand() {
                this.expand_ = !this.expand_
            }
        },
        components: {EvStacktrace, EvFlexEndContainer, EvTextButton, EvIcon}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .registered-exception-title {
        display: flex;

        align-items: center;

        height: 48px;

        //transition: all .12s;
    }

    h5:hover {
        cursor: pointer;

        color: $EVALON_BLUE;
    }

    .icon-expand {

    }

    .title-expand {

    }
</style>
