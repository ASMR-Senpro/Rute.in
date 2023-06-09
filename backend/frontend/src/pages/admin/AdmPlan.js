import { useState } from "react";
import PackageBar from "../../components/recommen/PackageBar";
import SearchBar from "../../components/searchbar/Searchbar";

import { usePackageContext } from '../../hooks/package/usePackageContext'
import { useDisplayContext } from "../../hooks/useDisplayContext";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/navbar/Pagination";

import { useSearch } from '../../hooks/package/useSearch'
import { useFilter } from "../../hooks/package/useFilter";

const AdmPlan = () => {
    const { packages, dispatch } = usePackageContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = "http://localhost:3100/api/package/"
    useFetch({ url, dispatch, setError, setLoading, type: "GET_PACKAGE" });

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    const indexOfLastTask = currentPage * postPerPage;
    const indexOfFirstTask = indexOfLastTask - postPerPage;
    const packCurrent = packages && packages.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const { searchResult, getSearchTerm, searchEl, searchTerm } = useSearch(packages)
    const { filterResult, getFilterTerm, filterEl, filterTerm } = useFilter(packages)
    const packList = searchTerm < 1 ? packCurrent : searchResult

    return (
        <>
            <div>
                {/* navbar */}
                {/* <Navbar /> */}

                {/* searchbar */}
                {/* <div className="mt-48 mb-24 flex justify-center items-center"> */}
                <div className="top-16 sticky flex flex-col justify-end z-20 bg-white gap-4 py-4">
                    <SearchBar
                        searchEl={searchEl}
                        searchTerm={(searchTerm)}
                        getSearchTerm={getSearchTerm}
                        filterEl={filterEl}
                        filterTerm={filterTerm}
                        getFilterTerm={getFilterTerm}
                    />
                </div>
                {/* </div> */}

                {/* main content */}
                <main className="py-24 w-full bg-cyan-300">
                    <div>
                        {packages && < Pagination postPerPage={postPerPage} totalPost={packages.length} paginate={paginate} />}
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        {packList
                            && packList.map((item, index) => (
                                <PackageBar item={item} />
                            ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default AdmPlan;