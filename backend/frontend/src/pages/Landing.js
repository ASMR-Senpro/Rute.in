import React from "react"
import { Icon } from "@iconify/react"
import Navbar from "../components/navbar/Navbar"
import SearchBar from "../components/searchbar/Searchbar"
import TouristImg from "../assets/images/tourist.png"
import Carousel from "../components/carousel/Carousel"

const Landing = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Navbar />
      <main className="mt-24 w-10/12 bg-white relative">
        <div className="absolute left-[-280px] top-[400px]">
          <img src={TouristImg} alt="Tourist Image"></img>
        </div>
        <div
          id="title"
          className="flex flex-col justify-center items-center text-h-xl font-bold py-16"
        >
          <h1>Bingung mau wisata ke mana?</h1>
          <h1>
            di <span className="text-orange-700">Rute.in</span> aja
          </h1>
        </div>
        <div id="searchbar" className="h-full">
          <SearchBar />
        </div>
        <div
          id="white__space"
          className="m-8 h-64 rounded-3xl bg-white shadow-2xl"
        ></div>
        <div
          id="jelajahi"
          className="my-8 p-4 flex flex-col gap-2 items-center justify-center"
        >
          <h4 className="text-h-lg font-semibold">
            Jelajahi lebih banyak destinasi wisata
          </h4>
          <div>
            <Icon
              icon="subway:down-2"
              className="text-h-xl text-cyan-500"
            ></Icon>
          </div>
        </div>
        {/* carousel */}
        <div id="carousel" className="flex flex-col mt-40 mb-40">
          {/* <div id="carousel__title" className="text-h-lg font-semibold">
            Trending 2023
          </div> */}
          <div id="carousel__box">
            <Carousel />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
