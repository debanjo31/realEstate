import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";


function Login() {
  return (
    <div className='flex'>
        <div className='relative w-full h-full  lg:w-4/6'>
        <div className="mx-auto login w-full self-center mt-12 text-center ">
               <p className='tracking-wide text-3xl font-bold mb-2 text-center'>Login to Your Account</p>
               <p>Login using social networks</p>
               <div className="flex justify-center text-2xl gap-4 mt-2">
                <FaFacebook className='text-blue-900'/>
                <FaGithub />
               </div>
               <form className='mt-8'>
                  <input type="text" placeholder='Email' name="" id="" className='block rounded-lg bg-[#f2d7f4] p-1 pl-2 w-80 mx-auto mb-2' />
                  <input type="password" placeholder='Password' name="" id="" className='block rounded-lg bg-[#f2d7f4] p-1 pl-2 w-80 mx-auto mb-4'/>
                  <button type="submit" className='bg-[#340438] text-white p-2 px-16 rounded-xl'>Sign In</button>
               </form>
        </div>
        </div>
        <div className='hidden lg:block lg:relative text-white lg:h-full  lg:w-2/6 bg-[#340438]'>
            <div className="login">
                <p>SignUp</p>
            </div>
        </div>
    </div>
  )
}

export default Login