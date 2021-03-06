import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

Vue.use(VueRouter)

const router =  new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { x: 0, y: 700}
		}
	}
})
router.beforeEach((to, from, next) => {
	console.log('global for each')
	next()
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
