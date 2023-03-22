import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing.js"
import Test from "./pages/Test.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Landing />} />
        <Route path="/test" caseSensitive={false} element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
