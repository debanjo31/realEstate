import React, {useState, useEffect} from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
      const { email, password } = formData
      const navigate = useNavigate()

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
         signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
              // Signed in 
               const user = userCredential.user;
               // ...
               })
          .catch((error) => {
          const errorCode = error.code;
           const errorMessage = error.message;
           console/log(errorCode, error.message)
          });
      }

  return (
    <div className='flex full  bg-gray-100'>
        <div className='relative w-full h-full  lg:w-4/6'>
        <div className=" mt-12 lg:mt-24 text-center ">
            <div className="flex flex-col gap-12">
                <div>
                <p className='tracking-wide text-3xl lg:text-4xl font-bold mb-2 lg:mb-4 text-center'>Login to Your Account</p>
               <p className='lg:text-lg'>Login using social networks</p>
               <div className="flex justify-center text-2xl lg:text-3xl gap-4 mt-2 ">
                <FaFacebook className='text-blue-900'/>
                <FaGithub />
               </div>
               <div className="flex mx-auto mt-4 justify-center lg:mt-8">
                  <hr className='h-0.5 w-36 bg-white' />
                  <p className='text-xs -mt-2 mx-2'>OR</p>
                  <hr className='h-0.5 w-36 bg-white'/>
               </div>
               <form onSubmit={onSubmit} className='mt-2 lg:mt-8'>
               <input type="text" placeholder='Email' value={email} name="email" id="email" onChange={onChange} className='block rounded-lg bg-white p-1 pl-2 w-80 mx-auto mb-2' />
                  <input type="password" placeholder='Password' value={password} name="password" id="password"  onChange={onChange} className='block rounded-lg bg-white p-1 pl-2 w-80 mx-auto mb-4'/>
                  <button  className='bg-[#340438] text-white hover:bg-white border-2  border-[#340438] hover:text-[#340438] p-2 px-16 rounded-xl'>Sign In</button>
               </form>
               <Link to='/forgot-password' className='w-4/6 mt-4 float-right hover:text-[#340438] hover:font-bold'>
                    Forgot Password
              </Link> 
                </div>
                <div className="text-center mt-4 clear-both justify-center flex flex-col">
                <div className='lg:hidden'>
                <div className="flex mx-auto mt-4 justify-center">
                  <hr className='h-0.5 w-24 bg-white' />
                  <p className='text-xs -mt-2 mx-2'>Don't have an account?</p>
                  <hr className='h-0.5 w-24 bg-white'/>
               </div>
               <Link to='/sign-up' className='p-1 mt-2 font-bold border-2 w-40 border-[#340438] hover:font-extrabold  block mx-auto rounded-lg'>
                        Sign Up
                </Link>
                </div>
              </div>  
            </div>
        </div>
        </div>
        <div className='hidden lg:block lg:relative text-white lg:h-full  lg:w-2/6 bg-[#340438] '>
            <div className="sidelogin text-center  flex flex-col gap-4">
              <p className='text-3xl font-bold mb-2'>New Here?</p>
              <p>Create an account to have access to all contents</p>
                <Link to='/sign-up' className='p-1 mt-2 font-bold border-2 w-40 bg-white text-[#340438] text-center border-[#340438]  hover:font-extrabold  block mx-auto rounded-lg p-2'>
                        Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login