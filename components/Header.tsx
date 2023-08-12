import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion"
import Link from 'next/link';
import Button from './button/Button';

type Props = {};

export default function Header({}: Props) {
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
      <header className='bg-slate-950 top-0 p-5 flex justify-between items-start max-w-7xl mx-auto overflow-hidden '>  
          <Link className='flex cursor-pointer mt-[0.8rem] ' href='/'>
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
                  className='text-[1.4rem] text-[#d44be0] font-semibold mdm:ml-[1rem] '>IMMA<span className='text-white'>TECHY</span>
              </motion.div>
          </Link>
                
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
              className='lg:hidden text-white cursor-pointer mt-2.5 '>
              <GiHamburgerMenu
                  className="h-10 w-7 text-[#d44be0] "
                  onClick={() => setOpen(!open)}
              /> 

                
                         
          </motion.div>
          <div className={`${
              open ? "block" : "hidden"
              } grid lg:flex lg:mt-5 md:mt-20 font-medium`}
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
                  } lg:block flex flex-row lg:mt-3 mt-44 text-gray-300 cursor-pointer`}
              >
                  <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/IMMATECHY.pdf")}/>
          </motion.div>
      </header>
       
    )
}