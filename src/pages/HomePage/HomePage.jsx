import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Card from '../../components/Card/Card'
import style from './style.module.css'
import UseAxios from '../../Hooks/UseAxios'
import axios from 'axios';
import Error from '../../components/Error/Error'


export default function HomePage() {
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(true);
  const [courses, setCourses] = useState([])
  const axiosInstance = UseAxios()
  const courseData = JSON.parse(localStorage.getItem('courseData')) || [];
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/',
      params: {
        page: '1',
        page_size: '8'
      },
      headers: {
        'x-rapidapi-key': '439c35ee5fmsh73d932b78329c55p188d2ejsn04ce436b4df7',
        'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
      }
    }).then(res => {
      setLoader(false)
      setCourses(res.data.courses)
    })
      .catch(() => {
        setLoader(false)
        setError(true)
      });
  }
    , [])

    
    const list = courses.map((element, index) => (
      <Card
        // onClick={() => {
        //   const cartItem = element;
        //   courseData.push(cartItem);
        //   localStorage.setItem('courseData', JSON.stringify(courseData));
        // }}
        element = {element}
        key={index}
        // title={element.name}
        // image={element.image}
        // author={element.category}
        // describe={element.description}
        // price={element.actual_price_usd}
      />
    ));
  return (
    <div>
      <div className='container'>
        <Hero />
        <div>
          <h4 className={`${style.sectionLabel}`}>Trending Courses</h4>
          <p className={`${style.sectionInfo}`}>We know the best things for You.  Top picks for You.</p>
          <div className={`${style.trending}`}>
            {list}
            {/* {error ? <Error /> : <></>} */}
          </div>
        </div>
      </div>
    </div>
  )
}
