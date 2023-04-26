import React, {memo, useEffect} from "react";

import {SongsWrapper} from './style'
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import {
    getCategory,
    getSongList,
    changeCurrentCategoryAction
} from "./store/actionCreator";
import SongsHeader from "./c-pages/songs-header";
import SongsList from "./c-pages/songs-list";


export default memo(function Songs(){
    const cat = useLocation().cat;
    // redux
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrentCategoryAction(cat));
    }, [dispatch, cat]);

    useEffect(()=>{
        dispatch(getCategory());
        dispatch(getSongList(1))
    },[dispatch])

    return(
        <SongsWrapper className="wrap-v2">
            <SongsHeader/>
            <SongsList/>
        </SongsWrapper>
    )
})
