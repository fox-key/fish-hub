import React, {memo,useEffect} from "react";
import PropTypes from 'prop-types'


import {HeaderWrapper} from './style'

const ThemeHeaderRcm = memo(function (props){
    const { title, keywords} = props;

    useEffect(()=>{

    })

    return(
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <a href="todo">{item}</a>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

ThemeHeaderRcm.propTypes = {
    title:PropTypes.string.isRequired,
    keywords:PropTypes.array
}

ThemeHeaderRcm.defaultProps = {
    keywords:[]
}

export default ThemeHeaderRcm
