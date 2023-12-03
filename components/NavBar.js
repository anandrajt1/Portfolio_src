import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from 'react'
import { Link } from "react-scroll";

function NavBar() {
// links for navbar-to write like loop with map fn
  const links=[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Projects'
    },
    {
      id:4,
      link:'Skills'
    },
    {
      id:5,
      link:'Contact'
    }
  ]

  const[nav,setNav]=useState(false)

  
  return (
    <>
    


    <div className='w-full h-20 flex justify-between items-center fixed bg-black text-white px-4'>
        <div>
            <h1 className='text-3xl md:text-5xl  font-logo ml-2'>Anand</h1>
        </div>

        <ul className=' hidden lg:flex'>
          {
            links.map(({id,link})=>(
              <li key={id} className='px-4 cursor-pointer text-xl text-gray-500 hover:scale-105 duration-200 '>
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
        </ul>  

        <div onClick={()=>setNav(!nav)} className='cursor-pointer text-gray-500 pr-2 lg:hidden z-10'>
          {
            nav? <FaTimes size={30}/> : <FaBars size={30}/>
          }
        </div>

        {
          nav && (
            <ul className='flex flex-col justify-center items-center h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 absolute top-0 left-0'>
        {
            links.map(({id,link})=>(
              <li key={id} className='text-4xl cursor-pointer py-6 px-4 hover:scale-105 duration-200 '>
                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
          
        </ul>
          )
        }

        



    </div>

   
    </>
  )
}

export default NavBar