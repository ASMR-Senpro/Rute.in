import React from "react"
import { Link } from "react-router-dom"

export default function Sidebar({ sidebar }) {
  return (
    <div
      id="sidebar"
      className={`absolute bg-cyan-100 text-neutral-900 top-0 left-0 h-[100vh] w-[280px] -translate-x-full transition-all duration-200 p-6 ${
        sidebar ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="text-b-md font-medium">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/">Destinasi</Link>
        </li>
        <li className="p-2">
          <Link to="/">Artikel</Link>
        </li>
        <li className="p-2">
          <Link to="/">Tentang Kami</Link>
        </li>
      </ul>
    </div>
  )
}
