import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const req = require.context('./components/', true, /\.demo\.vue$/)

const demoComponents = {}
req.keys().forEach(filename => {
  const name = `${filename.split('.')[1].split('/')[1]}Demo`
  const component = req(filename).default
  demoComponents[name] = component
  Vue.component(name, component)
})

Vue.prototype.$demoComponents = demoComponents

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
