import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>

            <div className='pt-12'>
            <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h2>
             <p className='md:text-xl py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form className='flex flex-col w-full md:w-1/2' action="https://getform.io/f/8522a565-c58c-4db6-a02b-467ada03ed3d" method="POST">
                    <input placeholder='Enter your name...' name='name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" />
                    <input  placeholder='Enter your email...'  name='email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" />
                    <textarea name="message" placeholder='Enter your message...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' rows="10"></textarea>
                    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 my-8 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-200'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact