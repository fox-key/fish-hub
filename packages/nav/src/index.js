import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routers from "routes";
import 'normalize.css'
import {Provider} from "react-redux";
import store from './store'
import 'theme.less'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={createBrowserRouter(routers)}/>
      </Provider>
  </React.StrictMode>
);

