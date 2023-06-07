import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import Navbar from "../../components/navbar/Navbar"
import SearchBar from "../../components/searchbar/Searchbar"
import TouristImg from "../../assets/images/tourist.png"
import Carousel from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer"
import axios from 'axios';
import useFetch from "../../hooks/useFetch"
import { useRecommendContext } from '../../hooks/destination/useRecommendContext'
import { useDisplayContext } from "../../hooks/useDisplayContext";
import { useHandleRecommend } from "../../hooks/destination/useHandleRecommend"

const Dashboard = () => {
  // const [user_id, setUser_ID] = useState(2)

  // const { recommends, dispatch } = useRecommendContext();
  // const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  // const url = "http://127.0.0.1:5000/recommend"

  // const data = { user_id }
  // const { handleAdd: handleSubmit } = useHandleRecommend({ url: url, type: 'GET_RECOMMEND', dispatch, data: data, setLoading, setError });
  // useEffect(()=>{
  //   handleSubmit()
  // },[])
  const sendData = async () => {
    try {
      const data = {
        user_id: 87
      };

      const response = await axios.post('http://127.0.0.1:5000/recommend', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
  	sendData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between">
      <main className="mt-24 w-10/12 bg-white relative">
        <div className="absolute -left-64 top-80">
          <img src={TouristImg} alt="Tourist Image"></img>
        </div>
        <section className="min-h-screen max-h-screen flex flex-col justify-start">
          <div className="flex flex-col justify-start">
            <div
              id="title"
              className="flex flex-col justify-center items-center text-h-lg font-bold py-16"
            >
              <h1>Bingung mau wisata ke mana?</h1>
              <h1>
                di <span className="text-orange-700">Rute.in</span> aja
              </h1>
            </div>
            <div
              id="searchbar"
              className="flex flex-col justify-center items-center mx-auto w-10/12 h-full gap-4"
            >
              <SearchBar />
              <div
                id="white__space"
                className="h-64 rounded-3xl bg-white shadow-2xl w-10/12 z-50 bg-opacity-60"
              >
              </div>
            </div>
          </div>
          <div
            id="jelajahi"
            className="my-8 p-4 flex flex-col gap-2 items-center justify-center"
          >
            <h4 className="text-h-sm font-semibold">
              Jelajahi lebih banyak destinasi wisata
            </h4>
            <div>
              <Icon
                icon="subway:down-2"
                className="text-h-md text-cyan-500"
              ></Icon>
            </div>
          </div>
        </section>
        <section>
          {/* carousel */}
          <div id="carousel" className="flex flex-col mt-40 mb-40">
            <div id="carousel__title" className="text-h-lg font-semibold text-center">
              Trending 2023
            </div>
            <div id="carousel__box">
              <Carousel />
            </div>
          </div>
        </section>
      </main>
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
