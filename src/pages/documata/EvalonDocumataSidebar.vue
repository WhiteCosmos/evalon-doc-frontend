<template>
    <div class="ev-col evalon-documata-sidebar">
        <ev-row-gutter-24-px></ev-row-gutter-24-px>

        <ev-filter :placeholder="currentPlaceholder" v-model="filterKeyword" class="filter-container"></ev-filter>

        <ev-row-gutter-16-px></ev-row-gutter-16-px>

        <ev-tab @toggle-panel="setCurrentActivePanel" :button-padding="24" button-align="center" :default-panel="defaultPanel">
            <ev-panel name="接口" label="service">
                <ev-row-gutter-16-px></ev-row-gutter-16-px>

                <EvalonServiceList :filter-keyword="filterKeyword"></EvalonServiceList>
            </ev-panel>

            <ev-panel name="结构体" label="structure">
                <ev-row-gutter-16-px></ev-row-gutter-16-px>

                <EvalonStructureList :filter-keyword="filterKeyword"></EvalonStructureList>
            </ev-panel>

            <ev-panel name="收藏夹" label="favorites">
                <ev-row-gutter-16-px></ev-row-gutter-16-px>

                <EvalonFavorites></EvalonFavorites>
            </ev-panel>
        </ev-tab>
    </div>
</template>

<script>
    import EvSearch from "@/evalon-ui/form/search/ev-search";
    import EvFilter from "@/evalon-ui/form/search/ev-filter";
    import EvRowGutterS from "@/evalon-ui/layout/ev-row-gutter-s";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutterL from "@/evalon-ui/layout/ev-col-gutter-l";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvListItem from "@/evalon-ui/data/ev-list-item";
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";
    import EvalonServiceList from "@/components/documata/EvalonServiceList";
    import EvalonStructureList from "@/components/documata/EvalonStructureList";
    import EvalonFavorites from "@/components/documata/EvalonFavorites";
    import EvRowGutter24Px from "@/evalon-ui/layout/ev-row-gutter-24-px";
    import EvRowGutter16Px from "@/evalon-ui/layout/ev-row-gutter-16-px";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";

    export default {
        name: "EvalonDocumataSidebar",
        data() {
            return {
                filterKeyword: undefined,

                currentActivePanel: "service"
            }
        },
        computed: {
            currentPlaceholder() {
                switch (this.currentActivePanel) {
                    case "service":
                        return "搜索接口"
                    case "structure":
                        return "搜索结构体"
                    case "favorites":
                        return "搜索收藏夹"
                }
            },
            defaultPanel() {
                if (this.onApi(this.$route)) {
                    return "service"
                }

                if (this.onStruct(this.$route)) {
                    return "structure"
                }

                return "service"
            }
        },
        methods: {
            setCurrentActivePanel(label) {
                this.currentActivePanel = label

                this.filterKeyword = undefined // 重置搜索
            },
        },
        components: {
            EvRowGutter16Px,
            EvRowGutter24Px,
            EvalonFavorites,
            EvalonStructureList,
            EvalonServiceList,
            EvPanel,
            EvTab, EvListItem, EvRowGutterM, EvColGutterL, EvColGutterM, EvRowGutterS, EvFilter, EvSearch
        },
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .evalon-documata-sidebar {
        width: 320px;

        background-color: $EVALON_GREY_LIGHT;

        height: calc(100vh - 56px);

        border-right: 1px solid $EVALON_GREY_LEVEL_2;

        //@include ev-padding-left-and-right(24px, 24px);

        //padding-top: 16px;
    }

    .filter-container {
        @include ev-padding-left-and-right(24px, 24px);
    }
</style>
