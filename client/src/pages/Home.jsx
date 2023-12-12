// import SearchTable from "../components/homepagecomponents/SearchTable"
// import HomePageTable from "../components/homepagecomponents/HomePageTable"


// const Home = () => {
//   return (
//     <main className="grid grid-cols-1 md:grid-cols-3 md:px-4 mt-4 bg-gray-100 rounded-lg py-5">
//       <div>
//         <SearchTable />
//       </div>
//       <div className='md:col-span-2 md:w-full'>
//         <HomePageTable />
//       </div>
//     </main>

//   )
// }

// export default Home

// import SearchTable from "../components/homepagecomponents/SearchTable"
import HomePageTable from "../components/homepagecomponents/HomePageTable"


const Home = () => {
  return (
    <main className="grid grid-cols-1 md:px-4 mt-4 bg-gray-100 rounded-lg py-5">
      <div className='md:w-full'>
        <HomePageTable />
      </div>
    </main>

  )
}

export default Home