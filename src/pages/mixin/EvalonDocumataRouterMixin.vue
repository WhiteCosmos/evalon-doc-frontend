<script>
    import {
        QUERY_API,
        QUERY_APIS,
        QUERY_BRANCHES, QUERY_STRUCT,
        QUERY_STRUCTS, ROUTE_TO_BRANCH,
        SET_API,
        SET_BRANCH,
        SET_STRUCT, SWITCH_API, SWITCH_BRANCH, SWITCH_MODULE, SWITCH_STRUCT
    } from "@/store/documata_actions";

    export default {
        name: "EvalonDocumataRouterMixin",
        computed: {
            projects() {
                return this.$store.state.documata.projects
            },
            branches() {
                return this.$store.state.documata.branches
            },
            project() {
                return this.$store.state.documata.project
            },
            module() {
                return this.$store.state.documata.module
            },
            branch() {
                return this.$store.state.documata.branch
            },
            repositoryName() {
                return encodeURIComponent(this.project.repositoryName)
            },
            projectName() {
                return encodeURIComponent(this.project.projectName)
            },
            moduleName() {
                if (this.module.appName) {
                    return encodeURIComponent(this.module.appName);
                } else {
                    return encodeURIComponent(this.module.moduleName);
                }
            },
            branchName() {
                return encodeURIComponent(this.branch.branchName)
            },
        },
        methods: {
            onApi(to) {
                return to.path.startsWith("/api")
            },

            onStruct(to) {
                return to.path.startsWith("/struct")
            },

            onDebug(to) {
                return to.path.startsWith("/debug")
            },

            isNoParams(params) {
                let repositoryName = params.repositoryName

                return !repositoryName
            },

            isRouteToApi(params) {
                let repositoryName = params.repositoryName

                let projectName = params.projectName

                let moduleName = params.moduleName

                let branchName = params.branchName

                let serviceQualifiedName = params.serviceQualifiedName

                let methodName = params.methodName

                return repositoryName && projectName && moduleName && branchName && serviceQualifiedName && methodName
            },

            isRouteToStruct(params) {
                let repositoryName = params.repositoryName

                let projectName = params.projectName

                let moduleName = params.moduleName

                let branchName = params.branchName

                let structQualifiedName = params.structQualifiedName

                return repositoryName && projectName && moduleName && branchName && structQualifiedName
            },

            isRouteToBranch(params) {
                let repositoryName = params.repositoryName

                let projectName = params.projectName

                let moduleName = params.moduleName

                return repositoryName && projectName && moduleName
            },

            switchModule(params) {
                this.$store.dispatch(SWITCH_MODULE, params).then(() => {
                    this.routeToBranch()
                })
            },

            switchBranch(params) {
                this.$store.dispatch(SWITCH_BRANCH, params).then(() => {
                    this.routeToBranch()
                })
            },

            switchApi(serviceQualifiedName, methodName) {
                let params = Object.assign(this.$route.params, {
                    serviceQualifiedName: serviceQualifiedName,
                    methodName: methodName
                })

                this.$store.dispatch(SWITCH_API, params).then(() => {
                    this.routeToApi(serviceQualifiedName, methodName)
                })
            },

            switchStruct(structQualifiedName) {
                let params = Object.assign(this.$route.params, {
                    structQualifiedName: structQualifiedName
                })

                this.$store.dispatch(SWITCH_STRUCT, params).then(() => {
                    this.routeToStruct(structQualifiedName)
                })
            },

            routeToRegistry() {
                this.$router.push({
                    path: `/registry`
                })
            },

            routeToBranch() {
                this.$router.push({
                    path: `/api/${this.repositoryName}/${this.projectName}/${this.moduleName}/${encodeURIComponent(this.branchName)}/`
                })
            },

            routeToApi(serviceQualifiedName, methodName) {
                this.$router.push({
                    path: `/api/${this.repositoryName}/${this.projectName}/${this.moduleName}/${this.branchName}/${encodeURIComponent(serviceQualifiedName)}/${encodeURIComponent(methodName)}`
                })
            },

            routeToStruct(structQualifiedName) {
                this.$router.push({
                    path: `/struct/${this.repositoryName}/${this.projectName}/${this.moduleName}/${this.branchName}/${encodeURIComponent(structQualifiedName)}`
                })
            },

            routeToUpate() {
                this.$router.push({
                    path: `/update`
                })
            }
        },
    }
</script>

