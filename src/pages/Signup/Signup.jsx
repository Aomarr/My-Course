import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import style from './style.module.css';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";




export default function Signup({ close, change }) {
    return (
        <div className="container p-0">
            <div className={`d-flex flex-row flex-wrap justify-content-center ${style.section}`}>
                <div className={`${style.banner} d-none d-lg-flex align-items-end`}>
                    <div className="d-flex align-items-center p-3 gap-2">
                        <div className={`${style.bannerIcon}`}><img src="/src/assets/images/reg-icon.png"></img></div>
                        <div className={`${style.bannerText}`}>
                            <h5>Joe Kitanoe</h5>
                            <span>Software Developer</span>
                        </div>
                    </div>
                </div>
                <div className={`${style.data}`}>
                <div className={`${style.closer}`}>{close}</div>
                    <div className="px-4 pt-0 pb-4">
                        <div className="mb-2">
                            <img src="/Logo.svg" className="img-fluid"></img>
                        </div>
                        <p className={`${style.info}`}>
                            Join us and get more benefits. We promise to keep your data safely.
                        </p>

                        <div className="d-flex flex-column gap-2">
                            <a href="#" className={`${style.social} ${style.socialFacebook} btn`}><span className={`${style.socialLogo}`}><BiLogoFacebookSquare /></span>Continue with Facebook</a>
                            <a href="#" className={`${style.social} ${style.socialApple} btn`}><span className={`${style.socialLogo}`}><FaApple /></span>Continue with Apple</a>
                            <a href="#" className={`${style.social} ${style.socialGoogle} btn`}><span className={`${style.socialLogo}`}><FcGoogle /></span>Continue with Google</a>
                        </div>
                        <p className="text-center my-3">
                            Or you can
                        </p>
                        <form className="d-flex flex-column align-items-center w-100 mb-4">
                            <div className={` input-group mb-3 d-flex ${style.inputbox}`}>
                                <input
                                    type="text"
                                    className={` form-control ${style.inputfield}`}
                                    placeholder="Email Adress"
                                    aria-label="Email Adress"
                                    aria-describedby="basic-addon2"
                                    name="email"
                                    id="signupEmail"
                                    autoComplete="off"
                                ></input>
                                <span className={`input-group-text ${style.inputicon}`} id="basic-addon2">
                                    <MdOutlineMail />
                                </span>
                            </div>
                            <div className={` input-group mb-3 d-flex ${style.inputbox}`}>
                                <input
                                    type="password"
                                    className={`form-control ${style.inputfield}`}
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon2"
                                    name="password"
                                    id="signupPassword"
                                ></input>
                                <span className={`input-group-text ${style.inputicon}`} id="basic-addon2">
                                    <MdLock />
                                </span>
                            </div>
                            <button className={`${style.submit} btn`} type='submit'>Create Account</button>
                        </form>
                        <p className={`${style.changeBox}`}>Need an Account? {change}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

