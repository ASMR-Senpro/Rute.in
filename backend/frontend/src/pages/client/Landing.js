import React from "react"
import Navbar from "../../components/navbar/Navbar"
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Destination from "./Destination";
import About from "./About"
import Article from "./Article"
import Reccomen from "./Recommen"
import Profile from "../Profile";
import Package from "./Package";

const Landing = () => {
  return (
    <div className="max-h-screen">
      <Navbar/>
      <div className="max-w-screen flex-row sm:flex">
        <div className='w-screen'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/package" element={<Package />} />
            <Route path="/about" element={<About />} />
            <Route path="/article" element={<Article />} />
            <Route path="/reccomen" element={<Reccomen />} />
            <Route path="/profil" element={<Profile />} />
            <Route path='*' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Landing
