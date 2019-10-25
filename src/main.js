// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppHolder'
import router from './router'
import Vuex from 'vuex'
import {documata} from "@/store/documata"
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(require('vue-shortkey'))

Vue.use(require('vue-cookies'))

Vue.use(Vuex)

Vue.use(VueClipboard)

let store = new Vuex.Store({
    modules: {
        documata
    },
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
