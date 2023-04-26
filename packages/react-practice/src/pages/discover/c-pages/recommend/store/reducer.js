import * as actionTypes from './constants'
import {
    Map
} from 'immutable'

const defaustState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],

    upRanking: {},
    newRanking: {},
    originRanking: {},

    settleSings: [],
})


function reducer(state = defaustState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners);
        case actionTypes.CHANGE_HotRECOMMEND:
            return state.set('hotRecommends', action.hotRecommends);
        case actionTypes.CHANGE_NEWALBUM:
            return state.set('newAlbums', action.newAlbums);
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", action.upRanking);
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.newRanking);
        case actionTypes.CHANGE_ORIGIN_RANKING:
            return state.set("originRanking", action.originRanking);
        case actionTypes.CHANGE_SETTLE_SONGER:
            return state.set('settleSings',action.settleSings)
        default:
            return state;
    }
}


export default reducer
