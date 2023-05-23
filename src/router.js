export default new VueRouter({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Vue.component('BlankLayout', require('./layouts/Blank.vue')),
            children: [
                // Home
                {
                    name: 'home',
                    path: '/',
                    component: Vue.component('Home', require('./pages/Home.vue')),
                },
            ]
        },
    ],
});