import React from "react";
import {Outlet} from 'react-router-dom'
import Bootstrap from "./bootstrap";

const routes = [
    {
        path: '/',
        element: (
            <Bootstrap/>
        ),
        children: [
            {
                path: 'home',
                element: (<div>home...<Outlet/></div>),
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