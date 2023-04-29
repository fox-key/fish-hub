import {Outlet} from "react-router-dom";
import React from "react";
import {nav_list as _list} from "assents/mock";
import {Col, Row} from "antd";
import Styles from './list.module.less'
import Card, {CardTitle} from 'components/Card'
import {flatten, isEmpty} from "lodash";
import {findOptions} from "@component/utils";

export default function () {
    // const _list = findOptions(flatten(new Array(20).fill(nav_list)), ['category', 'framework'])
    const nav_list = flatten(new Array(5).fill(_list));

    const _frame_list = findOptions(nav_list, ['category', 'framework'])
    const _ui_list = findOptions(nav_list, ['category', 'design'])
    const _react_list = findOptions(nav_list, ['category', 'react'])
    const _vue_list = findOptions(nav_list, ['category', 'vue'])
    const _lib_list = findOptions(nav_list, ['category', 'library'])

    return <div>
        <Category list={_frame_list} title='FRAMEWOEK'/>
        <Category list={_ui_list} title='UI/DESIGN'/>
        <Category list={_react_list} title='React'/>
        <Category list={_vue_list} title='Vue'/>
        <Category list={_lib_list} title='LIBRARY'/>
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



