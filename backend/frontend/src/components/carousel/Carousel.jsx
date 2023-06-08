import React, { useState } from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Carousel.css"

import { useDestinationContext } from '../../hooks/useDestinationContext'
import { useDisplayContext } from '../../hooks/useDisplayContext'

import { recommenData } from "./recommenData"
import useFetch from "../../hooks/useFetch"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}

export default function Carousel() {
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  const { destinations, dispatch } = useDestinationContext();

  const url = "http://localhost:3100/api/destinations/"
  useFetch({ url, dispatch, setError, setLoading, type: "GET_DESTINATION" });

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastTask = currentPage * postPerPage;
  const indexOfFirstTask = indexOfLastTask - postPerPage;
  const destCurrent = destinations && destinations.slice(indexOfFirstTask, indexOfLastTask);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="w-[80%] mx-auto p-8 rounded-2xl shadow-lg">
      <div id="content__container" className="rounded-2xl">
        <Slider {...settings}>
          {destCurrent && destCurrent.map((item) => (
            <div
              key={item.id}
              id="card"
              className="h-full rounded-2xl overflow-hidden"
            >
              <div className="h-4/6 card-image">
                <img
                  src={item.ImageURL}
                  alt={item.Place_Name}
                  className="object-cover w-full min-w-full h-full min-h-full"
                />
              </div>
              <div className="card-desc text-center mt-4">
                <Link to="/article">
                  <h4 className="text-h-sm font-semibold">{item.Place_Name}</h4>
                </Link>
                <h5 className="text-b-md text-sm">{item.City}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
