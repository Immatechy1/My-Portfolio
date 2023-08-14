import React, { useState } from 'react'
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion"
import Link from 'next/link';
import Button from './button/Button';

export interface Props {}

interface Links {
    name: string,
    isButton?: boolean,
    onClick?: (e?: React.SyntheticEvent<EventTarget>) => void;
}

export default function Header({}: Props) {
    const [open] = useState(false);
    return (
        <header className='bg-[#010514] p-5 flex  items-start overflow-hidden justify-between  max-w-7xl mx-auto '>  
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
                    className='text-[1.4rem] text-[#65C23A] font-semibold'>IMMA<span className='text-white'>TECHY</span>
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
                    }lg:block grid lg:flex lg:mt-5 md:mt-20  space-y-8 font-medium`}
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
                    } lg:block flex flex-row lg:mt-5 mt-44 text-gray-300 cursor-pointer`}
                >
                    <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/IMMATECHY.pdf")}/>
            </motion.div>
        </header>   
    )
}