import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLinks() {

    const links = [
        {
           id:1,
           child:(
            <>LinkedIn <FaLinkedin size={30}/></>
           ),
           href:'https://linkedin.com',
           style : 'rounded-tr-md' 
        },
        {
            id:2,
            child:(
             <>Github <FaGithub size={30}/></>
            ),
            href:'https://github.com/manishb18',
            
         },
         {
            id:3,
            child:(
             <>Twitter <FaLinkedin size={30}/></>
            ),
            href:'https://linkedin.com',
            style : 'rounded-tr-md' 
         },
         {
            id:4,
            child:(
             <>Mail <HiOutlineMail size={30}/></>
            ),
            href:'mailto:manishpspk101@gmail.com'
         },
         {
            id:5,
            child:(
             <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true, 
         }
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map((item)=>(
        <li key = {item.id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]' + " "+ item.style}><a href={item.href}  className='flex justify-between items-center w-full text-white' download={item.download} target='_blank' rel='noreferrer'>
            {item.child}
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}