import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () =>
    import ('views/home.vue')


export default new Router({
    mode: 'history',
    routes: [{ path: '', redirect: 'home' },
        { path: '/home', component: home },

    ]
})