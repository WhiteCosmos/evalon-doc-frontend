import {
    CLEAR_CONTENT,
    FIND_AND_SET_BRANCH,
    FIND_AND_SET_MODULE,
    FIND_AND_SET_PROJECT, LOAD_CONTENTS,
    QUERY_API,
    QUERY_APIS,
    QUERY_BRANCHES,
    QUERY_PROJECTS,
    QUERY_STRUCT,
    QUERY_STRUCTS,
    ROUTE_TO_API,
    ROUTE_TO_BRANCH,
    ROUTE_TO_DEFAULT_API,
    ROUTE_TO_STRUCT,
    SET_API,
    SET_APIS,
    SET_BRANCH,
    SET_BRANCHES,
    SET_MODULE,
    SET_PROJECT,
    SET_PROJECTS,
    SET_STRUCT,
    SET_STRUCTS, SWITCH_API, SWITCH_BRANCH, SWITCH_MODULE, SWITCH_STRUCT,
} from "@/store/documata_actions";

import * as api from "@/api/api"
import {read_params, save_params} from "@/store/localstorage";

export const documata = {
    state: {
        error: undefined,

        secret_token: undefined,

        projects: [],

        branches: [],

        favorites: [],

        /*
            {
                projectId: 123456,
                projectName: "foo.project"
                repositoryName: "napos.backend",
                defaultBranchName: "",
            }
        */
        project: undefined,

        /*
            {
                moduleId: 0,
                moduleName: "foo-service-api",
                appName: "foo.service.api",
                teamName: "XXX组",
                branches: []
            }
         */
        module: undefined,

        /*
            {
                branchId: 0,
                branchName: "master",
                isDefault: false
            }
         */
        branch: undefined,

        documentTree: [], // List<ClassMethod>

        documentContent: undefined, // ClassMethod

        structTree: [], // List<ClassField>

        structContent: undefined, // ClassField
    },
    mutations: {
        [SET_PROJECTS](state, projects) {
            state.projects = projects
        },

        [SET_PROJECT](state, project) {
            state.project = project
        },

        [SET_MODULE](state, module) {
            state.module = module
        },

        [SET_BRANCHES](state, branches) {
            state.branches = branches
        },

        [SET_BRANCH](state, branch) {
            state.branch = branch
        },

        [SET_APIS](state, apis) {
            state.documentTree = apis
        },

        [CLEAR_CONTENT](state) {
            state.structContent = undefined

            state.documentContent = undefined
        },

        [SET_API](state, api) {
            state.structContent = undefined

            state.documentContent = api
        },

        [SET_STRUCTS](state, structs) {
            state.structTree = structs
        },

        [SET_STRUCT](state, struct) {
            state.documentContent = undefined

            state.structContent = struct
        },
    },
    actions: {
        // actions used in app

        async [QUERY_PROJECTS]({commit}) {
            await api.repositories().then(res => {
                let projects = res.result

                commit(SET_PROJECTS, projects)
            })
        },

        async [QUERY_BRANCHES]({commit, state}) {
            let module = state.module

            await api.branches(module.moduleId).then(res => {
                let branches = res.result

                commit(SET_BRANCHES, branches)
            })
        },

        async [QUERY_APIS]({commit, state}) {
            let branch = state.branch

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })
        },

        async [QUERY_STRUCTS]({commit, state}) {
            let branch = state.branch

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })
        },

        [QUERY_API]({commit, state}, params) {
            api.documentContent(params).then(res => {
                commit(SET_API, res.result)
            })
        },

        [QUERY_STRUCT]({commit}, params) {
            api.structContent(params).then(res => {
                commit(SET_STRUCT, res.result)
            })
        },

        async [LOAD_CONTENTS]({commit, state}) {
            let branch = state.branch

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })
        },

        async [SWITCH_MODULE]({dispatch, commit, state}, params) {
            commit(CLEAR_CONTENT)

            await dispatch(FIND_AND_SET_PROJECT, params) // switch repository and project

            await dispatch(FIND_AND_SET_MODULE, params) // switch module

            await dispatch(QUERY_BRANCHES) // get new branches

            let branchName = params.branchName

            if (branchName) {
                await dispatch(FIND_AND_SET_BRANCH, params)
            } else {
                commit(SET_BRANCH, state.branches[0]); // set default branch
            }

            await dispatch(LOAD_CONTENTS)
        },

        async [SWITCH_BRANCH]({dispatch, commit, state}, params) {
            commit(CLEAR_CONTENT)

            await dispatch(FIND_AND_SET_BRANCH, params)

            await dispatch(LOAD_CONTENTS)
        },

        async [SWITCH_API]({dispatch, commit, state}, params) {
            await dispatch(QUERY_API, params)
        },

        async [SWITCH_STRUCT]({dispatch, commit, state}, params) {
            await dispatch(QUERY_STRUCT, params)
        },

        // actions used in router

        async [FIND_AND_SET_PROJECT]({dispatch, commit, state}, params) {
            await dispatch(QUERY_PROJECTS) // refresh projects

            let repositoryName = params.repositoryName

            let projectName = params.projectName

            let project = state.projects.find(p => {
                return p.repositoryName === repositoryName && p.projectName === projectName
            })

            commit(SET_PROJECT, project)
        },

        async [FIND_AND_SET_MODULE]({dispatch, commit, state}, params) {
            let moduleName = params.moduleName

            let module = state.project.modules.find(m => {
                return m.appName === moduleName
            })

            commit(SET_MODULE, module)

            await dispatch(QUERY_BRANCHES) // reset branches after module change
        },

        async [FIND_AND_SET_BRANCH]({dispatch, commit, state}, params) {
            let branchName = params.branchName

            let branch

            if (!branchName) {
                branch = state.branches[0]
            } else {
                branch = state.branches.find(b => {
                    return b.branchName === branchName
                });
            }

            commit(SET_BRANCH, branch)
        },

        async [ROUTE_TO_BRANCH]({dispatch, commit, state}, params) {
            commit(SET_API, undefined)

            commit(SET_STRUCT, undefined)

            await dispatch(FIND_AND_SET_PROJECT, params)

            await dispatch(FIND_AND_SET_MODULE, params)

            await dispatch(FIND_AND_SET_BRANCH, params)

            let branch = state.branch

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })
        },

        async [ROUTE_TO_API]({dispatch, commit, state}, params) {
            await dispatch(FIND_AND_SET_PROJECT, params)

            await dispatch(FIND_AND_SET_MODULE, params)

            await dispatch(FIND_AND_SET_BRANCH, params)

            let branch = state.branch

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })

            await dispatch(QUERY_API, params)
        },

        async [ROUTE_TO_STRUCT]({dispatch, commit, state}, params) {
            await dispatch(FIND_AND_SET_PROJECT, params)

            await dispatch(FIND_AND_SET_MODULE, params)

            await dispatch(FIND_AND_SET_BRANCH, params)

            let branch = state.branch

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })

            await dispatch(QUERY_STRUCT, params)
        },

        async [ROUTE_TO_DEFAULT_API]({dispatch, commit, state}) {
            let params = read_params()

            if (params) {
                let serviceQualifiedName = params.serviceQualifiedName

                let methodName = params.methodName

                if (serviceQualifiedName && methodName) {
                    dispatch(ROUTE_TO_API, params);
                } else {
                    dispatch(ROUTE_TO_BRANCH, params);
                }
            }

            let project = state.projects[0];

            commit(SET_PROJECT, project)

            let module = project.modules[0]

            commit(SET_MODULE, module)

            await dispatch(QUERY_BRANCHES)

            let branch = state.branches[0]

            commit(SET_BRANCH, branch)

            await api.documentTree(branch.branchId).then(res => {
                commit(SET_APIS, res.result)
            })

            await api.structTree(branch.branchId).then(res => {
                commit(SET_STRUCTS, res.result)
            })

            save_params({
                repositoryName: project.repositoryName,
                projectName: project.projectName,
                moduleName: module.appName,
                branchName: branch.branchName,
            })
        },
    }
}
