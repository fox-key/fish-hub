import * as actionTypes from './constants'
import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getArtistList
} from "../../../../../services/recommend/recommend";
import {CHANGE_HotRECOMMEND, CHANGE_NEWALBUM,CHANGE_SETTLE_SONGER} from "./constants";


const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
});


export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then((res) => {
            dispatch(changeTopBannerAction(res))
        })
    }
};


const changeHotRecommendAction = (res) => ({
    type: CHANGE_HotRECOMMEND,
    hotRecommends: res.result
})


export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then((res) => {
            dispatch(changeHotRecommendAction(res))
        })
    }
};


const changeNewAlbumAction = (res) => ({
    type: CHANGE_NEWALBUM,
    newAlbums: res.albums
})

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            console.log('ablummmmmmmmmmmm', res)
            dispatch(changeNewAlbumAction(res))
        })
    }
}


const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})


const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})


export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
            }
        });
    }
}


const changeSettleSingersAction = (res)=>({
    type:CHANGE_SETTLE_SONGER,
    settleSings:res.artists
})

export const getSettleSingers = (a,b)=>{
    return dispatch =>{
        getArtistList(a,b).then(res=>{
            dispatch(changeSettleSingersAction(res))
        })
    }
}
