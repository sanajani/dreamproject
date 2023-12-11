import Image from '../../public/images/hero.svg'
import { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
const Signup = () => {
    const location = useLocation();
    const [signin,setSignin] = useState(false);
    
    useEffect(() => {
        setSignin(location.pathname === '/signup')
    }, [location.pathname])

  return (
    <div className='flex justify-center h-[80vh] items-center gap-4'>
        <div className='flex bg-gray-300 p-4 rounded-lg w-[100%] md:w-auto mx-6 md:mx-0'>
        <div className="hidden md:flex w-96  md:flex-col md:justify-between md:items-start">
            <img className="object-cover w-full mt-10" src={Image} alt="Hello" />
            <Link className='mt-12 text-gray-900 text-lg underline' to={signin ? '/signin': '/signup'}>{signin ? "have an account signin" : "don't have an accoutn"}</Link>
        </div>
        <form className="bg-gray-100 mx-auto py-6 md:py-0 w-[80%] md:w-96 flex flex-col rounded-md">
            <h1 className='text-center my-2 text-xl md:text-3xl font-semibold'>{signin ? "SignUp" : "Login"}</h1>
            {signin?
            <div  className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="name">Name:</label>
                <input type="text" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Name...'/>
            </div>: null
            }
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="email">Email:</label>
                <input type="email" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Email...'/>
            </div>
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="password">Password:</label>
                <input type="password" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Password...'/>
            </div>
            <button className='bg-blue-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signin ? "Sign Up": 'Sign In'}</button>
            <button className='bg-red-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signin ? "Sign Up with google": "Sign In with google"}</button>
            <button className='bg-blue-700 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signin ? "Sign Up with facebook": "Sign In with facebook"}</button>
            <Link className='md:hidden mt-2 px-2 text-gray-900 text-lg underline' to={signin ? '/signin': '/signup'}>{signin ? "have an account signin" : "don't have an account"}</Link>
        </form>
        </div>
    </div>
  )
}

export default Signup