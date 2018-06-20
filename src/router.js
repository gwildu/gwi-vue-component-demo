import Vue from 'vue'
import Router from 'vue-router'
import ComponentDemo from './views/ComponentDemo.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:component',
      component: ComponentDemo
    },
    {
      path: '/',
      component: Home
    }
  ]
})
