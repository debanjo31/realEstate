import React from 'react'
import { FaMoon, FaMapMarkerAlt, FaSun, FaBell } from "react-icons/fa";
import Location from './Location';
import { useRecoilState } from "recoil";
import { darkAtom } from '../atom/darkatom';
function TopBar() {
  const [dark, setDark] = useRecoilState(darkAtom)
  console.log(dark)
  return (
    <div className='mt-2'>
        <div className="flex justify-between text-lg ">
            <div className="flex gap-2">
                <FaMapMarkerAlt className='mt-1' />
                <Location />
            </div>
            <div className="flex gap-2 mt-1">
                { dark && <p onClick={() => setDark(!dark)}><FaMoon /></p>}
                { !dark && <p><FaSun onClick={() => setDark(!dark)}/></p>}
                <p><FaBell /></p>
            </div>
        </div>
    </div>
  )
}

export default TopBar