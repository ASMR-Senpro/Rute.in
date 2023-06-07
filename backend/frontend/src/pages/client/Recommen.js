import React from "react"
import Navbar from "../../components/navbar/Navbar"
import RecommenBar from "../../components/recommen/RecommenBar"
import SearchBar from "../../components/searchbar/Searchbar"

const Recommen = () => {
  const paketRecom = [
    {
      _id: 1,
      location: ["one", "two", "three", "four", "five"],
    },
    {
      _id: 2,
      location: ["aaa", "bbb", "ccc", "ddd", "eee"],
    },
    {
      _id: 3,
      location: ["one", "two", "three", "four", "five"],
    },
    {
      _id: 4,
      location: ["one", "two", "three", "four", "five"],
    },
    {
      _id: 5,
      location: ["one", "two", "three", "four", "five"],
    },
    {
      _id: 6,
      location: ["one", "two", "three", "four", "five"],
    },
  ]

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* searchbar */}
      {/* <div className="mt-48 mb-24 flex justify-center items-center"> */}
        <div className="top-16 sticky flex flex-col justify-end z-20 bg-white gap-4 py-4">
          <SearchBar />
        </div>
      {/* </div> */}

      {/* main content */}
      <main className="py-24 w-full bg-cyan-300">
        <div className="flex flex-col gap-4 justify-center items-center">
          {paketRecom
            ? paketRecom.map(({ _id, location }) => (
              <RecommenBar location={location} />
            ))
            : null}
        </div>
      </main>
    </div>
  )
}

export default Recommen
