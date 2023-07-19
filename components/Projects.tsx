import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto
        items-center z-0 xl:mt-80'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Projects 
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f4ab0a]/80 md:mt-80 xl:mt-96'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen  mt-72 sm:mt-96 xl:mt-96'>
                    <motion.img
                        initial={{ 
                            y: -300,
                            opacity: 0 
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true}}
                        src='https://images.unsplash.com/photo-1663996806932-357eddab9b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt=''
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab0a]/50'>
                                case study {i+1} of {projects.length}: UPS clone
                            </span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            I am a Full Stack Web Developer from Ogun State, Nigeria About a year ago 
                            is when I started my learning journey on how to make the web stunning and 
                            responsive. I have always been a curious individual, which is why I’d love 
                            to collaborate and do some real-world projects in order to flourish my skills.
                            I'm not perfect, however. I'm very far from perfection, yet I'm resilient, 
                            assertive and always ready to learn because I find learning fascinating. 
                            I am currently learning more and new Technologies.
                        </p>
                    </div>
                </div>
                
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]
        -skew-y-12' />
    </motion.div>
  )
}

export default Projects