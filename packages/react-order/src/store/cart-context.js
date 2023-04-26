import React,{createContext} from 'react'

const CartCnotext = createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    addItem:()=>{},
    removeItem:()=>{},
    clearCart:()=>{}
})

export default CartCnotext