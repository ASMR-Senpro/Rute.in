import { useState } from "react"
import { Link } from "react-router-dom"

import RuteinLogo from "../logo/RuteinLogo"
import LoginBtn from "../button/LoginBtn"
import Sidebar from "./Sidebar"
import Backdrop from "./Backdrop"

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <nav className="w-full top-0 fixed z-[9999]">
      <div className="bg-white">
        <div
          id="nav__content__container"
          className="ml-2 mr-4 lg:mx-20 flex justify-center items-center"
        >
          {/* flex basis 1*/}
          <div className="basis-2/3 lg:basis-3/6 lg:px-16 flex items-center py-3 md:block">
            {/* hamburger dan logo */}
            <div className="flex justify-start items-center">
              {/* hamburger */}
              <div className="md:hidden">
                <button
                  className="p-2 text-neutral-700 rounded-md outline-none focus:border-neutral-400 focus:border"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* RUTE.IN Logo */}
              <Link to="/">
                <RuteinLogo />
              </Link>
            </div>
          </div>

          {/* flex basis 2 - menu*/}
          <div
            className={`lg:basis-2/6 text-neutral-900 font-medium flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}
          >
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
                <Link to="/">Tentang</Link>
              </li>
            </ul>
          </div>

          {/* flex basis 3 - login button*/}
          <div className="basis-1/3 lg:basis-1/6 flex justify-end">
            <LoginBtn />
          </div>
        </div>
      </div>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
    </nav>
  )
}
