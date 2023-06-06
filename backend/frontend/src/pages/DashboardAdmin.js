import React, { useEffect } from "react";
import { useRef, useState } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import DestinationCard from "../components/card/DestinationCard";
import Search from "../components/searchbar/AdminSearch";
import InputForm from "../components/modal/InputForm";

import { useDestinationContext } from "../hooks/useDestinationContext";
import useFetch from "../hooks/useFetch"
import { useDisplayContext } from "../hooks/useDisplayContext";

import { useSearch } from "../hooks/useSearch";


const DashboardAdmin = () => {
	const { notify, isPending, error, setLoading, setError } = useDisplayContext();
	const { destinations, dispatch } = useDestinationContext();

	const url = "http://localhost:3100/api/destinations/"
	useFetch({ url, dispatch, setError, setLoading, type: "GET_DESTINATION" });
	console.log(destinations)

	const { searchResult, getSearchTerm, searchEl, searchTerm } = useSearch(destinations)
	const destList = searchTerm<1 ? destinations : searchResult

	return (
		<div className="min-h-screen flex flex-col justify-between">
			{/* navbar */}
			<Navbar />

			{/* main content */}
			<main className="flex flex-col gap-4 py-24 w-full">
				<div className="top-16 sticky flex flex-col justify-end z-20 bg-white gap-4 py-4">
					<div className="flex justify-center w-full">
						<Search
							inputEl={searchEl}
							searchTerm={(searchTerm)}
							getSearchTerm={getSearchTerm}
						/>
					</div>
					<div className="flex justify-between mx-36">
						<InputForm />
					</div>
				</div>
				<div className="flex flex-col gap-4 justify-center items-center">
					{destList
						? destList.map((destination) => (
							<DestinationCard
								destination={destination}
							/>
						))
						: null}
				</div>
			</main>

			{/* footer */}
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default DashboardAdmin;
