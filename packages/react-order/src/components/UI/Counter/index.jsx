import React ,{useContext} from 'react'
import {PlusOutlined,MinusOutlined} from '@ant-design/icons'
import classes from './Counter.module.css'
// import TestContext from '../../../store/testContext'
import CartCnotext from '../../../store/cart-context'

export default function Counter(props) {

    const CounterContext = useContext(CartCnotext)

    const addButtonHandler = () => {
        CounterContext.addItem(props.meal);
    }
    const subButtonHandler = () => {
        CounterContext.removeItem(props.meal);
    }

    return (
        <div className={classes.Counter}>
            {(props.amount && props.amount !== 0) ?
                <div className={classes.sub} onClick={subButtonHandler} ><MinusOutlined className={classes.plus} /></div> : null}
            {(props.amount && props.amount !== 0) ? <span className={classes.count}>{props.amount}</span> : null}
            <div className={classes.add} onClick={addButtonHandler}><PlusOutlined  className={classes.jian}/></div>
        </div>
    )
}
