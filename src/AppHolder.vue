<template>
    <div id="app">
        <EvalonNavigation></EvalonNavigation>

        <router-view/>
    </div>
</template>

<script>
    import EvalonNavigation from "@/pages/EvalonNavigation";
    import EvSearch from "@/evalon-ui/form/search/ev-search";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";
    import EvFilterSelector from "@/evalon-ui/form/selector/ev-filter-selector";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";
    import {
        QUERY_PROJECTS,
        ROUTE_TO_API,
        ROUTE_TO_BRANCH,
        ROUTE_TO_DEFAULT_API,
        ROUTE_TO_STRUCT
    } from "@/store/documata_actions";

    export default {
        name: 'AppHolder',
        created() {
            let params = this.$route.params

            this.$store.dispatch(QUERY_PROJECTS).then(() => {
                if (this.onApi(this.$route)) {
                    if (this.isNoParams(params)) {
                        this.$store.dispatch(ROUTE_TO_DEFAULT_API).then(() => {
                            this.routeToBranch()
                        })

                        return
                    }

                    if (this.isRouteToApi(params)) {
                        this.$store.dispatch(ROUTE_TO_API, params)

                        return
                    }

                    if (this.isRouteToBranch(params)) {
                        this.$store.dispatch(ROUTE_TO_BRANCH, params)

                        return
                    }
                }

                if (this.onStruct(this.$route)) {
                    if (this.isNoParams(params)) {
                        this.$store.dispatch(ROUTE_TO_DEFAULT_API).then(() => {
                            this.routeToBranch()
                        })

                        return
                    }

                    if (this.isRouteToStruct(params)) {
                        this.$store.dispatch(ROUTE_TO_STRUCT, params);

                        return
                    }

                    if (this.isRouteToBranch(params)) {
                        this.$store.dispatch(ROUTE_TO_BRANCH, params)

                        return
                    }
                }
            })
        },
        computed: {
            project() {
                return this.$store.state.documata.project
            },
            module() {
                return this.$store.state.documata.module
            },
            branch() {
                return this.$store.state.documata.branch
            }
        },
        components: {EvFilterSelector, EvSelector, EvRowGutterM, EvSearch, EvalonNavigation},
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style>
    #app {
        position: relative;

        height: 100%;
    }

    * {
        margin: 0;

        padding: 0;

        box-sizing: border-box;
    }

    .holder {
        padding: 256px;
    }
</style>
