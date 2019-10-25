<template>
    <div class="root ev-col ev-col-center">
        <ev-button-switch
            first-button-name="收藏的接口"
            first-button-label="api"
            second-button-name="保存的请求"
            second-button-label="request"
            v-on:switch='toggle'></ev-button-switch>

        <ev-row-gutter-16-px></ev-row-gutter-16-px>

        <EvalonFavoritesApi v-show="currentLabel === 'api'"></EvalonFavoritesApi>

        <EvalonFavoritesRequest v-show="currentLabel === 'request'"></EvalonFavoritesRequest>
    </div>
</template>

<script>
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";
    import EvButtonSwitch from "@/evalon-ui/button/ev-button-switch";
    import EvalonFavoritesApi from "@/components/documata/EvalonFavoritesApi";
    import EvalonFavoritesRequest from "@/components/documata/EvalonFavoritesRequest";
    import EvRowGutter16Px from "@/evalon-ui/layout/ev-row-gutter-16-px";

    export default {
        name: "EvalonFavorites",
        data() {
            return {
                currentLabel: "api"
            }
        },
        methods: {
            toggle(label) {
                this.currentLabel = label
            }
        },
        components: {EvRowGutter16Px, EvalonFavoritesRequest, EvalonFavoritesApi, EvButtonSwitch, EvPanel, EvTab}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";


</style>
