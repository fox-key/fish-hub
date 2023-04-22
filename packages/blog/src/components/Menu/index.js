import Styles from './menu.module.less'
import {menus} from "./mock";
import {map} from "lodash";
import {Link} from "react-router-dom";
import {useUserContext} from "userContext";
import {
    AlipayCircleOutlined,
    SearchOutlined,
    AlipayOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import {useToggleTheme} from 'hooks'


export default function () {
    const {screen: {middle}} = useUserContext();
    const {color, toggle} = useToggleTheme();
    const imgUrl = 'https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/03/20220317132652250.png'

    return <div className={Styles.menu} style={{backgroundColor: color}}>
        <div className={Styles.logo}>
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
                     color == 'white' ? <AlipayOutlined/> : <AlipayCircleOutlined/>
                 }
            </span>
            <SearchOutlined/>
            <UnorderedListOutlined/>
        </div>
    </div>
}