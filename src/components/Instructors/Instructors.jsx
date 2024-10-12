import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./style.module.css";


export default function Instructors() {
  const [ staff, setStaff] = useState([])
    useEffect(()=>{
      axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=4"
      })
      .then(res=> setStaff(res.data.results))
    },[])
    const staffList = staff.map((element, index)=>(
      <div key={index} className={`${style.instructorCard}`}>
        <img className='img-fluid' src={element.picture.large}>
        </img>
        <span>
        <h5>{element.name.first} {element.name.last}</h5>
        </span>
      </div>
    ))
  return (
    <div>
        <div className={`${style.staffTable}`}>
            {staffList}
        </div>
    </div>
  )
}
