import Styles from './menu.module.less'
import {menus} from "./mock";
import {map} from "lodash";
import {Link} from "react-router-dom";
import {useUserContext} from "userContext";
import {
    SearchOutlined,
     UnorderedListOutlined
} from '@ant-design/icons';
import {ReactComponent as AlipayCircleOutlined} from 'assents/icon/taiyang.svg'
import {ReactComponent as AlipayOutlined} from 'assents/icon/yueliang.svg'
import {useToggleTheme} from 'hooks'
import {Drawer,Button} from "antd";
import {useToggle} from "ahooks";
import {useRoutes} from "@component/utils";

export default function () {
    const {screen: {middle}} = useUserContext();
    const {color, toggle} = useToggleTheme();
    const [open,{toggle:toggleOpen}] = useToggle()
    const {historyPush} = useRoutes()
    const imgUrl = 'https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/03/20220317132652250.png'

    return <div className={Styles.menu} style={{backgroundColor: color}}>
        <div className={Styles.logo} onClick={()=>historyPush('/')}>
            <img src={imgUrl}
                 alt="logo"/>
        </div>
        <div className={Styles.content}>
            {
                middle && (
                    <ul>
                        {
                            map(menus, (i,index) => <Link key={index} to={i.path} children={i.title} style={{color:color=='white'?'black':'white'}}/>)
                        }
                    </ul>
                )
            }

        </div>
        <div className={Styles.tools} style={color=='white'?{color:'black'}:null}>
            <span onClick={toggle}>
                 {
                     color == 'white' ? <AlipayOutlined/>: <AlipayCircleOutlined/>
                 }
            </span>
            <SearchOutlined/>
            <UnorderedListOutlined onClick={toggleOpen}/>
        </div>
        <Drawer title={null} placement="right" onClose={toggleOpen} open={open}>
            { map(menus, (i,index) => <p onClick={()=>historyPush(i.path)}  key={index}  children={i.title} style={{cursor:'pointer'}}/>)}
        </Drawer>
    </div>
}