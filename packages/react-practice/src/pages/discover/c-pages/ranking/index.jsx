import React, {memo, useEffect} from "react";

import {useDispatch} from "react-redux";

import {
    RankingWrapper,
    RankingLeft,
    RankingRight,
} from './style'

import {getTops} from "./store/actionCreators";
import TopRanking from "./c-page/top-ranking";
import RankingHeader from "./c-page/ranking-header";
import RankingList from "./c-page/ranking-list";


export default memo(function Ranking(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTops())
    },[dispatch])

    return(
        <RankingWrapper className="wrap-v2">
            <RankingLeft>
                <TopRanking/>
            </RankingLeft>
            <RankingRight>
                <RankingHeader/>
                <RankingList/>
            </RankingRight>
        </RankingWrapper>
    )
})
