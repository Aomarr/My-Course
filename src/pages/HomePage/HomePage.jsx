import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Card from "../../components/Card/Card";
import style from "./style.module.css";
import UseAxios from "../../Hooks/UseAxios";
import axios from "axios";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [courses, setCourses] = useState([]);
  const courseData = JSON.parse(localStorage.getItem("courseData")) || [];
  const placeHolder = <Loader />

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/",
      params: {
        page: "1",
        page_size: "12",
      },
      headers: {
        "x-rapidapi-key": "6d3d2bea7dmshab594d8ac846be3p17f160jsnd5ec5353f4ed",
        "x-rapidapi-host": "udemy-paid-courses-for-free-api.p.rapidapi.com",
      },
    })
      .then((res) => {
        setLoader(false);
        setCourses(res.data.courses);
      })
      .catch(() => {
        setLoader(false);
        setError(true);
      });
  }, []);

  const list = courses.map((element, index) => (
    <Card
      // onClick={() => {
      //   const cartItem = element;
      //   courseData.push(cartItem);
      //   localStorage.setItem('courseData', JSON.stringify(courseData));
      // }}
      element={element}
      key={index}
      // title={element.name}
      // image={element.image}
      // author={element.category}
      // describe={element.description}
      // price={element.actual_price_usd}
    />
  ));
  return (
    <div>
      <div className="container">
        <Hero />
        <div>
          <h4 className={`${style.sectionLabel}`}>Trending Courses</h4>
          <p className={`${style.sectionInfo}`}>
            We know the best things for You. Top picks for You.
          </p>
          
          <div className={`${style.trending}`}>
            {loader && <div className={`${style.placeHolder}`}>{placeHolder}{placeHolder}{placeHolder}{placeHolder}</div>}
            {list}
            {error ? <Error /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
