import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
import Avatar from '../assets/avatar.png';
import { useState } from 'react';

const Navbar = () => {
    const [darkMode,setDarkMode] = useState(false);
  return (
 <div className={darkMode ? "dark": "" }>
    <div className= 'bg-white px-10 md:px-20 lg:px-20  dark:bg-gray-900' >          
        <div className='min-h-screen' >
                <nav className='py-10 mb-12 flex justify-between '>
                    <h1 className='text-xl'>SADMAN PORTFOLIO</h1>
                    <ul className='flex items-center'>
                        <li><BsMoonStarsFill onClick={()=>setDarkMode(!darkMode)}className='cursor-pointer text-2xl '/></li>
                        <li>
                            <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8  '>Resume</a>
                        </li>
                    </ul>
                </nav>
{/* infos */}
                <div className='text-center p-10 py-10'>
                    <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sadman Showmik</h2>
                    <h3 className='text-2xl py-2 mdLtext-3xl dark:text-white'>Frontend Engineer</h3>
                    <p className='text-md py-5  leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, soluta reiciendis recusandae, odit veritatis non sequi quae expedita, magnam excepturi praesentium eaque accusantium laboriosam? Laborum, sint. Magni temporibus et minima.</p>
                </div>

                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <AiFillFacebook/>
                    <AiFillLinkedin />
                    <AiFillInstagram />
                </div>
                <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto '>
                    <img src={Avatar} alt="avatar" />
                </div>
        </div>
    </div>
        </div>

  )
}

export default Navbar