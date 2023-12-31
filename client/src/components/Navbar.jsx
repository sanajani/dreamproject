import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import NavElement from './mobilefirstnav/NavElement'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {user: userDataToken} = useSelector((state) => state.token)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loginSuccess,setLoginSuccess] = useState(false)
  const {worker: workerAccount} = useSelector((state) => state.worker)

  useEffect(() => {
    if(userDataToken){
      setLoginSuccess(true)
    }else{
      setLoginSuccess(false)
    }
  }, [userDataToken])

  return (
    <nav className='bg-blue-500 sm:overflow-hidden z-50 mb-2 py-1 h-[70px] md:px-24 sm:px-8 px-4 flex justify-between items-center fixed top-0 left-0 w-full'>
      <Link
        to='/'
        className='text-xl md:text-2xl font-extrabold text-white'
      >
        Job<span className='active'>Finder</span>
      </Link>
      <div className='flex sm:hidden'>
        <>
          {!isMenuOpen ? (
            <AiOutlineMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-3xl font-bold text-white sm:hidden sm:overflow-hidden  cursor-pointer'
            />
          ) : (
            <AiOutlineClose
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-3xl cursor-pointer font-bold text-white bg-red-500'
            />
          )}
        </>
      </div>

      <NavElement
      workerAccount={workerAccount}
      isMenuOpen={isMenuOpen}
      loginSuccess={loginSuccess}
      setIsMenuOpen={setIsMenuOpen}
      liStyle={"md:text-xl text-base my-4 pt-3 sm:pt-0 pl-3 text-white pb-3 md:mx-5 bg-blue-400 sm:bg-transparent"}/>
    </nav>
  )
}

export default Navbar