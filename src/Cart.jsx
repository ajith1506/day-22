import React from 'react'
import {useCart} from "react-use-cart";

 const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        item,
        totalItems,
        carttotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } =useCart();
    if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
  return (
    <section className='py-4 container'>
       <div className='row justify-content-center'>
        <div className='col-12'>
            <h5>Cart({totalUniqueItems})totalItems:({totalItems})</h5>

        </div>
        
      </div>
    </section>
  )
}


export default Cart;
