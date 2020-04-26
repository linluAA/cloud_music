import { ajaxGet } from "@/utils/request.js"

//获取首页接口
export function getIndexInfo(config) {
    let url = "/home/ds"
    return ajaxGet(url,config)
}

