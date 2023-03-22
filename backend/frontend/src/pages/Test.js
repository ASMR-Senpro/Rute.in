import React from "react"
import LoginBtn from "../components/button/LoginBtn"
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
      </main>
    </div>
  )
}

export default Test
