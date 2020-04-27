import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'//路由

import store from "@/store/index.js"//vuex

import '@/style/border.css' //重置样式
import '@/style/reset.css'

import Vant from 'vant'; //vant-ui
import 'vant/lib/index.css';

import FastClick from 'fastclick' //解决移动端500毫秒延迟
FastClick.attach(document.body)

import myPlugins from "@/plugins/index.js"//自定义插件（全局组件）

import { Tab, Tabs } from 'vant';

Vue
    .use(Vant)
    .use(myPlugins)
    .use(Tab)
    .use(Tabs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
