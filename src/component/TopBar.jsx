import React from 'react'
import { FaMoon, FaMapMarkerAlt, FaSun, FaBell } from "react-icons/fa";

function TopBar() {
  return (
    <div className='mt-2'>
        <div className="flex justify-between text-lg border-b-2">
            <div className="flex gap-2">
                <FaMapMarkerAlt className='mt-1' />
                <p>Ikeja, Lagos</p>
            </div>
            <div className="flex gap-2 mt-1">
                <p><FaMoon /></p>
                <p><FaSun /></p>
                <p><FaBell /></p>
            </div>
        </div>
    </div>
  )
}

export default TopBar