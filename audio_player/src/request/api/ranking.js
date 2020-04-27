import { ajaxGet } from "@/utils/request.js"

//获取轮播图接口
export function getRankIng(config) {
    let url = "/top/list"
    return ajaxGet(url,config)
}
