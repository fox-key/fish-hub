import React from 'react'

import classes from './Meal.module.css'
import Counter from '../UI/Counter'

export default function meal(props) {
  return (
    <div className={classes.Meal}>
        <div className={classes.ImgBox}>
            <img src={props.img} alt="" />
        </div>
        <div className={classes.right}>
            <h2 className={classes.Title}>{props.title}</h2>
            {props.noDesc?null:<p  className={classes.Desc}>{props.desc}</p>}
            <div className={classes.PriceWrapper}>
                <span className={classes.price}>{props.price}</span>
                <Counter 
                meal={props.meal} 
                 amount={props.meal.amount} />
            </div>
        </div>
    </div>
  )
}
