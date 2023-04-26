import React, { useContext } from 'react'
import classes from './Bar.module.css'

import CartCnotext from '../../store/cart-context'
export default function Bar() {
    const ctx = useContext(CartCnotext)

    return (
        <div className={classes.Cart} >
            <div className={classes.Icon}>
                {/* <span className={classes.Total}>4434</span> */}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.none}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.disabledButton : null}`} disabled={ctx.totalAmount === 0} onClick={console.log(123)}>去支付</button>
        </div>
    )
}
