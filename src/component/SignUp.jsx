import React, {useState, useEffect} from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from '../firebase.config'


function SignUp() {

    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: '',
      })
      const { name, email, password } = formData
      const navigate = useNavigate()

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      }

      const onSubmit = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        
        try{
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            updateProfile(auth.currentUser,{
              displayName : name
            })
            navigate("/")
        }
        catch{
            console.log(error)
        }
      
      }

  return (
    <div className='flex bg-gray-100 full'>
        <div className='relative w-full h-full  lg:w-4/6'>
        <div className=" mt-12 text-center ">
            <div className="flex flex-col  gap-8">
                <div>
                <p className='tracking-wide text-3xl font-bold mb-2 text-center'>Create Your Account</p>
               <p>Create using social networks</p>
               <div className="flex justify-center text-2xl gap-4 mt-2">
                <FaFacebook className='text-blue-900'/>
                <FaGithub />
               </div>
               <div className="flex mx-auto mt-4 justify-center">
                  <hr className='h-0.5 w-36 bg-white' />
                  <p className='text-xs -mt-2 mx-2'>OR</p>
                  <hr className='h-0.5 w-36 bg-white'/>
               </div>
               <form onSubmit={onSubmit} className='mt-2'>
               <input type="text" placeholder='Name' value={name} name="name" id="name" onChange={onChange} className='block rounded-lg bg-white p-1 pl-2 w-80 mx-auto mb-2' />
                  <input type="text" placeholder='Email' value={email} name="email" id="email" onChange={onChange} className='block rounded-lg bg-white p-1 pl-2 w-80 mx-auto mb-2' />
                  <input type="password" placeholder='Password' value={password} name="password" id="password"  onChange={onChange} className='block rounded-lg bg-white p-1 pl-2 w-80 mx-auto mb-4'/>
                  <button  className='bg-[#340438] text-white hover:bg-white border-2  border-[#340438] hover:text-[#340438] p-2 px-16 rounded-xl'>Sign Up</button>
               </form>
                
                </div>
                <div className="text-center mt-4 clear-both justify-center flex flex-col">
            
                <div className="flex mx-auto mt-4 justify-center">
                  <hr className='h-0.5 w-24 bg-white' />
                  <p className='text-xs -mt-2 mx-2'>Already have an account?</p>
                  <hr className='h-0.5 w-24 bg-white'/>
               </div>
               <Link to='/login' className='p-1 mt-2 font-bold border-2 w-40 border-[#340438] hover:font-extrabold  block mx-auto rounded-lg'>
                        Log In
                </Link>
              </div>  
            </div>
        </div>
        </div>
        <div className='hidden lg:block lg:relative text-white lg:h-full  lg:w-2/6 bg-[#340438] '>
            <div className="">
                <p>SignUp</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp