import Vue from "vue"
import VueRouter from "vue-router"
import notFout from "@/pages/notFout/notFout"//404
import home from "@/pages/home/home"//首页
import details from "@/pages/details/details"//详情页
import recommend from "@/pages/home/recommend/recommend" //排行榜
import ranking from "@/pages/home/ranking/ranking" //排行榜
import singer from "@/pages/home/singer/singer" //歌手
import music from "@/pages/home/music/music" //歌曲播放器
Vue.use(VueRouter)

let routes = [
    {
        path: "/home",
        alias: "/",
        name: "home",
        component: home,
        meta: {
            keepAlive: true //需要被缓存的组件
        },
        children: [
            {
                path: '/recommend',
                alias: "/",
                name: "recommend",
                component: recommend
            },
            {
                path: '/ranking',
                name: "ranking",
                component: ranking
            },
            {
                path: '/singer',
                name: 'singer',
                component: singer
            },
            {
                path: '/music',
                name: 'music',
                component: music
            }

        ]
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