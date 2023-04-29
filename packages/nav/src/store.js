import { configureStore } from '@reduxjs/toolkit';
import themeReducer from 'selices/sliceThemer'
export default configureStore({
    reducer: {
        theme:themeReducer
    },
});