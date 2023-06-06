import React from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar"
import DashboardAdmin from "./DashboardAdmin";
import AdmDestination from "./AdmDestination";
import AdmPlan from "./AdmPlan"
import AdmUser from "./AdmUser"

const LandingAdmin = () => {
    return (
        <>
            <div className="max-h-screen">
                <Navbar />
                <div className="max-w-screen flex-row sm:flex">
                    <div className='w-screen'>
                        <Routes>
                            <Route path='/' element={<DashboardAdmin />} />
                            <Route path="/destination" element={<AdmDestination />} />
                            <Route path="/plan" element={<AdmPlan />} />
                            <Route path="/user" element={<AdmUser />} />
                            <Route path='*' element={<DashboardAdmin />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingAdmin;