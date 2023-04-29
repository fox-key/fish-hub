import {Outlet} from "react-router-dom";
import React from "react";
import {nav_list, getIcon} from "assents/mock";
import {Col, Row} from "antd";
import Styles from './list.module.less'
import {useToggleTheme} from "../../hooks";

export default function () {
    return <div className={Styles.list}>
        <Row >
            {
                [...nav_list,...nav_list,...nav_list,...nav_list,...nav_list,...nav_list,...nav_list,...nav_list,...nav_list].map((m, i) => {
                    return (
                        <Col xl={3} xxl={2} lg={4} sm={8} md={6} xs={12} className='mb-3' >
                            <Card key={i} info={m}/>
                        </Col>
                    )
                })
            }
        </Row>

    </div>
}


function Card({info}) {
    const {color} = useToggleTheme();
    return <div style={{color}} onClick={()=> window.location.href = info?.link} className='flex flex-col items-center'>
        <div>
            {getIcon(info.icon)}
        </div>
        <div className='mt-1'>
            {info?.title}
        </div>
    </div>
}