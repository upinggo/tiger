// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import global_ from '@/components/global/global'

Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false
require('../src/assets/js/jiathis.js');//引用分享(jiathis)js脚本
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
