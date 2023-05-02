import React from "react";
import { Col, Empty,  Row} from "antd";
import Styles from './list.module.less'
import Card, {CardTitle} from 'components/Card'
import { isEmpty} from "lodash";
import {findOptions} from "@component/utils";
import {useSelector} from "react-redux";
import {useToggleTheme} from "hooks";

export default function () {

    const nav_list = useSelector(state => state.list.value);
    const isList = useSelector(state => state.list.isList);

    const {color} = useToggleTheme();


    if(isEmpty(nav_list)){
        return  (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<div style={{color}}>
                暂无数据
            </div>}/>
        )
    }

    if(!isList){
        return <div>
            <Category list={nav_list} />
        </div>
    }


    const [_frame_list,_ui_list,_react_list,_vue_list,_lib_list,_other_list,_website_list] =
        ['framework','design','HTML/CSS','NODEJS','library','other','website'].
        map(category=>findOptions(nav_list, ['category', category]));


    return <div>
        {
            [
                {data:_frame_list,title:'FRAMEWORK'},
                {data:_ui_list,title:'UI/DESIGN'},
                {data:_react_list,title:'HTML/CSS'},
                {data:_vue_list,title:'NODEJS'},
                {data:_lib_list,title:'LIBRARY'},
                {data:_other_list,title:'OTHER'},
                {data:_website_list,title:'WEBSITE'},

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



