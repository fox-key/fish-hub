import React, {memo, useEffect} from "react";

import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";

import request from "../../services/request";

import {DiscoverWrapper,TopMenu} from './style'
import {dicoverMenu} from '@/common/local-data.js'
export default memo(function Discover(props){

    useEffect(()=>{
        request({
            url:'/banner'
        }).then((res)=>{
            console.log(res,'res')
        })
    })

    const { route } = props;
    return(
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
