import React,{useState} from "react";
import Meals from "../../components/Meals";
import CartCnotext from "../../store/cart-context";
import FilterMeals from "../../components/FilterMeals";
import Cart from "../../components/Cart";
import {MEALS_DATA} from '../../config/meals'


export default function Home() {

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
      <CartCnotext.Provider value={
    {addItem:addItem,
      removeItem:removeItem,clearCart,...car}
    } >
    <FilterMeals filterHandler={filterHandler} />
      <Meals mealsData={mealsData} />
      <Cart/>
   </CartCnotext.Provider> 
  )
}
