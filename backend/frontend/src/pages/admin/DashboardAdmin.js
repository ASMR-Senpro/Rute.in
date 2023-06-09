import TouristImg from "../../assets/images/tourist.png"
import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import Footer from "../../components/footer/Footer"

const DashboardAdmin = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-between min-h-screen">
				<main className="mt-36 w-10/12 bg-white relative">
					<section className="flex flex-row justify-start items-center">
						<div className="">
							<img src={TouristImg} alt="Tourist Image" className="w-1/2"></img>
						</div>
						<div className="flex flex-col justify-start">
							<div
								id="title"
								className="flex flex-col justify-start text-h-lg font-bold py-12"
							>
								<h1>Welcome to Dashboard</h1>
								<h1>
									di <span className="text-orange-700">Rute.in</span> Admin
								</h1>
							</div>
						</div>
					</section>
				</main>
				<div className="w-screen botton-0">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default DashboardAdmin;