require('./bootstrap');

const config = require('./config'),
      router = config.router,
      store = config.store;

window.VueInstance = new Vue({
    router,
    store,
}).$mount('#app-vue');