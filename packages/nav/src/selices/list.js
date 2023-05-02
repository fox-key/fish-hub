import {createSlice} from '@reduxjs/toolkit';
// import {nav_list} from "assents/mock";
import {flatten, isEmpty, map} from "lodash";
import {findOptions} from "@component/utils";
import _ from 'assents/mock/netflixscrape.json'

// const _list = flatten(new Array(1).fill(nav_list))


function _getList(list){
    return flatten(map(list,m=>(m?.children??[])))
}



export const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: _getList(_),
        isList:true
    },
    reducers: {
        search(state, {payload}) {
            if (isEmpty(payload.q)) return
            state.value = findOptions(_getList(_), ['keywords', payload.q])
        },
        reset(state) {
            state.value = _getList(_)
        },
        toggleCategory(state,{payload}){
            state.isList = !(state.isList);
        }
    },
});

export const {search, reset,toggleCategory} = listSlice.actions;

export default listSlice.reducer;