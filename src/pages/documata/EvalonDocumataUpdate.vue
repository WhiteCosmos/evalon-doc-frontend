<template>
    <div class="root">

        <!-- Update Page -->

        <ev-page :padding-l=128 :padding-r=128 v-if="is(REGISTRY_PROJECT)">
            <ev-row-gutter :gutter="128"></ev-row-gutter>

            <ev-repeat
                title="您选择的项目正在更新中，请稍候。"
                message="正在初始化"
                :payload="payload"
                :handler="queryRegistryProcess"></ev-repeat>
        </ev-page>

        <!-- Report Page -->

        <EvalonDocumataRegistryReport v-if="is(AFTER_REGISTRY_PROJECT)" :report="report"></EvalonDocumataRegistryReport>
    </div>
</template>

<script>
    import EvPage from "@/evalon-ui/page/EvPage";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvSearch from "@/evalon-ui/form/search/ev-search";
    import EvSelectorGroup from "@/evalon-ui/form/selector/ev-selector-group";
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvalonDocumataModules from "@/components/documata/EvalonDocumataModules";
    import EvRowGutterL from "@/evalon-ui/layout/ev-row-gutter-l";
    import EvFilterSelector from "@/evalon-ui/form/selector/ev-filter-selector";
    import EvButton from "@/evalon-ui/button/EvButton";
    import EvColGutterMax from "@/evalon-ui/layout/ev-col-gutter-max";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvalonDocumataRegistryReport from "@/pages/documata/EvalonDocumataRegistryReport";
    import EvRoundButton2 from "@/evalon-ui/button/ev-round-button-2";
    import EvRepeat from "@/evalon-ui/other/ev-repeat";
    import EvSquareLoading from "@/evalon-ui/loading/ev-square-loading";
    import EvRowGutter from "@/evalon-ui/layout/ev-row-gutter";
    import EvalonDocApiMixin from "@/api/EvalonDocApiMixin";

    export default {
        name: "EvalonDocumataUpdate",
        created() {
            this.registry([
                {
                    name: this.REGISTRY_PROJECT,
                },
                {
                    name: this.AFTER_REGISTRY_PROJECT,
                },
                {
                    name: this.LOAD_PROJECT_MODULES_ERROR,
                }
            ])

            this.to(this.REGISTRY_PROJECT)
        },
        mounted() {
            this.registryProject(this.payload).then(res => {
                this.report = res.result

                this.to(this.AFTER_REGISTRY_PROJECT)
            })
        },
        computed: {
            payload() {
                return {
                    repository: {
                        repositoryName: this.project.repositoryName
                    },

                    project: this.project,

                    modules: [this.module],

                    branch: this.branch,

                    update: true,
                }
            },
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
        data() {
            return {
                errorMessage: "",

                report: undefined,

                BEFORE_SELECT_PROJECT: "BEFORE_SELECT_PROJECT",

                AFTER_SELECT_PROJECT: "AFTER_SELECT_PROJECT",

                BEFORE_SELECT_BRANCH: "BEFORE_SELECT_BRANCH",

                AFTER_SELECT_BRANCH: "AFTER_SELECT_BRANCH",

                LOAD_PROJECT_MODULES_ERROR: "LOAD_PROJECT_MODULES_ERROR",

                BEFORE_REGISTRY_PROJECT: "BEFORE_REGISTRY_PROJECT",

                REGISTRY_PROJECT: "REGISTRY_PROJECT",

                AFTER_REGISTRY_PROJECT: "AFTER_REGISTRY_PROJECT",
            }
        },
        methods: {
            back() {
                // if (this.report && this.report.status)
                this.$router.back();
            },
            onSearchClean() {
                this.to(this.BEFORE_SELECT_PROJECT)
            },

            beforeSelectProject() {
                // this.project = undefined

                this.branches = []

                this.modules = []

                this.errorMessage = ""
            },

            onSelectProject(p) {
                this.payload.project = p

                this.payload.repository = {
                    repositoryName: p.repositoryName
                }

                this.to(this.AFTER_SELECT_PROJECT)
            },

            afterSelectProject() {
                let projectId = this.payload.project.projectId

                this.searchBranches(projectId).then(res => {
                    if (!res.result || res.result.length === 0) {
                        this.errorMessage = "没有找到分支"

                        this.to(this.LOAD_PROJECT_MODULES_ERROR)

                        return
                    }

                    this.branches = res.result;

                    this.to(this.BEFORE_SELECT_BRANCH)
                })
            },

            onSelectBranch(b) {
                this.payload.branch = b

                this.to(this.AFTER_SELECT_BRANCH)
            },

            afterSelectBranch() {
                this.queryProjectModules(this.payload).then(res => {
                    if (res.hasError) {
                        this.errorMessage = res.errorMessage

                        this.to(this.LOAD_PROJECT_MODULES_ERROR)

                        return
                    }

                    this.modules = res.result

                    this.to(this.BEFORE_REGISTRY_PROJECT)
                }).catch(err => {
                    //TODO 妥善处理
                })
            },

            onSelectModule(m) {

            },

            doSelectBranch(branch) {
                // this.to(this.AFTER_SELECT_BRANCH)
                //
                // getModulesApi.then(res => {
                //     this.modules = res.result
                //
                //     this.to(this.BEFORE_REGISTRY_PROJECT)
                // }).catch(err => {
                //
                // })
            },

            doRegistryProject() {
                this.payload.modules = this.modules

                this.to(this.REGISTRY_PROJECT)

                this.registryProject(this.payload).then(res => {
                    this.report = res.result

                    this.to(this.AFTER_REGISTRY_PROJECT)
                })
            },

            afterRegistryProject(report) {
                // this.route_to_app(project.apps[0])
            }
        },
        components: {
            EvRowGutter,
            EvSquareLoading,
            EvRepeat,
            EvRoundButton2,
            EvalonDocumataRegistryReport,
            EvRoundButton,
            EvColGutter16Px,
            EvColGutterMax,
            EvButton,
            EvFilterSelector,
            EvRowGutterL, EvalonDocumataModules, EvSelector, EvSelectorGroup, EvSearch, EvRowGutterM, EvPage
        },
        mixins: [
            EvalonDocApiMixin,

            EvAbstractComponent,

            EvalonDocumataRouterMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui";

    .root {
        position: relative;
    }

    .ev-selector-group-container {
        position: relative;

        height: 48px;
    }

    .ev-selector-group-offset {
        position: absolute;

        left: -16px;
    }
</style>
