import React, {memo,} from "react";

import {RecommendWrapper} from './style'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotRadio from "./c-cpns/hot-radio";

import {
    RecommendRight,
    RecommendLeft,
    Content
} from './style'

export default memo(function Recommend(props) {

    return (
        <RecommendWrapper>
            <TopBanner></TopBanner>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotRecommend></HotRecommend>
                    <NewAlbum/>
                    <RecommendRanking/>
                </RecommendLeft>
                <RecommendRight>
                    <UserLogin/>
                    <SettleSinger/>
                    <HotRadio/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
        )
})







/*function Recommend(props) {

    const {getBanners,topBanners} = props;

    useEffect(() => {
        getBanners()
    }, [getBanners])

    return (
        <div>Recommend:{topBanners.length}</div>
    )
}

const mapStateToProps = state => ({
    topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
    getBanners: () => {
        dispatch(getTopBannerAction())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))*/
