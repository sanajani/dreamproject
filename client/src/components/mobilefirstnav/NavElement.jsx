import { NavLink } from 'react-router-dom'

const NavElement = ({ isMenuOpen, setIsMenuOpen, liStyle }) => {
  const isLogin = true
  return (
    <>
      <ul
        className={`top-[90px]
         py-6 sm:py-0 sm:mt-2 sm:top-[0px]
         -left-[0%] sm:flex sm:gap-3 sm:flex-nowrap
         items-center sm:min-w-fit absolute border-t-2
        border-white sm:border-none sm:static h-96
        sm:w-72 sm:h-auto bg-blue-500 w-full sm:overflow-hidden ${
          isMenuOpen
            ? 'translate-x-0 sm:translate-x-0'
            : 'translate-x-full sm:translate-x-0'
        } duration-300 ease-in-out`}>
        <li className={liStyle}>
          <NavLink onClick={() => setIsMenuOpen(false)} to='/'>
            Home
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink onClick={() => setIsMenuOpen(false)} to='/contact'>
            Contact
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink onClick={() => setIsMenuOpen(false)} to='/dashboard'>
            DashBoard
          </NavLink>
        </li>
        {!isLogin ? (
          <div className='sm:flex sm:gap-3'>
            <li className={liStyle}>
              <NavLink onClick={() => setIsMenuOpen(false)} to='/signin'>
                Login
              </NavLink>
            </li>
            <li className={liStyle}>
              <NavLink onClick={() => setIsMenuOpen(false)} to='/signup'>
                Signup
              </NavLink>
            </li>
          </div>
        ) : (
          <li className={liStyle}>
          <NavLink onClick={() => setIsMenuOpen(false)} to='/signup'>
            Logout
          </NavLink>
        </li>        )}
        <li className={liStyle}>
          <NavLink onClick={() => setIsMenuOpen(false)} to='/updateprofile'>
            profile
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavElement
