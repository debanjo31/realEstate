import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./container/Home";
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Home />} />
    </Routes>
    <Navbar />
    </Router>
    </>

  )
}

export default App
