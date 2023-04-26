import React, {memo, useEffect} from "react";

import {SetterSongerWrapper} from './style'
import ThemeHeaderSmall from "../../../../../../components/theme-header-small";

import {getSettleSingers} from "../../store/actionCreator";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getSizeImage} from "../../../../../../utils/format-utils";

export default memo(function SettleSinger(){


    const dispatch = useDispatch()

    const {settleSings} = useSelector(state=>({
        settleSings:state.getIn(['recommend','settleSings'])
    }),shallowEqual)

    useEffect(()=>{
        dispatch(getSettleSingers(5,5001))
    },[dispatch])

    return(
        <div>
            <SetterSongerWrapper>
                <ThemeHeaderSmall title="入住歌手" more='查看全部'/>
                <div className="singer-list">
                    {
                        settleSings.map((item,index)=>{
                            return (
                                <a href="/singer" key={item.id} className='item'>
                                    <img src={getSizeImage(item.img1v1Url,62)} alt=""/>
                                    <div className="info">
                                        <div className="title">{item.alias.join("") || item.name}</div>
                                        <div className="name">{item.name}</div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="apply-for">
                    <a href="/abc">申请成为网易音乐人</a>
                </div>
            </SetterSongerWrapper>
        </div>
    )
})
