/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


Vue.component('form-component', require('./components/ThinkForm.vue').default);
Vue.component('think-component', require('./components/ThinkComponent.vue').default);
Vue.component('mythink-component', require('./components/MyThinkComponent.vue').default);



const app = new Vue({
    el: '#app',
});
