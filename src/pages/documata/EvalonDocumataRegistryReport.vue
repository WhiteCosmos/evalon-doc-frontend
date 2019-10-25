<template>
    <ev-page :padding-l="72" :padding-r="72">
        <div class="ev-row ev-col-center">
            <h1>接入报告</h1>

            <ev-col-gutter-max></ev-col-gutter-max>

            <ev-round-button @click.native="back">返回</ev-round-button>
        </div>

        <ev-row-gutter-40-px></ev-row-gutter-40-px>

        <ev-title>项目信息</ev-title>

        <ev-title-value title="所属仓库" :value="report.repositoryName"></ev-title-value>

        <ev-title-value title="项目名称" :value="report.projectName"></ev-title-value>

        <ev-title-value title="分支名称" :value="report.branchName"></ev-title-value>

        <ev-title-value title="状态" :value="registryStatus" :value-color="statusColor"></ev-title-value>

        <div v-if="isRegistrySuccess">
            <ev-row-gutter-32-px></ev-row-gutter-32-px>

            <ev-title>模块列表</ev-title>

            <registered-module v-for="module in report.registeredModules" :module="module"></registered-module>
        </div>

        <div v-if="isRegistrySuccess && report.registeredExceptions && report.registeredExceptions.length !== 0">
            <ev-row-gutter-32-px></ev-row-gutter-32-px>

            <ev-title>异常列表</ev-title>

            <registered-exception v-for="exception in report.registeredExceptions"
                                  :exception="exception"></registered-exception>
        </div>

        <div v-if="isServerErrror">
            <ev-row-gutter-32-px></ev-row-gutter-32-px>

            <ev-title>异常堆栈</ev-title>

            <registered-exception v-for="exception in report.registeredExceptions"
                                  :exception="exception"></registered-exception>
        </div>

        <div v-if="!isServerErrror">
            <ev-row-gutter-32-px></ev-row-gutter-32-px>

            <ev-title>构建日志</ev-title>

            <ev-paragraph :text="report.buildLog"></ev-paragraph>
        </div>

        <ev-row-gutter-32-px></ev-row-gutter-32-px>

        <div v-if="isRegistrySuccess">
            <ev-title>性能报告</ev-title>

            <ev-title-value title="Git 版本" value="2.23"></ev-title-value>

            <ev-title-value title="Git Clone 耗时" value="24 秒"></ev-title-value>

            <ev-title-value title="Gradle 版本" value="4.9"></ev-title-value>

            <ev-title-value title="Gradle 构建命令" value="gradle clean build"></ev-title-value>

            <ev-title-value title="Gradle 构建耗时" value="2 分 21 秒"></ev-title-value>

            <ev-title-value title="解析文档耗时" value="1 分 11 秒"></ev-title-value>

            <ev-title-value title="保存文档耗时" value="6 秒"></ev-title-value>

            <ev-row-gutter-32-px></ev-row-gutter-32-px>
        </div>

    </ev-page>
</template>

<script>
    import EvPage from "@/evalon-ui/page/EvPage";
    import EvTitle from "@/evalon-ui/typography/ev-title";
    import EvRowGutter40Px from "@/evalon-ui/layout/ev-row-gutter-40-px";
    import EvTitleValue from "@/evalon-ui/typography/ev-title-value";
    import EvRowGutter32Px from "@/evalon-ui/layout/ev-row-gutter-32-px";
    import RegisteredException from "@/components/documata/RegisteredException";
    import RegisteredModule from "@/components/documata/RegisteredModule";
    import EvParagraph from "@/evalon-ui/typography/ev-paragraph";
    import EvRoundButton from "@/evalon-ui/button/ev-round-button";
    import EvColGutterMax from "@/evalon-ui/layout/ev-col-gutter-max";
    import EvalonDocumataRouterMixin from "@/pages/mixin/EvalonDocumataRouterMixin";

    export default {
        name: "EvalonDocumataRegistryReport",
        props: {
            report: {type: Object}
        },
        computed: {
            hasException() {
                return this.report && this.report.registeredExceptions.length !== 0
            },
            isRegistrySuccess() {
                return this.report.registryStatus.name === "SUCCESS"
            },
            isServerErrror() {
                return this.report.registryStatus.name === "SERVER_ERROR"
            },
            registryStatus() {
                let status = this.report.registryStatus.name

                switch (status) {
                    case "CLONE_FAILED":
                        return "项目克隆失败"
                    case "BUILD_FAILED":
                        return "项目构建失败"
                    case "SAVE_FAILED":
                        return "项目保存失败"
                    case "NO_SERVICE":
                        return "没有发现接口"
                    case "SERVER_ERROR":
                        return "服务器异常"
                    case "SUCCESS":
                        return "接入成功"
                }
            },
            statusColor() {
                return {
                    'ev-red': !this.isRegistrySuccess,
                    'ev-green': this.isRegistrySuccess
                }
            }
        },
        methods: {
            back() {
                if (this.isRegistrySuccess) {
                    let repositoryName = this.report.repositoryName;

                    let projectName = this.report.projectName

                    let branchName = this.report.branchName

                    let module = this.report.registeredModules[0] // get default module

                    this.switchModule({
                        repositoryName: repositoryName,

                        projectName: projectName,

                        moduleName: module.appName,

                        branchName: branchName
                    })
                } else {
                    this.$router.go(0) // reload page
                }
            }
        },
        components: {
            EvColGutterMax,
            EvRoundButton,
            EvParagraph,
            RegisteredModule,
            RegisteredException, EvRowGutter32Px, EvTitleValue, EvRowGutter40Px, EvTitle, EvPage
        },
        mixins: [
            EvalonDocumataRouterMixin
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

</style>
