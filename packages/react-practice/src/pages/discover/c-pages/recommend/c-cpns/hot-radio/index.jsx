import React, {memo} from "react";


import {HotRadioWrapper} from'./style'
import {hotRadios} from "../../../../../../services/local-data";
import ThemeHeaderSmall from "../../../../../../components/theme-header-small";



export default memo(function HotRadio(){
    return(
        <div>
            <HotRadioWrapper>
                <ThemeHeaderSmall title='热门主播'/>
                <div className="radio-list">
                    {
                        hotRadios.map((item, index) => {
                            return (
                                <div className="item" key={item.picUrl}>
                                    <a href="/abc" className="image">
                                        <img src={item.picUrl} alt="" />
                                    </a>
                                    <div className="info">
                                        <div className="name">{item.name}</div>
                                        <div className="position text-nowrap">{item.position}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </HotRadioWrapper>
        </div>
    )
})
