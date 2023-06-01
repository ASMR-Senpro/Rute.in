import React, { useState } from 'react';
//import { Icon } from "@iconify/react"


function EditForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    facilities: [''],
    description: '',
    image: null,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, index) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else if (e.target.name === 'facilities') {
      const updatedFacilities = [...formData.facilities];
      updatedFacilities[index] = e.target.value;
      setFormData({
        ...formData,
        facilities: updatedFacilities,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddFacility = () => {
    setFormData({
      ...formData,
      facilities: [...formData.facilities, ''],
    });
  };

  const handleRemoveFacility = (index) => {
    const updatedFacilities = [...formData.facilities];
    updatedFacilities.splice(index, 1);
    setFormData({
      ...formData,
      facilities: updatedFacilities,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir
    console.log(formData);
    toggleModal(); // Menutup modal setelah pengiriman formulir
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="justify-center flex flex-row h-10 w-52 bg-orange-700 text-white shadow-md rounded-2xl flex justify-center items-center text-b-xl"
        //<Icon icon="ic:baseline-plus" className="text-white text-h-lg text-neutral-100"></Icon>
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  >
                    <option value="">Select Location</option>
                    <option value="Location A">Location A</option>
                    <option value="Location B">Location B</option>
                    <option value="Location C">Location C</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="facilities" className="block mb-1">
                    Facilities:
                  </label>
                  {formData.facilities.map((facility, index) => (
                    <div key={index}>
                    <input
                      key={index}
                      type="text"
                      name="facilities"
                      value={facility}
                      onChange={(e) => handleChange(e, index)}
                      className=" border border-gray-300 px-3 py-2 rounded mb-2"
                    />
                    <button
                        type="button"
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemoveFacility(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    className="bg-cyan-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                    onClick={handleAddFacility}
                  >
                    +
                  </button>
                </div>
                <div>
                  <label htmlFor="description" className="block mb-1">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    className=" ring-cyan-500 hover:bg-neutral-50 text-neutral-500 font py-2 px-4 flex-1 rounded-md outline-none border rounded"
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
export default EditForm;
