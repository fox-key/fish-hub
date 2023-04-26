import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop'
import { DeleteFilled } from '@ant-design/icons'
import classes from './CartDetails.module.css'
import Meal from '../../Meals/meal'
import CartCnotext from '../../../store/cart-context'
import Confirm from '../../UI/Confirm'
export default function CartDetails(props) {

  const ctx = useContext(CartCnotext)
  const [showConfirm, setShowConfirm] = useState(false)

  const showConfirmHandler = ()=>{
    
    setShowConfirm(true)
  }

  const cancelHandler = (e)=>{
    e.stopPropagation()
    setShowConfirm(false)
  }

  const okHandler = ()=>{
    ctx.clearCart()
    setShowConfirm(false)
    props.toggle()
  }

  return (
    <Backdrop >
      {showConfirm && <Confirm onClick={(e)=>{e.stopPropagation()}}  onOk={okHandler} onCancel={cancelHandler} confirmText='确认是否清空购物车'/>}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header>
          <h2 className={classes.tittle}>餐品详情</h2>
          <div className={classes.Clear} 
              onClick={showConfirmHandler}>
            <DeleteFilled /><span>清空购物车</span>
          </div>
        </header>
        <div className={classes.mealList}>
          {
            ctx.items.map(item => <Meal noDesc meal={item} {...item} key={item.id} />)
          }
        </div>
      </div>
    </Backdrop>
  )
}
