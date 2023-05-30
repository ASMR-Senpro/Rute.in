import React from "react"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import DestinationCard from "../components/card/DestinationCard"
import AddBtn from "../components/button/AddBtn"
import Search from "../components/searchbar/AdminSearch"
import { recommenData } from "../components/carousel/recommenData"

const DashboardAdmin = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main className="flex flex-col gap-4 py-24 w-full">
        <div className="flex justify-center w-full">
            <Search />
        </div>
        <div className="flex justify-center">
            <AddBtn />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          {recommenData
            ? recommenData.map(({ _id, name, location, imageURL }) => (
                <DestinationCard name={name} location={location} imageURL={imageURL}/>
              ))
            : null}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default DashboardAdmin
