import React, { useRef, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import style from "./style.module.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import UseAxios from "../../Hooks/UseAxios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import regIcon from "../../assets/images/reg-icon.png"

export default function Login({ close, change, disp }) {
    const navigate = useNavigate()
    const axiosInstance = UseAxios()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const dispatch = useDispatch()
    const token = JSON.parse(sessionStorage?.getItem('token'))
    const user = useSelector(state => state.value)
    const [ failed, SetFailed ] = useState(false)


    const handleSubmit = async (e) => {

        e.preventDefault()

        const res = await axiosInstance.post('/auth/login', {
            
            username: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        },
        {
            headers: { 'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        })
        .then(res => {
            console.log(res);
            sessionStorage.setItem('token', JSON.stringify(res.data.accessToken));
            dispatch(setUser(res.data));
        })
        .catch(()=> {SetFailed(true)})
        document.querySelector('.modal-backdrop').remove()
        document.querySelector('body').classList.remove('modal-open')
    }

    return (
        <div className="container p-0">
            <div className={`d-flex flex-row flex-wrap justify-content-center ${style.section}`}>
                <div className={`${style.banner} d-none d-lg-flex`}>
                    <div className="d-flex align-items-center p-3 gap-2">
                        <div className={`${style.bannerIcon}`}><img src={regIcon}></img></div>
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
                            Join us and get more benefits. We promise to keep your data
                            safely.
                        </p>
                        <form className={`d-flex flex-column align-items-center ${style.formbox}`} onSubmit={handleSubmit} data-target="#exampleModalToggle">
                            <div className={` input-group mb-3 d-flex ${style.inputbox}`}>
                                <input
                                    type="email"
                                    className={` form-control ${style.inputfield}`}
                                    placeholder="Email Adress"
                                    aria-label="Email Adress"
                                    aria-describedby="basic-addon2"
                                    ref={emailInputRef}
                                    name="email"
                                    id="signinEmail"
                                    autoComplete="off"
                                ></input>
                                <span
                                    className={`input-group-text ${style.inputicon}`}
                                    id="basic-addon2"
                                >
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
                                    ref={passwordInputRef}
                                    name="password"
                                    id="signinPassword"
                                ></input>
                                <span
                                    className={`input-group-text ${style.inputicon}`}
                                    id="basic-addon2"
                                >
                                    <MdLock />
                                </span>
                            </div>
                            {failed && <p className="text-danger fw-bold">Wrong username or password</p>}
                            <button className={`${style.submit} btn`} type="submit">
                                Login
                            </button>
                        </form>
                        <p className="text-center my-3">Or you can</p>
                        <div className="d-flex flex-column gap-2 mb-4">
                            <a
                                href="#"
                                className={`${style.social} ${style.socialFacebook} btn`}
                            >
                                <span className={`${style.socialLogo}`}>
                                    <BiLogoFacebookSquare />
                                </span>
                                Continue with Facebook
                            </a>
                            <a
                                href="#"
                                className={`${style.social} ${style.socialApple} btn`}
                            >
                                <span className={`${style.socialLogo}`}>
                                    <FaApple />
                                </span>
                                Continue with Apple
                            </a>
                            <a
                                href="#"
                                className={`${style.social} ${style.socialGoogle} btn`}
                            >
                                <span className={`${style.socialLogo}`}>
                                    <FcGoogle />
                                </span>
                                Continue with Google
                            </a>
                        </div>
                        <p className={`${style.changeBox}`}>Need an Account? {change}</p>
                        <p className={`${style.changeBox}`}>example: jamesd | jamesdpass</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
