import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            path: '/',
            component: () => import('@/views/Main.vue'),
        },
    ],
})