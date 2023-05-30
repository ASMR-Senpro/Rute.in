import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing.js"
import Test from "./pages/Test.js"
import Signup from "./pages/Signup.js"
import Login from "./pages/Login.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" caseSensitive={false} element={<Signup  />} />
        <Route path="/login" caseSensitive={false} element={<Login  />}/>
        <Route path="/" caseSensitive={false} element={<Landing />} />
        <Route path="/test" caseSensitive={false} element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
