// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import $ from 'jquery'
// import laydate from 'layui-laydate'
import global_ from '@/components/global/global'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: '../static/error.png',
    loading: '../static/img/blogo.jpg',
    attempt: 1
});
Vue.use(ElementUI);
// Vue.prototype.$laydate=laydate
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false
require('../src/assets/js/jiathis.js');//引用分享(jiathis)js脚本
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
    render: h => h(App)
})
