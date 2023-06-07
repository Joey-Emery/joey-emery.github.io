/*
|--------------------------------------------------------------------------
| DOM Related Packages
|--------------------------------------------------------------------------
|
| Any packages or libraries relating to the DOM or DOM manipulation are
| declared and bound below.
|
*/

window.$ = window.jQuery = require('jquery'); // jQuery
window._ = require('lodash'); // Underscore
require('bootstrap-sass'); // Bootstrap
window.Swal = require('sweetalert2'); // Sweetalert
window.ityped = require('ityped'); // iTyped
window.GLightbox = require('glightbox'); // gLightbox

/*
|--------------------------------------------------------------------------
| VueJS Packages
|--------------------------------------------------------------------------
|
| Any packages or libraries relating to VueJS are declared and bound below.
|
*/
require('es6-promise').polyfill(); // Fix for older devices requiring polyfill
window.Vue = require('vue'); // Vue, obviously.
window.VueRouter = require('vue-router').default; Vue.use(VueRouter); // VueRouter
window.Vuex = require('vuex'); // Vue Store
window.axios = require('axios'); // Axios HTTP library