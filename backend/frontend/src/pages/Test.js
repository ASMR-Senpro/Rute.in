import React from "react"
import { Link } from "react-router-dom"
import LoginBtn from "../components/button/LoginBtn"
import SocialBtn from "../components/button/SocialBtn"
import Footer from "../components/footer/Footer"
import RuteinLogo from "../components/logo/RuteinLogo"
import Navbar from "../components/navbar/Navbar"

const Test = () => {
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
    </div>
  )
}

export default Test
