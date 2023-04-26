import React, {memo} from 'react';
import {Provider} from "react-redux";

import store from "./store";

import Layout from "./pages/layout";

export default memo(function App(props) {
    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
})

