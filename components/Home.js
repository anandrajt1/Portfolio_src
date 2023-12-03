import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import HeroImage from '../images/mydp.jpeg'
import { Link } from "react-scroll";

function Home() {
  return (
    <>
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
      <div className='max-w-screen-lg mx-auto h-full flex flex-col items-center justify-center px-4 md:flex-row'>
        <div className=' flex flex-col justify-center  mb-6 '>
           <h1 className='text-4xl sm:text-7xl text-white font-bold'>Anand Raj</h1>
           <h2 className='text-xl md:text-3xl py-3 text-gray-500' >Full Stack Explorer:Navigating the Coding Universe</h2>
            <div className=''>
              <Link to='Projects' smooth duration={500} className='group text-white w-fit my-2 px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span> </Link >
            </div>
        </div>

        <div className='p-4'>
          <img  src={HeroImage} alt="My Profile pic" className='rounded-2xl mx-auto w-18 h-18 lg:h-60 ' />
        </div>

      </div>
    </div>



    </>
  )
}

export default Home