import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing from "./pages/client/Landing.js"
import Signup from "./pages/Signup.js"
import Login from "./pages/Login.js"

import { useAuthContext } from './hooks/auth/useAuthContext.js'
import LandingAdmin from "./pages/admin/AdminLanding.js"


function App() {
  const { user, dispatch} = useAuthContext();
  const [isLoading, setIsLoading] = useState();
  useEffect(()=>{
    const logged = localStorage.getItem('user');
    dispatch({type:'LOGIN', payload:logged});
    setIsLoading(false)
  }, [])
  console.log(user)

  return (
    <>
      <BrowserRouter>
      <Routes>
        {user !== null ?
          <Route path="/*" caseSensitive={false}
            element={user.role == "ADMIN" ? <LandingAdmin /> : <Landing />}
          />
          :
          <>
            <Route path="/signup" caseSensitive={false} element={<Signup />} />
            <Route path="/login" caseSensitive={false} element={<Login />} />
            <Route path="/*" caseSensitive={false} element={<Landing />} />
          </>
        }
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
