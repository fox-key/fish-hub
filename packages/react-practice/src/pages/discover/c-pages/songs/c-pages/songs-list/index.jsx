import React, {memo, useState} from "react";

import ThemeCover from "../../../../../../components/theme-cover";
import PageDevice from "../../../../../../components/pageDevice";
import {
    SongListWrapper
} from "./style";
import {PER_PAGE_NUMBER} from "../../store/constans";
import {shallowEqual, useDispatch, useSelector} from "react-redux";



import {getSongList} from "../../store/actionCreator";


export default memo(function SongsList(){

    // hooks
    const [currentPage,setCurrentPage] = useState(1);


    // redux
    const { categorySongs } = useSelector(state => ({
        categorySongs: state.getIn(["songs", "categorySongs"])
    }), shallowEqual);


    const songList = categorySongs.playlists || [];
    const total = categorySongs.total || 0;
    const dispatch = useDispatch()

    function onPageChange(page,pageSize) {
        setCurrentPage(page);
        dispatch(getSongList(page));
    }

    return(
        <SongListWrapper>
            <div className="songs-list">
                {
                    songList.map((item, index) => {
                        return (
                            <ThemeCover info={item} right='30px' key={item.id}/>
                        )
                    })
                }
            </div>
            <PageDevice
                total={total}
                currentPage={currentPage}
                pageSize={PER_PAGE_NUMBER}
                onPageChange={onPageChange}
            />
        </SongListWrapper>
    )
})
