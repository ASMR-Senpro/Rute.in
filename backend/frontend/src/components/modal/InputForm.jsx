import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProvinceOption from '../register/ProvinceOption';
//import { Icon } from "@iconify/react"
import { useHandleAdd } from '../../hooks/destination/useHandleAdd'
import { useDestinationContext } from '../../hooks/useDestinationContext';
import { useDisplayContext } from '../../hooks/useDisplayContext';


function InputForm() {
  const [provData, setProvData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('https://adityar22.github.io/api-wilayah-indonesia/api/provinces.json');
      setProvData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(provData)

  useEffect(() => {
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const {dispatch}= useDestinationContext();
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();

  const [Place_Name, setPlace_Name] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [City, setCity] = useState("");
  const [Coordinate, setCoordinate] = useState("")
  const [ImageURL, setImageURL] = useState("")

  const handleImage = (e) => {
    e.stopPropagation()
    const file = e.target.files[0];
    setFileToBase(file)
    e.target.files[0] = null;
    e.preventDefault();
  }
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageURL(reader.result);
    }
  }

  const newDest = { Place_Name, Description, Category, City, Coordinate, ImageURL }
  const { handleAdd: handleSubmit } = useHandleAdd({ url:'http://localhost:3100/api/destinations/', type: 'ADD_DESTINATION', dispatch, data: newDest, setLoading, setError, closeAddPopup: toggleModal });

  return (
    <div className="flex justify-center items-center">
      <button
        className="justify-center flex flex-row h-10 w-52 bg-orange-700 text-white shadow-md rounded-2xl items-center text-b-xl"
        //<Icon icon="ic:baseline-plus" className="text-white text-h-lg"></Icon>
        onClick={toggleModal}
      >
        + Input Wisata
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10"
            onClick={toggleModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-8 max-w-md h-96 overflow-y-auto">
              <h2 className="text-4xl mb-4 font-bold text-center text-beige-700">Masukkan destinasi wisata</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={Place_Name}
                    onChange={(e) => { setPlace_Name(e.target.value) }}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Category:
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={Category}
                    onChange={(e) => { setCategory(e.target.value) }}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-1">
                    City:
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={City}
                    onChange={(e) => { setCity(e.target.value) }}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  >
                    {provData?.map((prov, index) => {
                      return <ProvinceOption prov={prov} />
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block mb-1">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={Description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
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
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default InputForm;
