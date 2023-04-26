import React, {memo, useState} from "react";


import SongsCategory from "../songs-category";

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style";
import {shallowEqual, useSelector} from "react-redux";











export default memo(function SongsHeader(){

    const [showCategory,setShowCategory] = useState(false);

    const {currentCategory} = useSelector(state=>({
        currentCategory:state.getIn(['songs','currentCategory'])
    }),shallowEqual)

    return(
        <HeaderWrapper>
            <HeaderLeft>
                <span className="title">{currentCategory}</span>
                <button className="select" onClick={e => setShowCategory(!showCategory)}>
                    <span>选择分类</span>
                    <i className="sprite_icon2"></i>
                </button>
                {showCategory ? <SongsCategory /> : null}
            </HeaderLeft>
            <HeaderRight>
                <button className="hot">热门</button>
            </HeaderRight>
        </HeaderWrapper>
    )
})
