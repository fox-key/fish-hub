import React,{useState} from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
// import TestContext from "./store/testContext";
import Meals from "./components/Meals";
import CartCnotext from "./store/cart-context";
import './App.css'
import FilterMeals from "./components/FilterMeals";
import Cart from "./components/Cart";
// import Test from "./components/test";
// import Test2 from "./components/test/test2";
import {MEALS_DATA} from './config/meals'

import Home from "./page/home";
import Account from "./page/account";
function App() {
  
  const [mealsData,setMealsData ] = useState(MEALS_DATA)


  //購物車中的數據
  const [car,setCat] = useState({
    items:[],
    totalAmount:0,
    totalPrice:0
    })

    //向购物车中添加商品
    const addItem = meal => {
     const newCar = {...car}
     if(newCar.items.indexOf(meal)===-1){
      newCar.items.push(meal);
      meal.amount=1;
     }else{
      meal.amount++
     }
     newCar.totalAmount++;
     newCar.totalPrice+=meal.price;
     setCat(newCar)
    }

    const removeItem = (meal)=>{
      const newCar = {...car}
      meal.amount --;
      if(meal.amount===0){
        newCar.items.splice(newCar.items.indexOf(meal),1)
      }
      newCar.totalAmount--;
      newCar.totalPrice-=meal.price;
      setCat(newCar)
    }

    const clearCart = ()=>{
      const newCar = {...car}
      newCar.items.forEach(item=>delete item.amount)
      newCar.items = []
      newCar.totalAmount=0
      newCar.totalPrice = 0
      setCat(newCar)
    }

    //顾虑meals的函数
    const filterHandler = (keyword)=>{
      // 判断keyword是否为空
    const newMelsData =  MEALS_DATA.filter(item=>item.title.indexOf(keyword)!==-1)
    setMealsData(newMelsData);
    }

    // const counterContext

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/account' element={ <Account/>}/>
   </Routes>
   </BrowserRouter>
  
  
   
  {/*  <CartCnotext.Provider value={
    {addItem:addItem,
      removeItem:removeItem,clearCart,...car}
    } >
    <FilterMeals filterHandler={filterHandler} />
      <Meals mealsData={mealsData} />
      <Cart/>
   </CartCnotext.Provider> */}
   
  
   </>
  );
}

export default App;
