

import {Map} from 'immutable'
import *as constants from './constans'


const defaultState = Map({
    category:[],
    currentCategory:'全部',
    categorySongs:{}
})


export default (state = defaultState,action)=>{
    switch (action.type){
        case constants.CHANGE_CATEGORY:
            return state.set('category',action.category);
        case constants.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory);
        case constants.CHANGE_CATEGORY_SONGS:
            return state.set("categorySongs", action.categorySongs);
        default:
            return state;
    }
}
