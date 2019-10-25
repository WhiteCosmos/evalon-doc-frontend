<template>
    <div class="root ev-col">
        <div class="ev-row appid">
            <ev-col-gutter-32-px></ev-col-gutter-32-px>

            <div class="ev-col">
                <h5 class="font-appid">arena.api.melody</h5>

                <h6 class="font-project">napos.backend / foo</h6>
            </div>
        </div>

        <div class="ev-row branch-container">
            <h5 class="font">develop</h5>
        </div>

        <ev-tree
            :nodes="examples"
            parent-head-key="serviceName"
            children-key="methods"
            child-head-key="methodName"
            child-subhead-key="methodComments"></ev-tree>

        <div class="ev-row branch-container">
            <h5 class="font">feature/foo</h5>
        </div>

        <ev-tree
            :nodes="examples"
            parent-head-key="serviceName"
            children-key="methods"
            child-head-key="methodName"
            child-subhead-key="methodComments"></ev-tree>

        <ev-row-gutter16-px></ev-row-gutter16-px>

        <div class="ev-row appid">
            <ev-col-gutter-32-px></ev-col-gutter-32-px>

            <div class="ev-col">
                <h5 class="font-appid">nevermore.service</h5>

                <h6 class="font-project">napos.backend / goo</h6>
            </div>
        </div>

        <div class="ev-row branch-container">
            <h5 class="font">master</h5>
        </div>

        <ev-tree
            :nodes="examples"
            parent-head-key="serviceName"
            children-key="methods"
            child-head-key="methodName"
            child-subhead-key="methodComments"></ev-tree>
    </div>
</template>

<script>
    import EvRowGutter16Px from "@/evalon-ui/layout/ev-row-gutter-16-px";
    import EvTitle from "@/evalon-ui/typography/ev-title";
    import EvTree from "@/evalon-ui/data/ev-tree";
    import EvColGutter24Px from "@/evalon-ui/layout/ev-col-gutter-24-px";
    import EvColGutter32Px from "@/evalon-ui/layout/ev-col-gutter-32-px";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";

    export default {
        name: "EvalonFavoritesApi",
        data() {
            return {
                examples: [
                    {
                        serviceName: "AAA",
                        serviceComments: "测试服务",
                        methods: [
                            {
                                methodName: "queryAtresdi",
                                methodComments: "this is  query fdik",
                            }
                        ],
                    },
                    {
                        serviceName: "QWIjWQueryService",
                        serviceComments: "BBB",
                        methods: [
                            {
                                methodName: "queryFoo",
                                methodComments: "this is  query foo",
                            },
                            {
                                methodName: "queryFoo",
                                methodComments: "this is  query foo",
                            },
                            {
                                methodName: "queryFoo",
                                methodComments: "this is  query foo",
                            },
                            {
                                methodName: "queryFoo",
                                methodComments: "查询这个",
                            },
                            {
                                methodName: "queryFoo",
                                methodComments: "查询那个",
                            },
                        ],
                    },
                ]

            }
        },
        components: {EvColGutter8Px, EvColGutter32Px, EvColGutter24Px, EvTree, EvTitle, EvRowGutter16Px}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .root {
        display: block;

        justify-content: flex-start;

        width: 100%;

        height: calc(100vh - 240px);

        overflow-y: auto;
    }

    .appid {
        height: 56px;

        background-color: $NEUTRAL_GREY_2;

        align-items: center;
    }

    .font-appid {
        font-size: 14px;

        line-height: 24px;

        color: $EVALON_PURPLE;
    }

    .font-project {
        font-size: 12px;

        font-weight: normal;

        line-height: 24px;

        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .font {
        font-size: 14px;

        line-height: 40px;

        color: $EVALON_PURPLE;
    }

    .branch-container {
        @include ev-margin-left-and-right(32px, 24px);

        border-bottom: 1px solid $NEUTRAL_GREY_3;
    }
</style>
