import {configure} from '@storybook/vue'
import Vue from 'vue'

const req = require.context('gwi-vue-components', true, /\.vue$/)

req.keys().forEach(filename => {
  const name = filename.split('.')[1].split('/')[1]
  const Comp = req(filename)
  Vue.component(name, Comp)
})

function loadStories () {
  require('../src/storybook')
}


configure(loadStories, module)



