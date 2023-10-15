import React, { useRef, useState } from 'react'
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import {FaTimes,FaPause,FaPlay,FaEquals} from 'react-icons/fa';
import { motion } from "framer-motion"
import Link from 'next/link';
import Button from './button/Button';

interface HeaderProps {
    play: any;
    pause: any;
    playing: any;
}
  
export default function Header({playing, pause, play}: HeaderProps) {
    const [open] = useState(false);
   
    return (
        <header className='bg-[#010514] overflow-hidden px-6 lg:px-4 md:px-6 py-5 flex items-start justify-between  max-w-7xl mx-auto '>  
            <Link className='flex cursor-pointer mt-[0.8rem] lg:mt-[1.4rem]' href='/'>
                <motion.div 
                     initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='text-[1.4rem] text-[#65C23A] flex font-bold '>IMMA<span className='text-white'>TECHY</span> 
                    <button onClick={playing ? pause : play} className='mt-[-0.1rem] relative text-white ml-2 bg-[#65C23A] opacity-600 p-2 rounded-full shadow-md animate-pulse'>
                        {playing ? <FaPause /> : <FaPlay />}
                    </button>
                </motion.div>
            </Link>

            <div className="flex flex-row z-10 items-center">
                <input type='checkbox' id='menushow' className="peer/checker hidden " />
                <motion.label
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }} 
                    className="lg:hidden text-white cursor-pointer mt-2.5 " htmlFor='menushow'>
                        <GiHamburgerMenu
                        className="h-10 w-7 text-[#65C23A]  cursor-pointer"/> 
                </motion.label>

                <div className={`${
                    open ? "block" : "hidden"
                    } grid lg:flex lg:mt-6 md:mt-20 text-xl font-medium`}
                    >     
                    <Link href="#about" >
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
                
                <ul key={0} className="lg:hidden  p-6 w-[100%] sm:w-[50%] h-[100vh] flex flex-col gap-6 items-center text-center  fixed top-[0] right-[-100%]  bg-[#0f172a] peer-checked/checker:right-0 duration-500 ">
                    <label key={2} className="text-6xl text-white absolute top-[1rem] right-[1rem] hover:cursor-pointer" htmlFor='menushow'>
                        <GiCancel
                        className="h-10 w-7 text-[#65C23A]  cursor-pointer "
                         />                
                    </label>

                    <div className={`${
                    open ? "block" : "hidden"
                    }lg:block grid lg:flex lg:mt-5 md:mt-20 mt-[4rem]  space-y-8 font-medium`}
                    >     
                    <Link href="#about" >
                        <button className='heroButton'>About Me</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <div className='ml-8 w-24'>
                        <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/IMMATECHY.pdf")}/>
                    </div>
                   
                </div>
                </ul>   
            </div>
            <motion.div
                initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className={`${
                    open ? "block" : "hidden"
                    } lg:block flex flex-row lg:mt-5 mt-44 fovt-bold text-gray-300 cursor-pointer hover:bg-[#65C23A] `}
                >
                    <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/IMMATECHY.pdf")}/>
            </motion.div>
        </header>   
    )
}