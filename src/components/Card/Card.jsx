import React, { useEffect, useState } from 'react'
import { MdPersonOutline } from "react-icons/md";
import style from './style.module.css'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosRemoveCircle } from "react-icons/io";




export default function Card({ element, minus }) {
    const courseData = element
    const image = element.image
    const title = element.name
    const author = element.category
    const describe = element.description
    const price = element.actual_price_usd
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    useEffect(()=>{
        const StoredCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(minus);
    }
    ,[minus]);

    const handleLink = () => {
        localStorage.setItem('courseData', JSON.stringify(courseData));
    }
    const handleRemove = () => {
        // const exist = isCarted.find((item)=> item.name === element.name)
        // const place =isCarted.indexOf(exist)
        // setIsCarted(isCarted.splice(place, 1))
        // localStorage.setItem('cart', JSON.stringify(isCarted));

        // const updatedCart = cart.filter((item) => item.name !== element.name);
        // setCart(updatedCart);
        // localStorage.setItem('cart', JSON.stringify(updatedCart));

        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.name !== element.name);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
          });

    }
    return (
        <div className={`${style.box}`}>
            <div className={`card d-flex flex-column gap-1 ${style.cardContent}`}>
                <img src={image} className="card-img-top img-fluid" alt="..."></img>
                    <div className={`card-body d-flex flex-column gap-1 p-0`}>
                        <h5 className={`card-title ${style.title}`}><Link className='stretched-link' to={`/course/${title}`} onClick={handleLink}>{title}</Link></h5>
                        <span><span className={`${style.authorIcon}`}><MdPersonOutline /></span><span className={`${style.author}`}>{author}</span></span>
                        <p className={`card-text ${style.describe}`}>{describe}</p>
                        <div className={`${style.rated}`}>
                            <span className={`${style.stars}`}><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></span><span className={`${style.rateCount}`}>(1.2K)</span>
                        </div>
                        <div>
                            <span className={`${style.price}`}>${price}</span>
                        </div>
                    </div>
            </div>
            {minus && <button className={`${style.delete} btn`} onClick={minus}><IoIosRemoveCircle /></button>}
            
        </div>
    )
}
