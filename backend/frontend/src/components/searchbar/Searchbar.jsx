import React, { useState } from "react"

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-center w-full">
      <form className="w-[1200px]">
        <div className="h-[80px] flex bg-orange-700 p-1 rounded-md">
          <button
            style={{ width: "342px" }}
            onClick={toggleDropdown}
            id="dropdown-button"
            data-dropdown-toggle="dropdownslist"
            className="flex-shrink-0 z-10 inline-flex justify-center items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            Pilih daerah
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="p-2.5 w-full h-full z-20 text-sm text-orange-700 bg-gray-50 rounded-r-lg border-none"
              placeholder="masukkan tujuan"
              required
            />
            <button
              type="submit"
              className="h-full absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-md bg-orange-700"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div
          id="dropdownlist"
          className={`${
            isOpen ? "" : "hidden"
          } z-99 bg-orange-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Design
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}
