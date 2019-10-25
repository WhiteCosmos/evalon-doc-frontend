<script>
    import * as api from "@/api/api";

    export default {
        name: "EvalonDocApiMixin",
        methods: {
            registryProject(payload) {
                return api.registryProject(payload)
            },
            queryProjectModules(payload) {
                return api.queryProjectModules(payload)
            },
            queryRegistryProcess(payload) {
                return api.queryRegistryProcess(payload)
            },
            repositories(payload) {
                return api.repositories(payload)
            },
            branches(moduleId) {
                return api.branches(moduleId)
            },
            documentTree(branchId) {
                return api.documentTree(branchId)
            },
            documentContent(payload) {
                return api.documentContent(payload)
            },
            structTree(branchId) {
                return api.structTree(branchId)
            },
            structContent(payload) {
                return api.structContent(payload)
            },
            searchProjects(projectName) {
                return api.searchProjects(projectName)
            },
            searchBranches(projectId) {
                return api.searchBranches(projectId)
            },
        }
    }
</script>
