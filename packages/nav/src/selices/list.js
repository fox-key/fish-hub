import {createSlice} from '@reduxjs/toolkit';
import {nav_list} from "assents/mock";
import {flatten, isEmpty} from "lodash";
import {findOptions} from "@component/utils";

const _list = flatten(new Array(5).fill(nav_list))
export const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: _list
    },
    reducers: {
        search(state, {payload}) {
            if (isEmpty(payload.q)) return
            state.value = findOptions(_list, ['keywords', payload.q])
        },
        reset(state) {
            state.value = _list
        }
    },
});

export const {search, reset} = listSlice.actions;

export default listSlice.reducer;