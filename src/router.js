import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('./components/Home.vue'),
    },
    {
        name: 'Watch',
        path: '/watch',
        component: () => import('./components/watch/Watch.vue')
    },
    {
        name: 'Explore',
        path: '/explore',
        component: () => import('./components/Explore.vue')
    },
    
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})