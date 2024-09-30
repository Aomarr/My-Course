import React, { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import style from "./style.module.css";

export default function Profile() {
    const [user, setUser] = useState({});

    const token = JSON.parse(sessionStorage?.getItem("token"));
    const axiosInstance = UseAxios();
    useEffect(() => {
        const getData = axiosInstance
            .get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => setUser(res.data));
    }, [user, token]);
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <div>
                    <h1>My Account</h1>
                </div>
                <div className="d-flex mb-4">
                    <img src={user.image} className="img-fluid"></img>
                </div>
                <form className={`d-flex flex-column gap-2 ${style.profileForm}`}>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="first-name"
                            placeholder="Username"
                            value={`${user.firstName}`}
                            readOnly
                        ></input>
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="last-name"
                            placeholder="Username"
                            value={`${user.lastName}`}
                            readOnly
                        ></input>
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Username"
                            value={`${user.email}`}
                            readOnly
                        ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="gender"
                            placeholder="Username"
                            value={`${user.gender}`}
                            readOnly
                        ></input>
                        <label htmlFor="gender">Gender</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="birth-date"
                            placeholder="Username"
                            value={`${user.birthDate}`}
                            readOnly
                        ></input>
                        <label htmlFor="birth-date">Birth Date</label>
                    </div>
                    <button className={`btn ${style.profileBtn}`}>Save</button>
                </form>
            </div>
        </div>
    );
}
