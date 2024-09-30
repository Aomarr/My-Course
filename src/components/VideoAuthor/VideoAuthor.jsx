import React from 'react';
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import style from './style.module.css'


export default function VideoAuthor({ author }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <div className={`${style.imgBox}`}>
                <img className='img-fluid' src='/src/assets/images/course-author.png'></img>
            </div>
            <div className={`${style.creatorInfo}`}>
                <p className={`${style.creatorName}`}>{author}</p>
                <span className={`${style.creatorType}`}>design studio</span>
            </div>
        </div>
        <div className='d-flex gap-3'>
            <div>
                <span className={`${style.authorBoxIcon}`}><MdSupervisedUserCircle /></span>
                <span className={`${style.authorBoxText}`}>2.3k</span>
            </div>
            <div>
                <span className={`${style.authorBoxIcon}`}><MdRateReview /></span>
                <span className={`${style.authorBoxText}`}>1.4k</span>
            </div>
        </div>
    </div>
  )
}
