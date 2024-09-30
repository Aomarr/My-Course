import React, { useEffect, useRef, useState } from 'react'
import { MdListAlt } from "react-icons/md";
import { MdChromeReaderMode } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import style from './style.module.css'
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function CourseBuy({ price, status, element, name }) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const [cartItems, setCartItems] = useState([])
  const globalExist = cart.find((item)=> item.name === element.name)
  const user = useSelector(state => state.auth.value)
  const navigate = useNavigate()
  const addRef = useRef()
  const removeRef = useRef()

  useEffect(()=> {
    if (globalExist == undefined) {
      addRef.current.style.display = "inline-block";
      removeRef.current.style.display = "none";
    }
    if (globalExist != undefined) {
      addRef.current.style.display = "none";
      removeRef.current.style.display = "inline-block";
    }
  },[])

  const handleBuy = (e) => {
    const removeBtn = removeRef.current

    const exist = cart.find((item)=> item.name === element.name)
    console.log(user)

    if (user == null) {
      navigate('/login')
    }
    else if (user !== null) {
      console.log("hhh")
      cart.push(element)
      localStorage.setItem('cart', JSON.stringify(cart));
      e.target.style.display = "none"
      removeBtn.style.display = "inline-block"
    }

    // if ((user !== undefined) && (exist == undefined)) {
    //   cart.push(element)
    //   localStorage.setItem('cart', JSON.stringify(cart));
    //   e.target.style.display = "none"
    //   removeBtn.style.display = "inline-block"
    // }
    // else if ((user !== undefined) && (exist !== undefined)) {
    //   e.target.style.display = 'none'
    // }
    // else if (user == undefined){
    //   navigate('/login')
    // }
  }
  
  const handleRemove = (e) => {
    const addBtn = addRef.current
    const exist = cart.find((item)=> item.name == element.name)
    if ((globalExist !== undefined)) {
      const place =cart.indexOf(exist)
      cart.splice(place, 1)
      localStorage.setItem('cart', JSON.stringify(cart));
      e.target.style.display = "none"
      addBtn.style.display = "inline-block"
    }
  }
  return (
    <div className={`${style.buyInfo}`}>
        <h5>$ {price}</h5>
        <div className={`${style.buttonsBox}`}>
            <button className={`${style.buyButton} btn`} onClick={handleBuy} ref={addRef}>Add to Cart</button>
            <button className={`${style.removeButton} btn bg-danger`} onClick={handleRemove} ref={removeRef}>Remove from Cart</button>
            <button className={`${style.wishButton} btn`}><MdFavoriteBorder /> Whishlist</button>
        </div>
        <div className={`${style.videoPropsList}`}>
            <div className={`${style.videoProps}`}><span className={`${style.videoPropsIcon}`}><MdListAlt /></span><span className={`${style.videoPropsText}`}>22 Section</span></div>
            <div className={`${style.videoProps}`}><span className={`${style.videoPropsIcon}`}><MdChromeReaderMode /></span><span className={`${style.videoPropsText}`}>152 Lectures</span></div>
            <div className={`${style.videoProps}`}><span className={`${style.videoPropsIcon}`}><MdLiveTv /></span><span className={`${style.videoPropsText}`}>21h 33m total lenghts</span></div>
            <div className={`${style.videoProps}`}><span className={`${style.videoPropsIcon}`}><MdVolumeUp /></span><span className={`${style.videoPropsText}`}>English</span></div>
        </div>
    </div>
  )
}
