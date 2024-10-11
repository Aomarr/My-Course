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

  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])
  const [ isCarted, setIsCarted ] = useState()
  const [ isWished, setIsWished ] = useState()

  const user = useSelector(state => state.auth.value)
  const navigate = useNavigate()
  const addRef = useRef()
  const removeRef = useRef()
  const addWishRef = useRef()
  const removeWishRef = useRef()

  useEffect(()=> {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const wish = JSON.parse(localStorage.getItem('wish')) || []
    setCart(cart)
    setWish(wish)
    const globalExist = cart.find((item)=> item.name === element.name)
    const wishExist = wish.find((item)=> item.name === element.name)
    setIsCarted(globalExist)
    setIsWished(wishExist)
    if (globalExist == undefined) {
      addRef.current.style.display = "inline-block";
      removeRef.current.style.display = "none";

    }
    else if (globalExist != undefined) {
      addRef.current.style.display = "none";
      removeRef.current.style.display = "inline-block";
    }

    if (wishExist == undefined) {
      addWishRef.current.style.display = "inline-block";
      removeWishRef.current.style.display = "none";
    }
    else if (wishExist != undefined) {
      addWishRef.current.style.display = "none";
      removeWishRef.current.style.display = "inline-block";
    }
  },[])

  const handleBuy = (e) => {
    const removeBtn = removeRef.current

    const exist = cart.find((item)=> item.name === element.name)

    if (user == null) {
      navigate('/login')
    }
    else if (user !== null) {
      cart.push(element)
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsCarted(element)
      e.target.style.display = "none"
      removeBtn.style.display = "inline-block"
    }

  }
  
  const handleRemove = (e) => {
    const addBtn = addRef.current
    const exist = cart.find((item)=> item.name == element.name)
    if ((isCarted !== undefined)) {
      const place =cart.indexOf(exist)
      cart.splice(place, 1)
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsCarted(undefined)
      e.target.style.display = "none"
      addBtn.style.display = "inline-block"
    }
  }

  const AddToWishList = (e) => {
    const removeRefBtn = removeWishRef.current
    if (user == null) {
      navigate('/login')
    }
    else if (user !== null) {
      wish.push(element)
      localStorage.setItem('wish', JSON.stringify(wish));
      setIsWished(element)
      e.target.style.display = "none"
      removeRefBtn.style.display = "inline-block"
    }
  }

  const RemoveWishList = (e) => {
    const addRefBtn = addWishRef.current
    const exist = wish.find((item)=> item.name == element.name)
    if ((isWished !== undefined)) {
      const place = wish.indexOf(exist)
      wish.splice(place, 1)
      localStorage.setItem('wish', JSON.stringify(wish));
      setIsWished(undefined)
      e.target.style.display = "none"
      addRefBtn.style.display = "inline-block"
    }
  }

  return (
    <div className={`${style.buyInfo}`}>
        <h5>$ {price}</h5>
        <div className={`${style.buttonsBox}`}>
            <button className={`${style.buyButton} btn`} onClick={handleBuy} ref={addRef}>Add to Cart</button>
            <button className={`${style.removeButton} btn bg-danger`} onClick={handleRemove} ref={removeRef}>Remove from Cart</button>
            <button className={`${style.wishButton} btn`} onClick={AddToWishList} ref={addWishRef}><MdFavoriteBorder /> Whishlist</button>
            <button className={`${style.removeButton} btn`} onClick={RemoveWishList} ref={removeWishRef}><MdFavoriteBorder /> Remove from Wishlist</button>
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
