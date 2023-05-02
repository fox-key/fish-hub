import {useToggleTheme} from "hooks";
import {getIcon} from "assents/mock";
import {Typography} from "antd";
import React from "react";
import Styles from './card.module.less'

export default function Card({info}) {
    const {color} = useToggleTheme();
    const _text = (color !== 'black') ? 'text-gray-50 ' : ' text-coolGray-800 hover:bg-coolGray-50'
    return <div  onClick={() => window.location.href = info?.link}
                 className={`flex flex-col items-center cursor-pointer hover:scale-110  p-4 lg:p-8  hover:shadow-lg lg:hover:border-transparent `}>
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

export function CardTitle(props){
    return (
        <h2 className={Styles.card_title}>
            {props?.children}
        </h2>
    )
}