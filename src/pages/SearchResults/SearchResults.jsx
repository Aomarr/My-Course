import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Card from "../../components/Card/Card";
import OffCanvas from "../../components/OffCanvas/OffCanvas";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../../components/Error/Error";

export default function SearchResults() {
    const { param } = useParams();
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);
    const placeHolder = (
        <>
            <div className="card" aria-hidden="true">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a
                        className="btn btn-primary disabled placeholder col-6"
                        aria-disabled="true"
                    ></a>
                </div>
            </div>
        </>
    );
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search",
            params: {
                page: "1",

                query: `${param}`,
            },
            headers: {
                "x-rapidapi-key": "63f1b4a340mshe993d0c793367e7p1f3750jsnea446d46dfb7",
                "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
            },
        })
            .then((res) => {
                setResults(res.data.courses);
                setLoader(false);
            })
            .catch(() => {
                setError(true);
                setLoader(false);
            });
    }, [param]);
    const searchResults = results.map((element, index) => (
        <Card key={index} element={element} />
    ));

    return (
        <div className={`container d-flex flex-row flex-wrap gap-3`}>
            <div>
                <button
                    className={`btn ${style.menu}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"
                >
                    Filter
                </button>

                <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    data-bs-backdrop="false"
                    tabIndex="-1"
                    id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title fw-bold"
                            id="offcanvasScrollingLabel"
                        >
                            Filter
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <form>
                            <div>
                                <h5>Rating</h5>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="rating1"
                                    ></input>
                                    <label className="form-check-label" htmlFor="rating1">
                                        <span className={`${style.stars}`}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaRegStarHalfStroke />
                                        </span>
                                        <span>4.5 & up</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="rating2"
                                    ></input>
                                    <label className="form-check-label" htmlFor="rating2">
                                        <span className={`${style.stars}`}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaRegStarHalfStroke />
                                        </span>
                                        <span>3.5 & up</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="rating3"
                                    ></input>
                                    <label className="form-check-label" htmlFor="rating3">
                                        <span className={`${style.stars}`}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </span>
                                        <span>3.0 & up</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h5>Video Duration</h5>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="2"
                                        id="duration1"
                                    ></input>
                                    <label className="form-check-label" htmlFor="duration1">
                                        0-2 Hours
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="5"
                                        id="duration2"
                                    ></input>
                                    <label className="form-check-label" htmlFor="duration2">
                                        3-5 Hours
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="6"
                                        id="duration3"
                                    ></input>
                                    <label className="form-check-label" htmlFor="duration3">
                                        6-12 Hours
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="12"
                                        id="duration4"
                                    ></input>
                                    <label className="form-check-label" htmlFor="duration4">
                                        12+ Hours
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.results} row`}>
                    {loader && (
                        <div className={`${style.placeHolder}`}>
                            {placeHolder}
                            {placeHolder}
                            {placeHolder}
                            {placeHolder}
                        </div>
                    )}
                    {searchResults}
                    {error && (
                        <div className="text-center z-3">
                            <Error />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
