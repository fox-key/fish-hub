import React from 'react'
import classes from './CheckoutItem.module.css'
import Counter from '../../components/UI/Counter'

export default function CheckoutItem(props) {
  return (
    <div className={classes.CheckoutItem}> 
        <div className={classes.MealImg}>
            <img  src={props.meal.img} alt="" />
        </div>
        <div className={classes.Desc}>
            <h2>{props.meal.title}</h2>
            <div>
                <div><Counter {...props.meal} meal={props.meal} /></div>
                <div>{props.meal.price*props.meal.amount}</div>
            </div>
        </div>
    </div>
  )
}
