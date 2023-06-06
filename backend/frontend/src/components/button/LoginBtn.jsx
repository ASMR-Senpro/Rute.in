import React from "react"
import { Link } from "react-router-dom"

function LoginBtn({ onClick }) {
  return (
    <Link to="/login" onClick={onClick}>
      <div
        id="login"
        className="h-10 w-32 bg-cyan-500 text-white shadow-md rounded-2xl flex justify-center items-center text-b-xl"
      >
        Login
      </div>
    </Link>
  )
}

export default LoginBtn
