import React, {memo, useEffect} from "react";

import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    HotRecommendWrapper
} from './style'

import SongsCover from "../../../../../../components/songs-cover";

import ThemeHeaderRcm from "../../../../../../components/theme-header-rcm";
import {getHotRecommendAction} from "../../store/actionCreator";

export default memo(function HotRecommend() {

    const {hotRecommends} = useSelector(state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm title='新碟商家'/>
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return <SongsCover key={item.id} info={item}/>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
