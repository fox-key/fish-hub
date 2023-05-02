import {createSlice} from '@reduxjs/toolkit';
import {getStorage} from "@component/utils";

export const counterSlice = createSlice({
    name: 'white',
    initialState: {
        value: getStorage('theme') || 'white',
        is_switch_checked: false
    },
    reducers: {
        white(state) {
            state.value = 'white';
        },
        dark(state) {
            state.value = 'black';
        },
        toggleSwitch(state, {payload}) {
            state.is_switch_checked = payload
        }
    },
});

export const {white, dark, toggleSwitch} = counterSlice.actions;

export default counterSlice.reducer;