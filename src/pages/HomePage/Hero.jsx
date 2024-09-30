import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className={`${style.heroSection}`}>
        <div className={`${style.heroLabel}`}>
          <h1>Learn something new everyday.</h1>
          <p>Become professionals and ready to join the world.</p>
          <Link to={'/search/photography'} className={`btn btn-light ${style.explore}`}>Explore Photography</Link>
        </div>
        <div className={`${style.heroBanner}`}>
          <div className={`${style.bannerText}`}>
            <div className={`${style.bannerAuthor}`}>
              <div className={`${style.image}`}>
                <img src='/src/assets/images/Square.png'></img>
              </div>
              <div>
                <h4>Jessy Wong</h4>
                <span>Photographer</span>
              </div>
            </div>
            <div>
              <h4>Winner Photo 2017 Awards</h4>
              <span>Joined Klevr since 2006</span>
            </div>
          </div>
        </div>
    </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <div className={`${style.heroSection}`}>
        <div className={`${style.heroLabelSec}`}>
          <h1>Learn something new everyday.</h1>
          <p>Become professionals and ready to join the world.</p>
          <Link to={'/search/photography'} className={`btn btn-light ${style.exploreSec}`}>Explore Photography</Link>
        </div>
        <div className={`${style.heroBannerSec}`}>
          <div className={`${style.bannerText}`}>
            <div className={`${style.bannerAuthor}`}>
              <div className={`${style.image}`}>
                <img src='/src/assets/images/Square.png'></img>
              </div>
              <div>
                <h4>Jane Kitani</h4>
                <span>Toys Photographer</span>
              </div>
            </div>
            <div>
              <h4>Winner Photo 2018 Awards</h4>
              <span>Joined Klevr since 2006</span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </>
  )
}
