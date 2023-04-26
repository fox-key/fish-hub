import {
    getDjRadioCatelist,
    getDjRadioRecommend,
    getDjRadios
} from "../../../../../services/djradio";

import * as actionTypes from './contans'


const changeCategoryAction = (res) => ({
    type: actionTypes.CHANGE_RADIO_CATEGORY,
    categories: res.categories
})

const changeRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_RECOMMENDS,
    recommends: res.djRadios
})

const changeRadiosSction = (res)=> ({
    type: actionTypes.CHANGE_RADIO_CATEGORY,
    categories: res.categories
})



export const changeCurrentIdActio = (id) => ({
    type: actionTypes.CHANGE_CURRENT_ID,
    currentId: id
})

export const getRadioCategories = () => {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            dispatch(changeCategoryAction(res));
            const currentId = res.categories[0].id;
            dispatch(changeCurrentIdActio(currentId));
        })
    }
}

export const getRadioRecommend = (currentId) => {
    return dispatch => {
        getDjRadioRecommend(currentId).then(res => {
            dispatch(changeRecommendsAction(res));
        })
    }
}

export  const  getRadios = (currentId,offset)=>{
    return dispatch =>{
        getDjRadios(currentId,30,offset).then(res=>{
            dispatch(changeRadiosSction(res))
        })
    }
}
