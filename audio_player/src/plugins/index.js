// import tabBar from "@/components/tabBar"

let myPlugins ={}

myPlugins.install = function(Vue){
    // Vue.component("tabBar",tabBar) //底部菜单栏

    Vue.prototype.imgGlobalFilter = function(url){ //图片地址过滤
        return url.replace("http://47.98.159.95/m-api","http://localhost:3000")
    }

}

export default myPlugins