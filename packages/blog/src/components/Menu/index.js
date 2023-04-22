import Styles from './menu.module.less'
import {menus} from "./mock";
import {map} from "lodash";
import {Link} from "react-router-dom";

export default function () {
    return <div className={Styles.menu}>
        <div className={Styles.logo}>
            <img src="https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/03/20220317132652250.png"
                 alt="logo"/>
        </div>
        <div className={Styles.content}>
            <ul>
                {
                        map(menus,i=><Link to={i.path} children={i.title}/>)
                }
            </ul>
        </div>
        <div className={Styles.tools}>

        </div>
    </div>
}