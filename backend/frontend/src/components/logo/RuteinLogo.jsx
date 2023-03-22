import React from "react"

export default function RuteinLogo({ className }) {
  return (
    <div className="min-w-min max-w-min px-4">
      <h1 className={`${className}`}>RUTE.IN</h1>
    </div>
  )
}

RuteinLogo.defaultProps = {
  className: "text-h-lg font-extrabold text-orange-700",
}
