import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='min-h-screen pt-[70px]'>
        <header>
            <Navbar />
        </header>
        <main><Outlet /></main>
    </div>
  )
}

export default RootLayout