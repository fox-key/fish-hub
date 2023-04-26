import React from 'react'
import Meal from './meal'
import classes from './Meals.module.css'

export default function Meals(props) {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map(item => 
            <Meal meal={item} {...item} key={item.id} />
            )}
        </div>
    )
}
