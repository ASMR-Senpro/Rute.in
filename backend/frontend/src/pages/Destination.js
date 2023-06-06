import React, { useState } from "react";
import { useDestinationContext } from "../hooks/useDestinationContext";
import useFetch from "../hooks/useFetch";
import { useDisplayContext } from "../hooks/useDisplayContext";
import SearchBar from "../components/searchbar/Searchbar";
import { useSearch } from "../hooks/useSearch";
import Navbar from "../components/navbar/Navbar";
import DestDisplay from "../components/card/DestinationDisplay";
import Pagination from '../components/navbar/Pagination'

const Destination = () => {
    const { destinations, dispatch } = useDestinationContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = "http://localhost:3100/api/destinations/"
    useFetch({ url, dispatch, setError, setLoading, type: "GET_DESTINATION" });

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    const indexOfLastTask = currentPage * postPerPage;
    const indexOfFirstTask = indexOfLastTask - postPerPage;
    const destCurrent = destinations && destinations.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const { searchResult, getSearchTerm, searchEl, searchTerm } = useSearch(destinations)
    const destList = searchTerm < 1 ? destCurrent : searchResult

    return (
        <>
            <div className="min-h-screen flex flex-col justify-between">
                <Navbar />

                <main className="flex flex-col gap-4 py-24 w-full">
                    <div className="top-16 sticky flex flex-col justify-end z-20 bg-white gap-4 py-4">
                        <div className="flex justify-center w-full">
                            <SearchBar
                                inputEl={searchEl}
                                searchTerm={(searchTerm)}
                                getSearchTerm={getSearchTerm}
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="sm:mx-36">
                        <h1 className="text-center text-h-lg font-bold mb-6" >Pilih Destinasi Wisatamu</h1>
                        <div className=" flex flex-wrap gap-8 justify-center">
                            {destList && destList.map((destination, index) => {
                                return <DestDisplay destination={destination} />
                            })}
                        </div>
                    </div>
                    <div>
                        {destinations && < Pagination postPerPage={postPerPage} totalPost={destinations.length} paginate={paginate} />}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Destination;