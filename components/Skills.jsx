import React from 'react'
import html from '../images/HTML5.png'
import css from '../images/css.png'
import javascript from '../images/js.png'
import reactlogo from '../images/React.png'
import bootstrap from '../images/Bootstrap_logo.svg.png'
import tailwind from '../images/tailwind.png'
import materialUI from '../images/materialUI.png'
import mongodb from '../images/MongoDB.jpg'
import express from '../images/express.png'
import github from '../images/GitHub.png'
import git from '../images/git.png'

const Skills = () => {

  const skills=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-blue-500"
    },
    {
      id:3,
      src:javascript,
      title:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:reactlogo,
      title:"React",
      style:"shadow-cyan-600"
    },
    {
      id:5,
      src:bootstrap,
      title:"BootStrap",
      style:"shadow-violet-500"
    },
    {
      id:6,
      src:tailwind,
      title:"Tailwind",
      style:"shadow-sky-400"
    },
    {
      id:7,
      src:materialUI,
      title:"Material UI",
      style:"shadow-blue-500"
    },
    {
      id:8,
      src:mongodb,
      title:"MongoDB",
      style:"shadow-green-500"
    },
    {
      id:9,
      src:express,
      title:"Express JS",
      style:"shadow-yellow-500"
    },
    {
      id:10,
      src:github,
      title:"GitHub",
      style:"shadow-gray-400"
    },
    {
      id:11,
      src:git,
      title:"Git",
      style:"shadow-red-500"
    }
  ]


  return (
    <div name="Skills" className='w-full bg-gradient-to-b from-gray-800 to-black text-white '>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>

        <div className='pt-14'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</h2>
          <p className='md:text-xl py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 text-center sm:px-0'>
          {
            skills.map(({id,src,title,style})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className='w-20 h-20 mx-auto' src={src} alt="" />
            <p className='mt-4'>{title}</p>
          </div>
            ))
          }



          
         
        </div>




      </div>
    </div>
  )
}

export default Skills