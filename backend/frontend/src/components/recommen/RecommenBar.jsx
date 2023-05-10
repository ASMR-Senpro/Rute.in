import React from "react"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

function RecommenBar() {
  const paketRecom = [
    {
      _id: 1,
      location: "location one",
    },
    {
      _id: 2,
      location: "location two",
    },
    {
      _id: 3,
      location: "location three",
    },
    {
      _id: 4,
      location: "location four",
    },
    {
      _id: 5,
      location: "location five",
    },
  ]

  return (
    <div className="w-10/12 h-20 rounded-lg border-[3px] border-neutral-300 bg-neutral-50 flex">
      {/* title */}
      <div className="w-60 px-6 text-b-xl font-semibold flex items-center">
        Paket Lorem
      </div>
      {/* content */}
      <div className="w-full p-2 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center gap-3">
          {paketRecom
            ? paketRecom.map(({ _id, location }) => (
                <div
                  key={_id}
                  className="w-1/5 h-full rounded-md border-2 border-neutral-100 flex justify-center items-center"
                >
                  {location}
                </div>
              ))
            : null}
        </div>
      </div>

      {/* button */}
      <Link className="w-16 rounded-md text-white bg-cyan-700 flex justify-center items-center">
        <Icon icon="ic:round-keyboard-arrow-right" className="w-3/4 h-3/4" />
      </Link>
    </div>
  )
}

export default RecommenBar
