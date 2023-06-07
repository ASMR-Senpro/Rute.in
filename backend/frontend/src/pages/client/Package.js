import Navbar from "../../components/navbar/Navbar";
import PackageBar from "../../components/recommen/PackageBar";
import SearchBar from "../../components/searchbar/Searchbar";

import {usePackageContext} from '../../hooks/package/usePackageContext'
import { useDisplayContext } from "../../hooks/useDisplayContext";
import useFetch from "../../hooks/useFetch";

const Package = () => {
    const { packages, dispatch } = usePackageContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = "http://localhost:3100/api/package/"
    useFetch({ url, dispatch, setError, setLoading, type: "GET_PACKAGE" });

    return (
        <>
            <div>
                {/* navbar */}
                <Navbar />

                {/* searchbar */}
                {/* <div className="mt-48 mb-24 flex justify-center items-center"> */}
                <div className="top-16 sticky flex flex-col justify-end z-20 bg-white gap-4 py-4">
                    <SearchBar />
                </div>
                {/* </div> */}

                {/* main content */}
                <main className="py-24 w-full bg-cyan-300">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        {packages
                            && packages.map((item, index) => (
                                <PackageBar item={item} />
                            ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Package;