import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import NavElement from './mobilefirstnav/NavElement'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <nav className='bg-blue-500 z-50 mb-2 py-1 h-[90px] md:px-24 sm:px-8 px-2 flex justify-between items-center fixed top-0 left-0 w-full'>
      <Link
        onClick={() => setIsLogin(!isLogin)}
        to='/'
        className='text-xl md:text-2xl font-extrabold text-white'
      >
        Job<span>Finder</span>
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
              className='text-3xl cursor-pointer font-bold text-white'
            />
          )}
        </>
      </div>

      <NavElement 
       isMenuOpen={isMenuOpen}
       isLogin={isLogin} 
       setIsMenuOpen={setIsMenuOpen} 
       liStyle={"md:text-xl text-base my-4 pl-3 text-white pb-3 md:mx-5"}/>
    </nav>
  )
}

export default Navbar