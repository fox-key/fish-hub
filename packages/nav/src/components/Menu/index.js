import Styles from './menu.module.less'
import {menus} from "./mock";
import {isEmpty, map} from "lodash";
import {Link} from "react-router-dom";
import {useUserContext} from "userContext";
import {
    SearchOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import {ReactComponent as AlipayCircleOutlined} from 'assents/icon/taiyang.svg'
import {ReactComponent as AlipayOutlined} from 'assents/icon/yueliang.svg'
import {useToggleTheme} from 'hooks'
import {Drawer, Button, Input} from "antd";
import {useToggle} from "ahooks";
import {useRoutes} from "@component/utils";
import {useDispatch} from "react-redux";
import {reset, search} from "selices/list";
import {useEffect, useState} from "react";

export default function () {
    const {screen: {middle, small}} = useUserContext();
    const {color, toggle, background} = useToggleTheme();
    const [open, {toggle: toggleOpen}] = useToggle();
    const [visible, {toggle: toggleVisbile}] = useToggle(false);
    const [_q, setKeyWord] = useState('');

    const dispatch = useDispatch()

    const {historyPush} = useRoutes()
    const imgUrl = 'https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/03/20220317132652250.png'

    useEffect(() => {
        if (isEmpty(_q)) {
            dispatch(reset())
        } else {
            dispatch(search({q: _q}))
        }
    }, [_q])


    return <div className={Styles.menu} style={{backgroundColor: background}}>
        {

            !middle ?
                !visible && (<div className={Styles.logo} onClick={() => historyPush('/')}>
                    <img src={imgUrl}
                         alt="logo"/>
                </div>) : (
                <div className={Styles.logo} onClick={() => historyPush('/')}>
                    <img src={imgUrl}
                         alt="logo"/>
                </div>
            )
        }

        <div className={Styles.content}>
            <div className={Styles.submenu}>
                {
                    middle && (
                        <ul>
                            {
                                map(menus, (i, index) => <Link key={index} to={i.path} children={i.title}
                                                               style={{color: color}}/>)
                            }
                        </ul>
                    )
                }

            </div>
            <div className={`${Styles.tools}`}
                 style={Object.assign({color: color}, !middle && visible ? {width: '100%'} : {})}>
                <div className='flex'>
                <span onClick={toggle}>
                 {
                     background == 'white' ? <AlipayOutlined/> : <AlipayCircleOutlined/>
                 }
            </span>
                    {

                        visible && <Input onBlur={toggleVisbile} autoFocus placeholder="关键字"
                                          value={_q}
                                          onChange={(e) => setKeyWord(e.target.value)}/>
                    }

                    <SearchOutlined onClick={toggleVisbile}/>
                    <UnorderedListOutlined onClick={toggleOpen}/>
                </div>
            </div>
        </div>
        <Drawer title={null} placement="right" onClose={toggleOpen} open={open}>
            {map(menus, (i, index) => <p onClick={() => historyPush(i.path)} key={index} children={i.title}
                                         style={{cursor: 'pointer'}}/>)}
        </Drawer>
    </div>
}