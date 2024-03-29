import { Icon } from "@iconify/react"
import React, { useState } from "react"
import DeleteModal from "../modal/DeleteModal.jsx"
import { Link, useParams } from "react-router-dom"
import EditForm from "../modal/EditForm.jsx"
import { useHandleDelete } from '../../hooks/destination/useHandleDelete.js'
import { useDisplayContext } from "../../hooks/useDisplayContext.js"
import { useDestinationContext } from "../../hooks/useDestinationContext.js"

export default function Admin({ destination }) {
  const { dispatch } = useDestinationContext();
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  const [showDelModal, setShowDelModal] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const { handleRemove: handleDelete } = useHandleDelete({ url: 'http://localhost:3100/api/destinations/', type: 'DELETE_DESTINATION', dispatch, data: destination, setLoading, setError, closeDetailPopup: setShowDelModal });

  return (
    <>
      {showEdit && <EditForm dest={destination} isOpen={showEdit} setIsOpen={setShowEdit} />}
      <div class="justify-center flex flex-row space-x-2 bg-transparent h-32">
        <div
          class="justify-center bg-white border-4 border-orange-700 rounded-lg shadow md:flex-row md:max-w-xl"
          style={{ width: "196px" }}
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-32 md:w-48 md:rounded-none md:rounded-l-lg"
            src={destination.ImageURL}
            alt=""
          ></img>
        </div>
        <div
          class="flex flex-col items-center bg-cyan-700 border-0 rounded-lg shadow md:flex-row md:max-w-3xl"
          style={{ width: "1000px" }}
        >
          <div
            class="flex flex-col justify-between p-4 leading-normal"
            style={{ width: "1000px" }}
          >
            <div className="flex flex-row justify-between mt-2">
              <h6 class="text-h-md font-bold tracking-tight text-neutral-50 dark:text-white">
                {destination.Place_Name}
              </h6>
              <div class="justify-end flex flex-row">
                <button
                  onClick={() => { setShowEdit(true) }}
                >
                  <Icon
                    icon="mi:edit-alt"
                    className="text-h-lg text-neutral-100"
                  ></Icon>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowDelModal(true)
                  }}
                >
                  <Icon
                    icon="mi:delete"
                    className="text-h-lg text-neutral-100"
                  ></Icon>
                </button>
                {showDelModal && <DeleteModal handleDelete={handleDelete} setOpenModal={setShowDelModal} />}
              </div>
            </div>

            <p class="mb-3 text-b-xl font-normal text-neutral-100 dark:text-gray-400">
              {destination.City}
            </p>
            <Link
              to={{
                pathname: '/article',
                state: { destination }
              }}
              class="text-right text-b-sm mb-3 font-normal text-neutral-50 dark:text-gray-400"
            >...klik untuk detail</Link>
          </div>
        </div>
      </div>
    </>
  )
}
