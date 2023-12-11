// import contactImage from '../images/about.svg';


const Contact = () => {
  return (
    <div className=''>
      <section className=''>
        <iframe
          className='w-full max-h-64'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52702.087584406145!2d62.16987037743436!3d34.353519960227345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6a894be6cf7%3A0x9db9f81752d677c4!2sHerat%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1702302692054!5m2!1sen!2s'
          width='500'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
        <div className='flex bg-gray-300 p-4 rounded-lg w-[100%]'>
        <form className="bg-gray-100 mx-auto py-6 md:py-0 w-[80%] flex flex-col rounded-md">
            <h1 className='text-center text-xl md:text-3xl font-semibold'>Contact Us</h1>
            <div  className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="name">Name:</label>
                <input type="text" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Name...'/>
            </div>
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="email">Email:</label>
                <input type="email" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Email...'/>
            </div>
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="textarea">Message:</label>
                <textarea className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Message...'/>
            </div>
            <button className='bg-blue-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>Contact Me</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
