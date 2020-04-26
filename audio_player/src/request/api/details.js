import { ajaxPost } from "@/utils/request.js"

//获取详情页接口
export function getDetailGoodsInfo(data,config) {
    let url = "/details"
    return ajaxPost(url,data,config)
}