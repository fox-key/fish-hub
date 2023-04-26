import React, {memo, useEffect} from "react";
import classNames from "classnames";

import {TopRankingWrapper} from './style'
import {getSizeImage} from "../../../../../../utils/format-utils";

import {changeCurrentIndex, getRanking} from "../../store/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

export default memo(function TopRanking() {

    const {topList, currentIndex} = useSelector(state => ({
        topList: state.getIn(['ranking', 'topList']),
        currentIndex: state.getIn(['ranking', 'currentIndex'])
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        const id = (topList[currentIndex] && topList[currentIndex].id);
        if (!id) return;
        dispatch(getRanking(id))
    }, [topList,currentIndex,dispatch])


    // handle function
    const hanldeItemClick = (index) => {
        dispatch(changeCurrentIndex(index));
        const id = topList[currentIndex].id;
        dispatch(getRanking(id))
    }


    return (
        <TopRankingWrapper>
            {
                topList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <div className={classNames("item", { "active": index === currentIndex })}
                                 onClick={e => hanldeItemClick(index)}>
                                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </TopRankingWrapper>
    )
})
