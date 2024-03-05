import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll"
export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const links = [
        {
            id : 1,
            link : "home",
        },
        {
            id : 2,
            link : "about",
        },
        {
            id : 3,
            link : "skills",
        },
        {
            id : 4,
            link : "projects",
        },
        {
            id : 5,
            link : "contact",
        },
    ]

  return (
    <div className='bg-black px-4 flex justify-between items-center w-full h-20 text-white fixed'>
        <div>
            <h1 className='text-3xl ml-2'>
                Manish Bonala
            </h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map((item)=>(
            <li key = {item.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'><Link to={item.link} smooth duration={500}>{item.link}</Link></li>
            ))
            }
        </ul>
        <div onClick = {()=>{
            setNavActive(!navActive)
        }} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {navActive? (<FaTimes size={30}/>):(<FaBars size={30}/>)}
        </div>
        {navActive && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map((item)=>(
            <li key = {item.id} className='px-4 py-6 cursor-pointer capitalize text-4xl text-gray-500 hover:scale-105 hover:text-white duration-200'><Link onClick = {()=>{
                setNavActive(!navActive)
            }} to={item.link} smooth duration={500}>{item.link}</Link></li>
            ))
            }
        </ul>}
    </div>
  )
}
