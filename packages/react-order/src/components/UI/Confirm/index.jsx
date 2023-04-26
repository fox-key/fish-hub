import { getStatusClassNames } from 'antd/lib/_util/statusUtils'
import React from 'react'
import Backdrop from '../Backdrop'
import classes from './Confirm.module.css'
export default function Confirm(props) {
  return (
    <Backdrop className={classes.ConfirmOuter} {...props}>
        <div className={classes.Confirm} >
            <p className={classes.confirmText}>{props.confirmText}</p>
            <div>
                <button onClick={(e)=>{props.onCancel(e)}} className={classes.cancel}>取消</button>
                <button onClick={(e)=>{props.onOk(e)}} className={classes.ok}>确认</button>
            </div>
        </div>
    </Backdrop>
  )
}
