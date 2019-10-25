<template>
    <div class="evalon-documata-registry">

        <!-- Registry Page -->

        <ev-page :padding-l=128 :padding-r=128 v-show="!is(REGISTRY_PROJECT) && !is(AFTER_REGISTRY_PROJECT)">
            <div class="ev-row ev-col-center">
                <h2>欢迎使用自助接入</h2>

                <ev-col-gutter-max></ev-col-gutter-max>

                <!--                <ev-button @click.native="routeToDocument">返回</ev-button>-->

                <ev-round-button @click.native="back">返回</ev-round-button>

                <ev-col-gutter-16-px></ev-col-gutter-16-px>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <h4 class="ev-red">搜索项目前，请先为 ele_evalon@alibaba-inc.com 开通相关 GITLAB 仓库的读取权限。</h4>

            <ev-row-gutter-l></ev-row-gutter-l>

            <div class="ev-selector-group-container">
                <ev-selector-group class="ev-selector-group-offset">
                    <ev-search
                        :width="600"
                        placeholder="搜索仓库名称..."
                        :options-provider="searchProjects"
                        option-head-key="projectName"
                        option-subhead-key="projectDescription"
                        :select-callback="onSelectProject"
                        :clean-callback="onSearchClean"
                        :is-locked="is(AFTER_SELECT_BRANCH)"></ev-search>

                    <ev-selector
                        :is-locked="is(BEFORE_SELECT_PROJECT) || is(AFTER_SELECT_BRANCH) || is(LOAD_PROJECT_MODULES_ERROR)"
                        :width="320"
                        placeholder="选择分支"
                        :has-default-option="false"
                        :options="branches"
                        option-head-key="branchName"
                        :select-callback="onSelectBranch"></ev-selector>
                </ev-selector-group>
            </div>

            <ev-row-gutter-m></ev-row-gutter-m>

            <h6 class="ev-red" v-show="is(BEFORE_SELECT_BRANCH)">请选择需要接入的分支</h6>

            <h6 class="ev-blue" v-show="is(AFTER_SELECT_BRANCH)">正在读取模块信息...请稍候</h6>

            <h6 class="ev-red" v-show="is(LOAD_PROJECT_MODULES_ERROR)">{{ errorMessage }}</h6>

            <EvalonDocumataModules v-show="is(BEFORE_REGISTRY_PROJECT)" :modules="modules"></EvalonDocumataModules>

            <div class="ev-row ev-center" v-show="is(BEFORE_REGISTRY_PROJECT)">
                <ev-round-button-2 @click.native="doRegistryProject">开始接入</ev-round-button-2>
            </div>
        </ev-page>

        <!-- Loading Page -->

        <ev-page :padding-l=128 :padding-r=128 v-if="is(REGISTRY_PROJECT)">
            <ev-row-gutter :gutter="128"></ev-row-gutter>

            <ev-repeat
                :title="message"
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
        name: "EvalonDocumataRegistry",
        created() {
            this.registry([
                {
                    name: this.BEFORE_SELECT_PROJECT,

                    before: this.beforeSelectProject,
                },
                {
                    name: this.AFTER_SELECT_PROJECT,

                    after: this.afterSelectProject,
                },
                {
                    name: this.BEFORE_SELECT_BRANCH,
                },
                {
                    name: this.AFTER_SELECT_BRANCH,

                    after: this.afterSelectBranch,
                },
                {
                    name: this.BEFORE_REGISTRY_PROJECT,
                },
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
        },
        props: {
            update: {
                type: Boolean,

                default: false,
            }
        },
        mounted() {
            this.payload.repository = undefined

            this.payload.project = undefined

            this.payload.modules = undefined

            this.payload.branch = undefined
        },
        data() {
            return {
                payload: {
                    repository: undefined,

                    project: undefined,

                    modules: undefined,

                    branch: undefined,
                },

                branches: [],

                modules: [],

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
        computed: {
            message() {
                return this.update ? "您选择的项目正在更新中，请稍候。" : "您选择的项目正在接入中，请稍候。"
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

    .evalon-documata-registry {
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
