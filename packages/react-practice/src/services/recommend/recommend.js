import request from "../request";

export  function getTopBanners(){
    return request(
        {
            url:'/banner',
            method:'GET'
        }
    )
}


export  function getHotRecommends(limit){
    return request(
        {
            url:'/personalized',
            method:'GET',
            params:{
                limit
            }
        }
    )
}


export  function getNewAlbums(limit){
    return request(
        {
            url:'/top/album',
            method:'GET',
            params:{
                limit
            }
        }
    )
}

export function getTopList(idx) {
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}

export function getArtistList(limit, cat) {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit
        }
    })
}
