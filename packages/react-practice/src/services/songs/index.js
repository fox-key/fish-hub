import request from '../request'
export function getSongCategory() {
    return request({
        url: "/playlist/catlist"
    })
}
export function getSongCategoryList(cat='全部', limit=35,offset=0) {
    return request({
        url: "/top/playlist",
        params: {
            cat,
            limit,
            offset
        }
    })
}
