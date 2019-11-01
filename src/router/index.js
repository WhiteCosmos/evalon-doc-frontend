import Vue from 'vue'
import Router from 'vue-router'
import Playground from "@/pages/Playground";
import EvalonDocumataHolder from "@/pages/documata/EvalonDocumataHolder";
import EvalonDocumataRegistry from "@/pages/documata/EvalonDocumataRegistry";
import EvalonDocumataNotFound from "@/pages/documata/EvalonDocumataNotFound";
import EvalonDocumataUpdate from "@/pages/documata/EvalonDocumataUpdate";
import EvalonDocumataConfiguration from "@/pages/documata/EvalonDocumataConfiguration";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/api'
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
            path: '/config',
            name: 'Config',
            component: EvalonDocumataConfiguration,
        }
    ]
})
