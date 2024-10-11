import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import style from './style.module.css'
export default function WishList() {
    const [wish, setWish] = useState([])
    const [price, setPrice] = useState(0)
    const wishList = JSON.parse(localStorage.getItem('wish')) || []
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    useEffect(() => {
        setWish(wishList.map((element, index) => (
            <Card
                element={element}
                key={index}
                minus={true}
                totPrice={setPrice}
            />
        )));

        const totalPrice = wishList.reduce((acc, item) => acc + item.actual_price_usd, 0);
        setPrice(totalPrice);

    }, [])

    const checkOut = () => {
        cart.push(...wish);
        localStorage.setItem('cart', JSON.stringify(cart));
        setWish([]);
        localStorage.setItem('wish', JSON.stringify(wish));
        setPrice(0);
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
                        <button className={`${style.checkOutButton} btn btn-light`} onClick={checkOut}>Add To Cart</button>
                    </div>
                </div>
                <div className={`${style.cartListed}`}>
                    {wish}
                </div>
            </div>
        </>
    )
}