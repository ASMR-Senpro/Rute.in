import React from "react"
import SearchBar from "../components/searchbar/Searchbar"
import Navbar from "../components/navbar/Navbar"

const Landing = () => {
  return (
    <div className="flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen items-center">
        <SearchBar />
      </div>
    </div>
  )
}

export default Landing
