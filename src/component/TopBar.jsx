import React from 'react'
import { FaMoon, FaMapMarkerAlt, FaSun, FaBell } from "react-icons/fa";
import Location from './Location';
import { useRecoilState } from "recoil";
import { darkAtom } from '../atom/darkatom';
function TopBar() {
  const [dark, setDark] = useRecoilState(darkAtom)
 
  return (
    <div className='mt-2'>
        <div className="flex justify-between text-xl ">
            <div className="flex gap-2">
                <FaMapMarkerAlt className='mt-1 text-[#340438]' />
                <Location />
            </div>
            <div className="flex gap-6 mt-1">
                { dark && <p onClick={() => setDark(!dark)}><FaMoon className='text-[#340438]'/></p>}
                { !dark && <p><FaSun onClick={() => setDark(!dark)}/></p>}
                <p><FaBell className='text-[#340438]'/></p>
            </div>
        </div>
    </div>
  )
}

export default TopBar