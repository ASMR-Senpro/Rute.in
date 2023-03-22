import React from "react"

function Backdrop({ sidebar, closeSidebar }) {
  return (
    <div
      id="backdrop"
      className={`fixed top-0 left-0 w-full h-[100vh] bg-transparent bg-opacity-50 ${
        sidebar ? "block" : "hidden"
      }`}
      onClick={closeSidebar}
    ></div>
  )
}

export default Backdrop
