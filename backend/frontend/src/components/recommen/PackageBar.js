import React from "react"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

function PackageBar({ item }) {
    const place = [
        item.Place_Tourism1, 
        item.Place_Tourism2,
        item.Place_Tourism3,
        item.Place_Tourism4,
        item.Place_Tourism5
    ]

    const wordLimit = 20;

    return (
        <div className="w-10/12 h-20 rounded-lg border-[3px] border-neutral-300 bg-neutral-50 flex">
            {/* title */}
            <div className="w-60 px-6 text-b-xl font-semibold flex items-center">
                {item.City}
            </div>
            {/* content */}
            <div className="w-full p-2 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center gap-3">
                    {place
                        && place.map((dest) => (
                            <div className="text- text-center w-1/5 h-full rounded-md border-2 border-neutral-100 flex justify-center items-center">
                                {dest?.length>wordLimit?
                                    <p>{dest.substr(0, wordLimit)}...</p>
                                :
                                    <p>{dest}</p>
                                }
                            </div>
                        ))}
                </div>
            </div>

            {/* button */}
            <Link className="w-16 rounded-md text-white bg-cyan-700 flex justify-center items-center">
                <Icon icon="ic:round-keyboard-arrow-right" className="w-3/4 h-3/4" />
            </Link>
        </div>
    )
}

export default PackageBar
