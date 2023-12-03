import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
                </div>
                <p className='md:text-xl mt-4'>Passionate Full Stack Developer with a robust foundation in HTML, CSS, and JavaScript, along with proficiency in React and Express.js. My coursework and personal projects have provided hands-on experience in creating websites that prioritize user experience and accessibility. </p>
                <br />
                <p className='md:text-xl mt-4'> Expertise in frameworks like Bootstrap and Tailwind enables me to bring designs to life, ensuring both aesthetic appeal and functionality across various devices.</p>
                <br />
                <p className='md:text-xl mt-4'>Eager to learn and stay updated on the latest industry trends and technologies, I adapt quickly to new challenges and opportunities. Enthusiastic about coding and committed to continuous learning.</p>
            </div>
        </div>
    )
}

export default About