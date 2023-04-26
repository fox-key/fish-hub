import React, {memo, useEffect} from "react";

import ThemeHeaderRcm from "../../../../../../components/theme-header-rcm";
import {useDispatch, useSelector} from "react-redux";
import {getTopListAction} from "../../store/actionCreator";
import {RankingWrapper} from './style'
import TopRanking from "../../../../../../components/top-ranking";
export default memo(function RecommendRanking() {


    const {upRanking, newRanking, originRanking} = useSelector(state => ({
        upRanking: state.getIn(['recommend', 'upRanking']),
        newRanking: state.getIn(['recommend', 'newRanking']),
        originRanking: state.getIn(['recommend', 'originRanking'])
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])

    return (
        <RankingWrapper>
            <ThemeHeaderRcm title="榜单" />
            <div className="tops">
                <TopRanking info={upRanking}/>
                <TopRanking info={newRanking}/>
                <TopRanking info={originRanking}/>
            </div>
        </RankingWrapper>
    )
})
