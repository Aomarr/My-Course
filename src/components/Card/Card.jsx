import React from 'react'
import { MdPersonOutline } from "react-icons/md";
import style from './style.module.css'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Card({ element }) {
    const courseData = element
    const image = element.image
    const title = element.name
    const author = element.category
    const describe = element.description
    const price = element.actual_price_usd
    const handleLink = () => {
        localStorage.setItem('courseData', JSON.stringify(courseData));
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
        </div>
    )
}
