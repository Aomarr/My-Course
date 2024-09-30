import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import LoginModal from "../Modal/LoginModal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import UseAxios from "../../Hooks/UseAxios";
import { removeUser } from '../../redux/authSlice'

export default function Header() {

  const searchRef = useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.value)

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchRef.current.value) {
      navigate(`/search/${searchRef.current.value}`)
    }
  }

  const logout = () => {
    dispatch(removeUser());
  }
  return (
    <header className={`${style.header}`}>
      <div className={`${style.content} container`}>
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to={"/"} className="navbar-brand" href="#">
              <div className={`${style.logo} d-flex`}>
                <img src="/Logo.svg"></img>
              </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Browse
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={'/search/design'}>
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={'/search/programming'}>
                        Programming
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={'/search/business'}>
                        Business & Marketing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={'/search/photo'}>
                        Photo & Video
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={'/search/writing'}>
                        Writing
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className={`d-flex justify-content-between align-items-center ${style.compound}`}
              >
                <form className="d-flex me-auto" role="search" onSubmit={handleSearch}>
                  <input
                    className={`form-control me-0 border border-0 rounded-0 ${style.searchField}`}
                    type="search"
                    placeholder="Search for course"
                    aria-label="Search"
                    name="search"
                    ref={searchRef}
                  ></input>
                  <button
                    className={`btn btn-outline-secondary border border-0 rounded-0 ${style.searchButton}`}
                    type="submit"
                  >
                    <span className="d-flex align-items-center justife-center">
                      <img src="/search.svg"></img>
                    </span>
                  </button>
                </form>
                <div className={`${style.part3}`}>
                  <a href="#" className={`me-3`}>
                    Become Instructor
                  </a>
                  <span className={`${style.cart} mx-2`}>
                    {user ? <Link to={'/cart'}><FaCartShopping /></Link> : <Link to={'/login'}><FaCartShopping /></Link>}
                  </span>
                  {user !== null ? (
                    <>
                      <span className={`${style.notif} mx-2`}>
                        <IoMdNotificationsOutline />
                      </span>
                      <span className={`dropdown me-0 dropdown-center ${style.userIcon}`}>
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="10,20"
                        >
                          <img className="img-fluid" src={user.image}></img>
                        </button>
                        <ul className={`dropdown-menu ${style.dropDownMenuItems}`}>
                          <li>
                            <Link to={'/profile'} className="dropdown-item" href="#">
                              <h5 className={style.listUserName}>{user.firstName} {user.lastName}</h5>
                              <span className={style.listUserEmail}>{user.email}</span>
                            </Link>
                          </li>
                          <li><hr className="dropdown-divider"></hr></li>
                          <li>
                            <a className="dropdown-item" href="#">
                              My Courses
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              My Cart
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Wishlist
                            </a>
                          </li>
                          <li><hr className="dropdown-divider"></hr></li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Notifications
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Account Settings
                            </a>
                          </li>
                          <li><hr className="dropdown-divider"></hr></li>
                          <li>
                            <a className={`dropdown-item ${style.logOut}`} href="#" onClick={logout}>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </span>
                    </>
                  ) : (
                    <LoginModal />
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
