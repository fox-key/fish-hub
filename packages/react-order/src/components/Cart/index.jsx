import React, { useContext, useEffect, useState } from 'react'

import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import { useNavigate } from 'react-router-dom'

import Checkout from '../Checkout'
import CartCnotext from '../../store/cart-context'
import CartDetails from './CartDetails'

export default function Cart() {

  const ctx = useContext(CartCnotext)
  const [showDetails, setShowDetails] = useState(false)
  const [showCheckout,setShowCheckout] = useState(false)

  const navigate = useNavigate()

  const toggle = ()=>{
    if(ctx.totalAmount===0)return setShowDetails(false)
    setShowDetails(pre=>!pre)
  }

  const account = (e)=>{
    e.stopPropagation()
    setShowCheckout(true)
    // navigate('/account')

  }

  useEffect(()=>{
    if(ctx.totalAmount===0){
      setShowDetails(false)
    }
  },[ctx.totalAmount])

  const closeAccount = ()=>{
    setShowCheckout(false)
  }

  return (
    <div className={classes.Cart} onClick={toggle}>
     {showCheckout&& <Checkout onClick={(e)=>{e.stopPropagation()}} closeAccount={closeAccount}/>} 
      {(showDetails) && <CartDetails toggle={toggle} />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        <span className={classes.Total}>{ctx.totalAmount}</span>
      </div>

      {ctx.totalAmount === 0 ? <p className={classes.none}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
      <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.disabledButton : null}`} disabled={ctx.totalAmount === 0} onClick={account}>去结算</button>
    </div>
  )
}
