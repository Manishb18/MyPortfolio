import React from 'react'
import heroImage from '../assets/heroImage.jpeg'
import mainImage from '../assets/me.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
export default function Home() {
  return (
    <div name = "home" className='mt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className=' flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I,m a Developer</h2>
            <p className='text-gray-400 py-4 max-w-md'>I develop responsive web applications and I build machine learning models to solve real world problems</p>

            <div>
                <Link className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' to='projects' smooth duration={600}>
                    Projects
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={20} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>

        <div className=''>
            <img src={mainImage} alt="My Profile" className='rounded-2xl  w-[40vw] h-[50vh] md:w-full md:ml-4'/>
        </div>
      </div>
    </div>
  )
}
