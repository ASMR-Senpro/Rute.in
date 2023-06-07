import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

function AddBtn({ onClick }) {
  return (
    <Link to="/" onClick={onClick}>
        <div class="justify-center flex flex-row h-10 w-52 bg-orange-700 text-white shadow-md rounded-2xl items-center text-b-xl">
            <Icon icon="ic:baseline-plus" className="text-white text-h-lg"></Icon>
            <div id="add">Tambah Destinasi</div>
        </div>
    </Link>
  )
}

export default AddBtn