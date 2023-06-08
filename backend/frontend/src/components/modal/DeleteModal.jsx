import React from "react"
import { Icon } from "@iconify/react"

//https://larainfo.com/blogs/react-tailwind-css-dialog-modal-example

export default function DeleteModal({ handleDelete, setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* backdrop */}
        <div
          id="delete__modal__backdrop"
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>

        <div
          id="delete__modal"
          className="flex items-center min-h-screen text-b-lg"
        >
          <div className="flex flex-col gap-4 relative w-96 p-4 mx-auto bg-white rounded-md shadow-lg">
            {/* title */}
            <div id="modal__title" className="flex gap-2">
              <div className="flex justify-center items-center">
                <Icon
                  icon="tabler:trash-x"
                  className="text-red-700 text-h-sm font-bold"
                />
              </div>
              <h4 className="font-medium text-red-700">Hapus Data</h4>
            </div>

            {/* description */}
            <p className="leading-relaxed text-gray-500">
              Hapus data secara permanen?
            </p>

            {/* buttons */}
            <div className="flex gap-2">
              <button
                className="w-full p-2 flex-1 text-white bg-red-700 rounded-md outline-none ring-offset-2 ring-red-100 focus:ring-2"
                onClick={handleDelete}
              >
                Hapus
              </button>
              <button
                className="w-full p-2 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-cyan-100 focus:ring-2"
                onClick={() => setOpenModal(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
