import React, { useState } from "react"
import ReccomendDisplay from "./ReccommendDisplay"

const Recommend = ({ recommend }) => {
  return (
    <div className="w-full mx-auto rounded-2xl mt-8">
      <div className="flex flex-wrap gap-2 rounded-2xl justify-center">
          {recommend && recommend.map((item) => (
            <ReccomendDisplay item={item} />
          ))}
      </div>
    </div>
  )
}
export default Recommend;