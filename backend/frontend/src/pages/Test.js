import React, { useState } from "react"
import LoginBtn from "../components/button/LoginBtn"
import SocialBtn from "../components/button/SocialBtn"
import Carousel from "../components/carousel/Carousel"
import Footer from "../components/footer/Footer"
import RuteinLogo from "../components/logo/RuteinLogo"
import DeleteModal from "../components/modal/DeleteModal"
import Navbar from "../components/navbar/Navbar"
import RecommenBar from "../components/recommen/RecommenBar"

const Test = () => {
  const [showDelModal, setShowDelModal] = useState(false)

  return (
    <div className="h-[1000px]">
      <div className="my-16">
        <Navbar />
      </div>

      <main className="px-12 mt-32">
        <div className="mt-12">
          <Carousel />
        </div>

        <div className="my-16">
          <LoginBtn />
        </div>

        <div className="my-16">
          <RuteinLogo />
        </div>

        <div className="my-16">
          <SocialBtn />
        </div>
      </main>

      <div className="my-16 flex justify-center items-center">
        <RecommenBar />
      </div>

      <div className="my-16">
        <Footer />
      </div>

      {/* delete modal demo */}
      <div className="mb-8">
        <div className="py-8 flex flex-col items-center">
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-md"
            type="button"
            onClick={() => {
              setShowDelModal(true)
            }}
          >
            Hapus
          </button>

          {showDelModal && <DeleteModal setOpenModal={setShowDelModal} />}
        </div>
      </div>

      <div className="mt-24"></div>
    </div>
  )
}

export default Test
