import heroImage from '../images/hero.svg';
import { signupValidationSchema,signinValidationSchema, initialSigninValues,initialSignupValues } from '../utils/validationSchema';
import {useFormik} from 'formik'
import {api} from '../utils/api'

import { useState,useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Signup = () => {

    const location = useLocation();
    const [signup,setSignup] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setSignup(location.pathname === '/signup')
    }, [location.pathname])

    const sendUserData = async (values) => {
        if(signup){
            try {
                const response = await api.post(`/api/v1/user/signup`,values)
                console.log(response);
                navigate('/signin')
            } catch (error) {
                console.log(error);
            }
        }else{
            try {
                const response = await api.post(`/api/v1/user/signin`,values)
                console.log(response);
                navigate('/')
            } catch (error) {
                console.log(error);
            }
        }
    }

    const formik = useFormik({
        initialValues : signup ? initialSignupValues : initialSigninValues,
        validationSchema : signup ? signupValidationSchema : signinValidationSchema,
        onSubmit: sendUserData
    })

  return (
    <div className='flex justify-center h-[80vh] items-center gap-4'>
        <div className='flex bg-gray-300 p-4 rounded-lg w-[100%] md:w-auto mx-6 md:mx-0'>
        <div className="hidden md:flex w-96  md:flex-col md:justify-between md:items-start">
            <img className="object-cover w-full mt-10" src={heroImage} alt="Hello" />
            <Link className='mt-12 text-gray-900 text-lg underline' to={signup ? '/signin': '/signup'}>{signup ? "have an account signin" : "don't have an accoutn"}</Link>
        </div>
        <form onSubmit={formik.handleSubmit} className="bg-gray-100 mx-auto py-6 md:py-0 w-full md:w-96 flex flex-col rounded-md">
            <h1 className='text-center my-2 text-xl md:text-3xl font-semibold'>{signup ? "SignUp" : "Login"}</h1>
            {signup?
            <div  className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="firstname">Name:</label>
                <input type="text"
                className='md:p-2 p-1 md:text-xl sm:text-lg text-base'
                placeholder='Name...'
                id='firstname'
                name='firstname'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
                />
                {/* error span */}
                {formik.touched.firstname && formik.errors.firstname ? (
                <span className='text-sm text-red-500'>{formik.errors.firstname}</span>
                ) : null}

            </div>: null
            }
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="email">Email:</label>
                <input type="email" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Email...'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                 {/* error span */}
                 {formik.touched.email && formik.errors.email ? (
                <span className='text-sm text-red-500'>{formik.errors.email}</span>
                ) : null}
            </div>
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="password">Password:</label>
                <input type="password" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Password...'
                    id='password'
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                 {/* error span */}
                 {formik.touched.password && formik.errors.password ? (
                <span className='text-sm text-red-500'>{formik.errors.password}</span>
                ) : null}
            </div>
            <button type='submit' className='bg-blue-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signup ? "Sign Up": 'Sign In'}</button>
            <div type='submit' className='cursor-pointer bg-red-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signup ? "Sign Up with google": "Sign In with google"}</div>
            <div type='submit' className='cursor-pointer bg-blue-700 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>{signup ? "Sign Up with facebook": "Sign In with facebook"}</div>
            <Link className='md:hidden mt-2 px-2 text-gray-900 text-base md:text-xl underline' to={signup ? '/signin': '/signup'}>{signup ? "have an account signin" : "don't have an account"}</Link>
        </form>
        </div>
    </div>
  )
}

export default Signup