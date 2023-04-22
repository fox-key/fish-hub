import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'white',
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