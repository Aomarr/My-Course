import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

import style from './style.module.css'
export default function ReviewCard() {
  const [comment, setComment] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/comments?limit=10')
    .then(res => res.json())
    .then(res => setComment(res.comments))
    ,[]})
  return (
    <>
    {
      comment.map((el, i) => (
        <div className={`d-flex gap-2`} key={i}>
        <div className={`d-flex ${style.image}`}>
        <FaUserCircle />
        </div>
        <div className={`${style.comment}`}>
            <h4 className={`${style.writer}`}>{el.user.fullName}</h4>
            <span className={`${style.date}`}>date</span>
            <p>{el.body}</p>
        </div>
        </div>
      ))
    }
    </>
  )
}
