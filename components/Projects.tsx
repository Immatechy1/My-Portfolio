import React from 'react';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';
import Button from './button/Button';
import Aos from 'aos';

type Props = {
    projects: Project[]
    onClick?: (e?: React.SyntheticEvent<EventTarget>) => void;
};

function Projects({projects, onClick}: Props) {
    React.useEffect(() => {
        Aos.init({
          duration: 100,
          easing: 'ease-in-out',
          offset: 100,
          delay: 100,
          once: false,
        });
    }, []);
  return (
    <div className='bg-[#010514] overflow-hidden'>
        <div data-aos="fade-up" data-aos-duration="500" className='w-[100%] pb-[4rem] md:pb-[6rem] lg:pb-[6rem]'>
            <h3 className='uppercase text-2xl mt-[8rem] font-bold text-center'>
                Projects 
            </h3>
            <div className=''>
                {projects?.map((project, i) => (
                <div key={project._id} data-aos="fade-left" data-aos-duration="500" className='grid lg:flex md:px-[4rem]  mt-[1.8rem] md:mt-[8rem] lg:mt-[8rem]'>
                    <div className='lg:pr-[5rem] order-last lg:order-none px-[1.5rem] md:px-[1rem] lg:px:0'>
                        <h1 className='text-2xl md:text-3xl lg:text-3xl mt-[4rem] lg:mt-[0] font-bold '> {project?.title}</h1>
                        <h1 className='tracking-wide text-base lg:leading-10 leading-7 md:text-lg lg:text-lg mt-[1rem] md:mt-[1.5rem] lg:mt-[2rem]'> {project?.summary}</h1>
                        <div className='flex py-[2rem] space-x-8 lg:space-x-20   '>
                            
                            <a href={project?.linkToDemo} onClick={onClick} className="link cursor-pointer hover:scale-110 duration-500 lg:w-[8rem] border-2 rounded border-[#65C23A] "> 
                                <Button text={'View Demo '}  isOutline />
                            </a>
                            <a href={project?.linkToCode} onClick={onClick} className="link cursor-pointer hover:scale-110 duration-500 lg:w-[8rem] border-2 rounded  border-[#65C23A]"> 
                                <Button text={'Source code '} isOutline />
                            </a>                 
                        </div>
                    </div>

                    <div className='relative mt-[3rem] md:mt-[0] lg:mt-[1rem]  px-[2rem] px-[1.5rem] md:px-[1rem] lg:px:0'>
                        {project.projectImage && (
                        <Image className='lg:w-[150rem] md:w-[100rem] lg:h-auto lg:max-w-lg' 
                            src={urlFor(project?.projectImage).url()} 
                            alt=""
                            width={400}
                            height={400}
                        />
                        )}
                    </div>   
                </div>
                
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects