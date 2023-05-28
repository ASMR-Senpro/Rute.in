import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing.js"
import Recommen from "./pages/Recommen.js"
import AdminDashb from "./pages/DashboardAdmin.js"
import About from "./pages/About.js"
import Test from "./pages/Test.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Landing />} />
        <Route path="/test" caseSensitive={false} element={<Test />} />
        <Route
          path="/recommendation"
          caseSensitive={false}
          element={<Recommen />}
        />
        <Route
          path="/dasboardadmin"
          caseSensitive={false}
          element={<AdminDashb />}
        />
        <Route
          path="/about"
          caseSensitive={false}
          element={<About />}
        />
      </Routes>
    </Router>
  )
}

export default App
