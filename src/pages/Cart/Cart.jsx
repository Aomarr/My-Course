import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Card from '../../components/Card/Card'
import style from './style.module.css'
export default function Cart() {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    
    useEffect(()=>{
      setCart(cartItems.map((element, index) => (
        <Card
          element = {element}
          key={index}
        />
      )));

      const totalPrice = cartItems.reduce((acc, item) => acc + item.actual_price_usd, 0);
      setPrice(totalPrice);

    },[])

    const checkOut = () => {
      setCart([])
      setPrice(0)
    }
  return (
    <>
    <div className='container'>
      <div className={`${style.checkOut}`}>
        <div>
          <h1>Total Price: {price.toFixed(2)} $</h1>
          <span></span>
        </div>
        <div>
          <button className={`${style.checkOutButton} btn btn-light`} onClick={checkOut}>CheckOut</button>
        </div>
      </div>
      <div className={`${style.cartListed}`}>
        {cart}
      </div>
    </div>
    </>
  )
}
