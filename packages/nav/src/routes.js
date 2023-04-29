import React from "react";
import {Outlet} from 'react-router-dom'
import Bootstrap from "./bootstrap";
import Home from 'pages/home'

const routes = [
    {
        path: '/',
        element: (
            <Bootstrap/>
        ),
        children: [
            {
                path: 'home',
                element: (<Home/>),
                children:[
                    {
                        path:'some',
                        element:(<div>some...</div>)
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: (
            <div>404 not found</div>
        )
    }
]

export default routes