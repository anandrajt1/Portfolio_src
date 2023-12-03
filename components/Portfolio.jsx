import React from 'react'
import Rick from '../images/rickandmorty.png'
import Mortgauge from '../images/Mortgage .png'
import Task from '../images/Task Mananger App.png'

import movieSearch from '../images/movieSearch.png'
import quoteG from '../images/Quote Generator.png'
import InfinityS from '../images/Infinity Scroll.png'
import Calculator from '../images/Calculator.png'

import TinDog from '../images/TinDog.png'
import Oppo from '../images/oppo.png'


const Portfolio = () => {

    const projects=[
        {
            id:1,
            src:Rick,
            heading:"Rick & Morty Character Wiki",
            tags:"#react #bootstrap #javascript",
            demo:"https://rickandmorty-psi-two.vercel.app/",
            code:"https://gitlab.com/anandrajt1/rickandmorty"
        },
        {
            id:2,
            src:Mortgauge,
            heading:"The Mortgage Calculator",
            tags:"#react #materialUI #javascript",
            demo:"https://anandrajt1.github.io/M0rtgagecalculator/",
            code:"https://github.com/anandrajt1/M0rtgagecalculator"
        },
        {
            id:3,
            src:Task,
            heading:"Task Manager",
            tags:"#react #css #media_queries #javascript",
            demo:"https://anandrajt1.github.io/TaskManager/",
            code:"https://github.com/anandrajt1/task-manager"
        },
        {
            id:4,
            src:movieSearch,
            heading:"Movie Search App",
            tags:" #css #html #media_queries #javascript",
            demo:"https://anandrajt1.github.io/MovieSearchApp/",
            code:"https://github.com/anandrajt1/MovieSearchApp"
        },
        {
            id:5,
            src:quoteG,
            heading:"Random Quote Generator",
            tags:" #css #html #media_queries #javascript",
            demo:"https://anandrajt1.github.io/Quote-Generator/",
            code:"https://github.com/anandrajt1/Quote-Generator"
        },
        {
            id:6,
            src:InfinityS,
            heading:"Infinity Scroll",
            tags:" #css #html #media_queries #javascript",
            demo:"https://anandrajt1.github.io/Infinity-scroll/",
            code:"https://github.com/anandrajt1/Infinity-scroll"
        },
        {
            id:7,
            src:Calculator,
            heading:"Calculator",
            tags:" #css #html #media_queries #javascript",
            demo:"https://anandrajt1.github.io/calculator/",
            code:"https://github.com/anandrajt1/calculator"
        },
        {
            id:8,
            src:TinDog,
            heading:"TinDog",
            tags:"#bootstrap  #css #html",
            demo:"https://anandrajt1.github.io/TinDog/",
            code:"https://github.com/anandrajt1/TinDog"
        },
        {
            id:9,
            src:Oppo,
            heading:"Oppo Clone",
            tags:"#css #html",
            demo:"https://anandrajt1.github.io/OPPO/",
            code:"https://github.com/anandrajt1/OPPO"
        }

    ]


  return (
    <div name="Projects" className='w-full bg-gradient-to-b from-black to-gray-800 text-white pt-3'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pt-14'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</h2>
                <p className='md:text-xl py-6'>Check out some of my works right here</p>
            </div>

            
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    projects.map(({id,src,heading,tags,demo,code})=>(

                        <div key={id} className='w-80 mx-auto rounded-lg shadow-md shadow-gray-600 '>
                    <img src={src} alt="" className='rounded-t-md  w-80 h-60' />
                    <div className='my-2 mx-1'>
                        <p className='text-xl'>{heading}</p>
                        <p className='text-sm mt-1 text-gray-500'>{tags}</p>
                    </div>
                    <div className='flex items-center justify-around'>
                        <a href={demo} target='_blank' rel="noreferrer" className='font-semibold px-6 py-3  hover:scale-105 duration-200 '>Demo</a >
                        <a href={code} target='_blank' rel="noreferrer" className='font-semibold px-6 py-3  hover:scale-105 duration-200'>Code</a >
                    </div>
                </div>
                    ))
                }





               

                
            </div>



        </div>
    </div>
  )
}

export default Portfolio