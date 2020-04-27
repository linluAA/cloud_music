import Vue from "vue"
import VueRouter from "vue-router"
import notFout from "@/pages/notFout/notFout"//404
import home from "@/pages/home/home"//首页
import details from "@/pages/details/details"//详情页

Vue.use(VueRouter)

let routes = [
    {
        path: "/home",
        name: "home",
        alias: "/",
        component: home,
        meta: {
            keepAlive: true //需要被缓存的组件
        }
    },
    {
        path: "/details",
        name: "details",
        component: details,
        meta: {
            keepAlive: true //需要被缓存的组件
        }
    },
    {
        path: "*",
        name: "notFout",
        component: notFout
    }
]

export default new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})