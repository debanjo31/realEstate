import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegHeart, FaRegCompass, FaRegCommentDots,FaUserAlt } from 'react-icons/fa';

function Navbar() {
    return (
     <div className='navbar shadow-md'>
       <div className=" flex justify-around mt-4">
        <div className="text-[#340438]">
        <Link className='flex flex-col items-center' to="/"> 
        <p><FaRegCompass /></p>
        <p className='font-bold'>Explore</p>
        </Link>
        </div>
        <div className="flex flex-col items-center">
        <p><FaRegHeart /></p>
        <p>Wishlist</p>
        </div>
        <div className="flex flex-col items-center">
        <p><FaRegCommentDots /></p>
        <p>Messages</p>
        </div>
        <div className="">
          <Link className='flex flex-col items-center' to="/login">
          <p><FaUserAlt /></p>
        <p>Account</p>
          </Link>
        </div>
       </div>
     </div>
    )
  }
  
  export default Navbar
  