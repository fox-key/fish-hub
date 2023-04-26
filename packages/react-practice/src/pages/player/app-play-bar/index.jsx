import React, {memo,useState} from "react";

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style';

export default memo(function AppPlayBar(){

    // props and state
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [progress, setProgress] = useState(0);
    // const [isChanging, setIsChanging] = useState(false);
    // const [showPanel, setShowPanel] = useState(false);

    return(
        <PlaybarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control >

                </Control>
                <PlayInfo>

                </PlayInfo>
                <Operator >

                </Operator>
            </div>

        </PlaybarWrapper>
    )
})
