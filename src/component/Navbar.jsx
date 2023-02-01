import React from 'react'

import { FaRegHeart, FaRegCompass, FaRegCommentDots,FaUserAlt } from 'react-icons/fa';

function Navbar() {
    return (
     <div className='navbar shadow-md text-lg'>
       <div className=" flex justify-around mt-4">
        <div className="flex flex-col items-center	">
        <p><FaRegCompass /></p>
        <p>Explore</p>
        </div>
        <div className="flex flex-col items-center">
        <p><FaRegHeart /></p>
        <p>Wishlist</p>
        </div>
        <div className="flex flex-col items-center">
        <p><FaRegCommentDots /></p>
        <p>Messages</p>
        </div>
        <div className="flex flex-col items-center">
        <p><FaUserAlt /></p>
        <p>Account</p>
        </div>
       </div>
     </div>
    )
  }
  
  export default Navbar
  