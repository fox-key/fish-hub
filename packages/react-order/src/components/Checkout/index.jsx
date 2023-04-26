import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { CloseOutlined } from '@ant-design/icons'
import classes from './Checkout.module.css'
import CartCnotext from '../../store/cart-context'
import CheckoutItem from './CheckoutItem'
import Bar from './Bar'
const CheckoutRoot = document.getElementById('checkout-root')
export default function Checkout(props) {

  const ctx = useContext(CartCnotext)

  const Element = () => {
    return (
      <div onClick={props.onClick}
        className={classes.Checkout} >
        <CloseOutlined className={classes.close} onClick={props.closeAccount} />
        <div className={classes.MealsDesc}>
          <header className={classes.Header}>
            <h2 className={classes.Title}>餐品详情</h2>
          </header>

          <div className={classes.Meals}>
            {ctx.items.map(item => <CheckoutItem meal={item} key={item.id} />)}
          </div>

          <footer className={classes.Footer}>
            <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
          </footer>
        </div>
          <Bar></Bar>
      </div>
    )
  }

  return ReactDom.createPortal(
    Element(), CheckoutRoot
  )
}
