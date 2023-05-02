import {useToggleTheme} from "hooks";
import {getIcon} from "assents/mock";
import {Typography} from "antd";
import React from "react";
import Styles from './card.module.less'
import {useUserContext} from "../../userContext";
import {useSelector} from "react-redux";

export default function Card({info}) {
    const {color} = useToggleTheme();
    const {screen: {middle, small}} = useUserContext();
    const _target = useSelector(state => state.theme.is_switch_checked)
    const _text = (color !== 'black') ? 'text-gray-50 ' : ' text-coolGray-800 hover:bg-coolGray-50'
    const _border = middle && 'hover:shadow-lg'

    function onLink(info){
        if (_target) {
            window.open(info?.link);
        } else {
            window.location.href = info?.link;
        }
    }


    return <div onClick={()=>onLink(info)}
                className={`flex flex-col items-center cursor-pointer  hover:scale-110  p-10 lg:p-8   lg:hover:border-transparent ${_border}`}>
        <div>
            {/*{getIcon(info.icon)}*/}
            <img src={info.icon}/>
        </div>
        <div className='mt-1 lg:mt-3'>
            <Typography.Text ellipsis className={_text}>
                {info?.title}
            </Typography.Text>
        </div>
    </div>
}

export function CardTitle(props) {
    return (
        <h2 className={Styles.card_title}>
            {props?.children}
        </h2>
    )
}