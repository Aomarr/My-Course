import React from 'react'
import { TbError404 } from "react-icons/tb";
import style from './style.module.css'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className={`${style.errorbox}`}>
        <div className={`${style.errorlogo}`}><TbError404 /></div>
        <p className={`${style.errortext}`}>Error 404: Not Found</p>
        <Link to={'/'} className={`${style.errorlink}`}>Back to Home Page</Link>
    </div>
  )
}
