import React, { useEffect, useState } from 'react'
import VideoAuthor from '../../components/VideoAuthor/VideoAuthor'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import Player from '../../components/Player/Player'
import style from './style.module.css'
import CourseBuy from '../../components/CourseBuy/CourseBuy'
import { useSelector } from 'react-redux'
export default function Course() {

  const courseData = JSON.parse(localStorage.getItem('courseData')) || []
  
  const cart = JSON.parse(localStorage.getItem('cart'))

  const user = useSelector(state => state.auth.value)
  return (
    <div className='d-flex flex-column container gap-3'>
        <div className={`${style.videoContentBox}`}>
            <div className={`${style.videoCard}`}>
              <Player thumbnail={courseData.image}/>
            </div>
            <div>
              
              <CourseBuy price = {courseData.actual_price_usd} element={courseData} />
              
            </div>
        </div>
        <div className={`${style.videoInfoBox}`}>
          <div>
            <h1 className={`${style.videoTitle}`}>{courseData.name}</h1>
            <div><VideoAuthor author = {courseData.category}/></div>
            <div className={`${style.bio}`}>
              <h5>About Course</h5>
              <p>{courseData.description}</p>
            </div>
            <div>
              <h5>Review</h5>
              <div>
                <ReviewCard />
              </div>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  )
}
