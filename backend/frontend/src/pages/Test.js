import React, { useState } from "react"
import LoginBtn from "../components/button/LoginBtn"
import SocialBtn from "../components/button/SocialBtn"
import Footer from "../components/footer/Footer"
import RuteinLogo from "../components/logo/RuteinLogo"
import DeleteModal from "../components/modal/DeleteModal"
import Navbar from "../components/navbar/Navbar"

const Test = () => {
  const [showDelModal, setShowDelModal] = useState(false)

  return (
    <div className="h-[1000px]">
      <div className="my-16">
        <Navbar />
      </div>

      <main className="px-12 mt-32">
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

      <div className="my-16">
        <Footer />
      </div>

      {/* delete modal demo */}
      <div className="flex flex-col items-center">
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
  )
}

export default Test
