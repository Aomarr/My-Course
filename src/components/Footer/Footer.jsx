import React from 'react'
import style from './style.module.css'
import { IoMdSearch } from "react-icons/io";

export default function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.remove()
    }

    return (
        <footer className={`${style.footer}`}>
            <form className={`${style.newsLetter} container`} onSubmit={handleSubmit}>
                <div>
                    <h3>Join and get amazing discount</h3>
                    <p>With our responsive themes and mobile and desktop apps</p>
                </div>
                <div className='d-flex gap-3 align-items-center flex-wrap'>
                    <div className={`input-group ${style.newsInput}`}>
                        <input type="email" className="form-control bg-white bg-opacity-25 border border-0" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" required></input>
                        <button className="btn btn-outline-secondary text-white bg-white bg-opacity-25 border border-0" type="button" id="button-addon2"><IoMdSearch /></button>
                    </div>
                    <button>Subscribe</button>
                </div>
            </form>
            <div className={`${style.footerBodyContent}`}>
                <div className='container'>
                    <div className={`d-flex ${style.content}`}>
                        <div className={`${style.logo} d-flex`}>
                            <img src='/Logo2.svg'></img>
                        </div>
                        <div>
                            <ul className={`${style.listContain}`}>
                                <li><a href='#'>Web Programming</a></li>
                                <li><a href='#'>Mobile Programming</a></li>
                                <li><a href='#'>Java Beginner</a></li>
                                <li><a href='#'>PHP Beginner</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className={`${style.listContain}`}>
                                <li><a href='#'>Adobe Illustrator</a></li>
                                <li><a href='#'>Adobe Photoshop</a></li>
                                <li><a href='#'>Design Logo</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className={`${style.listContain}`}>
                                <li><a href='#'>Writing Course</a></li>
                                <li><a href='#'>Photography</a></li>
                                <li><a href='#'>Video Making</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-between flex-wrap p-3 ${style.copyright}`}>
                        <span>Copyright © MyCourse.io 2024. All Rights Reserved</span>
                        <div className={`d-flex gap-3`}>
                            <span className={`${style.social} d-flex`}><a href='https://x.com'><img src='/Twitter.svg'></img></a></span>
                            <span className={`${style.social} d-flex`}><a href='https://www.instagram.com/'><img src='/Instagram.svg'></img></a></span>
                            <span className={`${style.social} d-flex`}><a href='https://www.facebook.com/'><img src='/Facebook.svg'></img></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
