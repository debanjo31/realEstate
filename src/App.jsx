import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./container/Home";
import Navbar from './component/Navbar';
import Login from './component/Login';
import Forgot from './component/Forgot';
import SignUp from './component/SignUp';


function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    <Navbar />
    </Router>
    </>

  )
}

export default App
