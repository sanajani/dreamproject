import { Link } from "react-router-dom";


const NavElement = ({ isMenuOpen,isLogin,setIsMenuOpen,liStyle }) => {
    return (
        <>
     <ul
          className={`top-[90px] py-6 sm:py-0 sm:mt-2  sm:top-[0px] -left-[0%] sm:flex sm:gap-3 sm:flex-nowrap items-center sm:min-w-fit absolute border-t-2 border-white sm:border-none sm:static  sm:w-72 h-80 sm:h-auto bg-blue-500 w-full sm:overflow-hidden ${
          isMenuOpen ? 'translate-x-0 sm:translate-x-0' : 'translate-x-full sm:translate-x-0'
        } duration-300 ease-in-out`}
      >
        <li className={liStyle}>
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            to='/'
          >
            Home
          </Link>
        </li >
        <li className={liStyle}>
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            
            to='/about'
          >
            About
          </Link>
        </li >
        <li className={liStyle}>
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            
            to='/contact'
          >
            Contact
          </Link>
        </li>
        {!isLogin ? (
          <li className="sm:flex sm:gap-3">
            <li className={liStyle}>
              <Link
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                
                to='/login'
              >
                Login
              </Link>
            </li>
            <li className={liStyle}>
              <Link
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                
                to='/signup'
              >
                Signup
              </Link>
            </li>
          </li>
        ) : (
          <li >Logout</li>
        )}
      </ul>

      </>
    )
}

export default NavElement
