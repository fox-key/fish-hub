import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import classes from './FilterMeals.module.css'
export default function FilterMeals(props) {


    const inputChangeHandler = e=>{
        const keyword = e.target.value;
        props.filterHandler(keyword)
    }

    return (
        <div>
            <div className={classes.FilterMeals}>
                <SearchOutlined className={classes.searchIcon} />
                <input onChange={inputChangeHandler} type="text" placeholder='请输入关键字' className={classes.SearchInput} />
            </div>
        </div>
    )
}
