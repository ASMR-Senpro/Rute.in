import React from "react"
import { Link } from "react-router-dom"
import SocialBtn from "../button/SocialBtn"
import SocialBtnBox from "../button/SocialBtnBox"
import RuteinLogo from "../logo/RuteinLogo"

export default function Footer() {
  return (
    <footer className="h-24 w-full box-border bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-700 text-center text-white">
      <div id="footer__container" className="h-full w-full flex items-center">
        <div className="w-full mx-24 flex justify-between items-center">
          {/* logo */}
          <RuteinLogo className={"text-h-lg font-extrabold text-white"} />

          {/* menu */}
          <div className={`font-medium flex-1 justify-self-center`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/">Destinasi</Link>
              </li>
              <li className="">
                <Link to="/">Artikel</Link>
              </li>
              <li className="">
                <Link to="/">Tentang Kami</Link>
              </li>
            </ul>
          </div>

          {/* social media */}
          <SocialBtnBox />
        </div>
      </div>
    </footer>
  )
}
