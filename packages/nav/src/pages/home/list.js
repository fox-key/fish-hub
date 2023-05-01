import React from "react";
import { Col, Empty,  Row} from "antd";
import Styles from './list.module.less'
import Card, {CardTitle} from 'components/Card'
import { isEmpty} from "lodash";
import {findOptions} from "@component/utils";
import {useSelector} from "react-redux";
import {useToggleTheme} from "hooks";

export default function () {

    const nav_list = useSelector(state => state.list.value)
    const {color} = useToggleTheme();


    if(isEmpty(nav_list)){
        return  (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<div style={{color}}>
                暂无数据
            </div>}/>
        )
    }

    const [_frame_list,_ui_list,_react_list,_vue_list,_lib_list] =
        ['framework','design','react','vue','library'].
        map(category=>findOptions(nav_list, ['category', category]));

    return <div>
        {
            [
                {data:_frame_list,title:'FRAMEWORK'},
                {data:_ui_list,title:'UI/DESIGN'},
                {data:_react_list,title:'React'},
                {data:_vue_list,title:'Vue'},
                {data:_lib_list,title:'LIBRARY'},

            ].map(({data,title})=> <Category list={data} title={title}/>)
        }
    </div>
}

function Category({list, title = null}) {
    if (isEmpty(list)) return
    return <div className={Styles.list}>
        {title && <CardTitle>{title}</CardTitle>}
        <Row>
            {
                list.map((m, i) => {
                    return (
                        <Col xl={3} xxl={2} lg={4} sm={8} md={6} xs={12} className='mb-3'>
                            <Card key={i} info={m}/>
                        </Col>
                    )
                })
            }
        </Row>
    </div>
}



