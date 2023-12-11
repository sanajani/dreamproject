import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center  flex-col bg-gray-200">
        <h1 className="my-4 md:text-5xl font-semibold md:font-bold text-2xl sm:text-3xl">Page Not Found <span className="block text-center mt-4 text-8xl" >404</span></h1>
        <Link className="text-blue-800 underline hover:text-red-900 text-xl" to='/'>Back to Home</Link>
    </div>
  )
}

export default PageNotFound