import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Playground from "@/pages/Playground";
import EvalonDocumataHolder from "@/pages/documata/EvalonDocumataHolder";
import EvalonDocumataRegistry from "@/pages/documata/EvalonDocumataRegistry";
import EvalonDocumataRegistryReport from "@/pages/documata/EvalonDocumataRegistryReport";
import EvalonDocumataNotFound from "@/pages/documata/EvalonDocumataNotFound";
import EvalonDocumataUpdate from "@/pages/documata/EvalonDocumataUpdate";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/playground',
            name: 'Playground',
            component: Playground
        },
        {
            path: '/api',
            name: 'api',
            component: EvalonDocumataHolder
        },
        {
            path: '/api/:repositoryName/:projectName/:moduleName',
            name: 'api',
            component: EvalonDocumataHolder
        },
        {
            path: '/api/:repositoryName/:projectName/:moduleName/:branchName',
            name: 'api',
            component: EvalonDocumataHolder
        },
        {
            path: '/api/:repositoryName/:projectName/:moduleName/:branchName/:serviceQualifiedName/:methodName',
            name: 'api',
            component: EvalonDocumataHolder
        },
        {
            path: '*',
            name: "not found",
            component: EvalonDocumataNotFound,
        },
        {
            path: '/struct/:repositoryName/:projectName/:moduleName/:branchName/:structQualifiedName',
            name: 'struct',
            component: EvalonDocumataHolder
        },
        {
            path: '/registry',
            name: 'Registry',
            component: EvalonDocumataRegistry
        },
        {
            path: '/update',
            name: 'Update',
            component: EvalonDocumataUpdate
        },
        {
            path: '/report',
            name: 'Report',
            component: EvalonDocumataRegistryReport
        }
    ]
})
