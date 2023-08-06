import React, { useState } from 'react'
import { SocialIcon } from "react-social-icons"
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion"
import { Social } from '@/typings';
import Link from 'next/link';

type Props = {
    socials: Social[]
};



export default function Header({socials}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <header className='sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-20 '>  
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
            
                className='flex flex-row'>
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                    />
                ))}
            </motion.div>
                
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
                className='lg:hidden text-white cursor-pointer mt-1.5  '>
                    <GiHamburgerMenu
                        className="h-10 w-6"
                        onClick={() => setOpen(!open)}
                    />    
                            
            </motion.div>
        
            <div className={`${
                open ? "block" : "hidden"
                } grid lg:flex  mt-10 lg:mt-1 md:mt-10 leading-10 font-medium`}
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
                    } lg:block flex flex-row lg:mt-0 mt-44 text-gray-300 cursor-pointer`}
                >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
        </header>
       
    )
}