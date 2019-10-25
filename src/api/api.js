import {get, post} from "@/api/http";

export const registryProject = async (payload) => post('doc/registryProject', {
    payload: payload
})

export const queryProjectModules = async (payload) => post('doc/queryProjectModules', {
    payload: payload
})

export const queryRegistryProcess = async (payload) => post('doc/queryRegistryProcess', {
    payload: payload
})

export const repositories = async (payload) => get('doc/repositories', {
    payload: payload
})

export const branches = async (moduleId) => get('doc/branches', {
    moduleId: moduleId
})

export const documentTree = async (branchId) => get('doc/documentTree', {
    branchId: branchId
})

export const documentContent = async (payload) => get('doc/documentContent', payload)

export const structTree = async (branchId) => get('doc/structTree', {
    branchId: branchId
})

export const structContent = async (payload) => get('doc/structContent', payload)

export const searchProjects = async (projectName) => get('doc/searchProjects', {
    projectName: projectName
})

export const searchBranches = async (projectId) => get('doc/searchBranches', {
    projectId: projectId
})
