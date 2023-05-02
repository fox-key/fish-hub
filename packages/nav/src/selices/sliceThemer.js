import {createSlice} from '@reduxjs/toolkit';
import {getStorage} from "@component/utils";

export const counterSlice = createSlice({
    name: 'white',
    initialState: {
        value: getStorage('theme')||'white',
    },
    reducers: {
        white(state) {
            state.value = 'white';
        },
        dark(state) {
            state.value = 'black';
        }
    },
});

export const {white, dark} = counterSlice.actions;

export default counterSlice.reducer;