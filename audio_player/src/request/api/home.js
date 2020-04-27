import { ajaxGet } from "@/utils/request.js"

//获取轮播图接口
export function getIndexInfo(config) {
    let url = "/banner"
    return ajaxGet(url,config)
}

