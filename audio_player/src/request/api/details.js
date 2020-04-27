import { ajaxGet } from "@/utils/request.js"

//获取歌手详情接口
export function getArtists(config) {
    let url = "/artists"
    return ajaxGet(url,config)
}