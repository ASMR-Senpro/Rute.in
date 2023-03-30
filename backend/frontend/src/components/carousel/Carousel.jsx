import React from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Carousel.css"

import { recommenData } from "./recommenData"

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
          {recommenData?.map((item) => (
            <div
              key={item.id}
              id="card"
              className="h-full rounded-2xl overflow-hidden"
            >
              <div className="h-4/6 card-image">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="object-cover w-full min-w-full h-full min-h-full"
                />
              </div>
              <div className="card-desc text-center mt-4">
                <Link to="">
                  <h4 className="text-h-sm font-semibold">{item.name}</h4>
                </Link>
                <h5 className="text-b-md">{item.location}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
