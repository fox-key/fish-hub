import { configureStore } from '@reduxjs/toolkit';
import themeReducer from 'selices/sliceThemer'
import listReducer from 'selices/list'
export default configureStore({
    reducer: {
        theme:themeReducer,
        list:listReducer
    },
});