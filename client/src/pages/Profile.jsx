// import Image from 'next/image'
import AboutUser from '../components/AboutUser'
import mapImage from '../images/map1.jpg'



const Profile = () => {
    const isLoading = false
    if(isLoading) return <h1>Loading...</h1>
    const experiance = 'sana'
    const phoneNumber2 = 'sana'
    const phoneNumber1 = 'sana'
    const username = 'sana'
    const job = 'sana'
    const province = 'sana'
    const lastName = 'sana'
    const name = 'sana'
    const id = 'sana'
    // const data = {
    //     experiance :'sana' ,
    //     phoneNumber2 :'sana' ,
    //     phoneNumber1 :'sana' ,
    //     username :'sana' ,
    //     job :'sana' ,
    //     province :'sana' ,
    //     lastName :'sana' ,
    //     name :'sana' ,
    //     id :'sana' ,
    // }


    return (
        <main className='min-h-screen pt-24 w-full md:max-w-[1200px] mx-auto border-2'>
            <div className='flex items-center flex-col md:flex-row justify-evenly'>
                    <div className='rounded-full md:h-56 md:w-56 h-28 w-28 bg-red-600'>
                        <img
                            src={mapImage}
                            alt='userProfile'
                            className='rounded-full overflow-hidden min-w-full h-full object-cover'
                        />
                    </div>
                <div className='overflow-auto rounded-lg shadow md:h-fit md:m-8 my-7 hidden md:block'>
                    <table className=''>
                        <thead className='bg-black text-white text-sm font-persionFont'>
                            <tr className=''>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تجربه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>2 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>1 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام خاص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>وظیفه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>موقعیت</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تخلص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>شماره آیدی</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-300 font-persionFont'>
                            <tr>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{experiance}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{phoneNumber2}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{phoneNumber1}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{username}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{job}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{province}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{lastName}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{name}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-1 md:hidden my-3 w-[90%] mx-auto'>
                    <div className='bg-gray-200 p-4 rounded-lg shadow '>
                        <div className='flex items-center space-x-2 text-sm flex-col font-medium'>
                            <div className='text-2xl my-2'>{experiance}</div>
                            <div className='text-xl my-2'>{phoneNumber2}</div>
                            <div className='text-xl my-2'>{phoneNumber1}</div>
                            <div className='text-xl my-2'>{username}</div>
                            <div className='text-2xl my-2'>{job}</div>
                            <div className='text-2xl my-2'>{province}</div>
                            <div className='text-2xl my-2'>{lastName}</div>
                            <div className='text-2xl my-2'>{name}</div>
                            <div className='text-xl my-2'>{id}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about that user */}
            <div>
                <AboutUser name={name} personalInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, nisi beatae. Molestiae ex laudantium, incidunt quas sapiente quis voluptatem aperiam doloribus quisquam maxime culpa fugiat minus exercitationem, nostrum rem? Necessitatibus, enim quos exercitationem voluptates vero nulla quas quod commodi sed esse voluptate eveniet dolore sequi dicta ratione in voluptatem porro?"} />
            </div>
        </main>
    )
}


export default Profile