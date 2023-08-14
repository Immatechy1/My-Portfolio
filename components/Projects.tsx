import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = {
    projects: Project[]
    onClick?: (e?: React.SyntheticEvent<EventTarget>) => void;
};

function Projects({projects, onClick}: Props) {
  return (
    <div className='bg-[#010514] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-2xl'>
           Projects 
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f4ab0a]/80 mt-20 '>
            {projects?.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 md:px-44 '>
                    <div>
                    <motion.div
                     initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: false }}
                    >
                    <a href={project?.linkToBuild} onClick={onClick} className="link cursor-pointer hover:scale-110 duration-500 p-[0.5rem] flex  rounded  border-4 border-[#0f172a]"> 
                        {project.image && (
                        <Image className='w-[28rem] rounded'
                            src={urlFor(project?.image).url()}
                            alt=""
                            width={760}
                            height={560}
                        />
                        )}
                    </a>
                    </motion.div>
                    </div>
                    
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab0a]/50'>
                                case study {i+1} of {projects.length}:
                            </span>{" "}
                            {project?.title}
                        </h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies?.map(technology =>(
                            <Image
                                className='h-10 w-10'
                                key={technology._id} 
                                src={urlFor(technology.image).url()} 
                                alt=""/>
                            ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>
                           {project?.summary}
                        </p>
                    </div>
                </div>   
            ))}
        </div>
        {/* <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]
        -skew-y-12' /> */}
    </div>
  )
}

export default Projects