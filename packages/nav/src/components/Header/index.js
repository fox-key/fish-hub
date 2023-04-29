
import Styles from './header.module.less'
import dayjs from "dayjs";
export default function (){
    return <div className={Styles.header}>
       <div className={Styles.time}>
           <span>日期：</span>
           <span>{dayjs(Date.now()).format('YYYY年MM月DD日')}</span>
       </div>
    </div>
}