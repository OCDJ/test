import Vue from 'vue'
import Router from 'vue-router'

import Circuits from './components/Circuits'
import Circuit from './components/calc/Circuit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: "Main Page", component: Circuits },
        { path: '/:circuit', name: "Analysis", component: Circuit }
    ],
})