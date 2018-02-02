import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import { routes } from './routes.js'
import { store } from './store/store.js'
Vue.use(VueRouter);
Vue.use(VueResource); 

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
})

Vue.http.options.root = 'https://vue-trade-679eb.firebaseio.com/';

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	linkActiveClass: "active"
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
