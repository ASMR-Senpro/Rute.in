import React, { useState } from 'react';
//import { Icon } from "@iconify/react"


function EditForm({dest, isOpen, setIsOpen}) {
  const [Place_Name, setPlace_Name] = useState(dest.Place_Name);
  const [Description, setDescription] = useState(dest.Description);
  const [Category, setCategory] = useState(dest.Category);
  const [City, setCity] = useState(dest.City);
  const [Coordinate, setCoordinate] = useState(dest.Coordinate)
  const [ImageURL, setImageURL] = useState(dest.ImageURL)

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="flex justify-center items-center">
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10"
            onClick={toggleModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-8 max-w-md h-96 overflow-y-auto">
              <h2 className="text-4xl mb-4 font-bold text-center text-beige-700">Masukkan destinasi wisata</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={Place_Name}
                    onChange={(e)=>{setPlace_Name(e.target.value)}}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-1">
                    Location:
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  >
                    
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block mb-1">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                    value={Description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="image" className="block mb-1">
                    Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-700 text-white font py-2 px-4 flex-1 rounded"
                  >
                    Input
                  </button>
                  <button
                    className=" ring-cyan-500 hover:bg-neutral-50 text-neutral-500 font py-2 px-4 flex-1 rounded-md outline-none border"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
    </div>
  );
}
export default EditForm;
