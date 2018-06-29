// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from  'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import FastClick from 'fastclick'

import 'mint-ui/lib/style.css'

Vue.use(Mint)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
