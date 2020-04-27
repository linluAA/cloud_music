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

import myPlugins from "@/plugins/index.js"//自定义插件（全局组件）

import { Tab, Tabs } from 'vant';
import { Divider } from 'vant';
import { Image as VanImage } from 'vant';

Vue
    .use(Vant)
    .use(myPlugins)
    .use(Tab)
    .use(Tabs)
    .use(Lazyload)
    .use(Divider)
    .use(VanImage);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
