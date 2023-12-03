import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
  const links=[
    {
      id:1,
      child:(
        <>LinkedIn <FaLinkedin size={30}/> </>
      ),
      href:"https://www.linkedin.com/in/anand-raj-t"
    },
    {
      id:2,
      child:(
        <>GitHub <FaGithub  size={30}/> </>
      ),
      href:"https://github.com/anandrajt1"
    },
    {
      id:3,
      child:(
        <>Mail <MdOutlineMail size={30}/> </>
      ),
      href:"mailto:rajanand765@gmail.com"
    },
    {
      id:4,
      child:(
        <>Resume <BsFillPersonLinesFill  size={30}/> </>
      ),
      href:"/Resume_Anand_Raj.pdf",
      download:true,
    }

  ]
  return (
    <>

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {
          links.map(({id,child,href,download})=>(
            <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a className='text-white flex justify-between items-center w-full' href={href} download={download} target='_blank' rel="noreferrer">
            {child}
          </a>
        </li>
          ))
        }
      </ul>
    </div>



    
    </>
  )
}

export default SocialLinks