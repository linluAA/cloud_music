import { ajaxGet } from "@/utils/request.js"

//获取首页推荐歌单详情页接口
export function detail(config){
    let url = "/playlist/detail"
    return ajaxGet(url,config)
}