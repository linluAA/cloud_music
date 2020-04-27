import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'//路由

import store from "@/store/index.js"//vuex

import '@/style/border.css' //重置样式
import '@/style/reset.css'

import Vant from 'vant'; //vant-ui
import 'vant/lib/index.css';

import { Lazyload } from 'vant'; //懒加载

import FastClick from 'fastclick' //解决移动端500毫秒延迟
FastClick.attach(document.body)

Vue.use(Vant)
  .use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
