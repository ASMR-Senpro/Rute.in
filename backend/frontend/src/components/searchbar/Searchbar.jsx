import React, { useEffect, useState } from "react"
import axios from 'axios';
import ProvinceOption from '../register/ProvinceOption'

export default function SearchBar({ searchTerm, getSearchTerm, searchEl }) {
    const [province, setProvince] = useState("")

    const [provData, setProvData] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://adityar22.github.io/api-wilayah-indonesia/api/provinces.json');
            setProvData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center w-full">
            <div style={{ width: "1080px" }}>
                <div className="flex bg-orange-700 p-1 rounded-md">
                    <select
                        style={{ width: "342px" }}
                        className="bg-orange-700 flex-shrink-0 text-white z-10 inline-flex justify-center items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        value={province}
                        onChange={(e) => { setProvince(e.target.value) }}
                    >
                        {provData?.map((prov, index) => {
                            return <ProvinceOption prov={prov} />
                        })}
                    </select>

                    <div className="relative w-full">
                        <input
                            ref={searchEl}
                            value={searchTerm}
                            onChange={getSearchTerm}
                            type="search"
                            id="search-dropdown"
                            className="p-2.5 w-full z-20 text-sm text-black bg-gray-50 rounded-r-lg border-none"
                            placeholder="masukkan tujuan"
                        />
                        <button
                            type="submit"
                            className="h-full absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-md bg-orange-700">
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
                    className={`${isOpen ? "" : "hidden"
                        } z-99 bg-orange-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
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
            </div>
        </div>
    );

}