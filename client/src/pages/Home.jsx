import HomePageTable from "../components/homepagecomponents/HomePageTable"


const Home = () => {
  localStorage.setItem('workerAccount',false)
  return (
      <div className='bg-gray-300 p-6 pt-3 min-h-screen'>
        <HomePageTable />
      </div>

  )
}

export default Home