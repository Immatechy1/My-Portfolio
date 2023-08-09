import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
};
  
export default function ExperienceCard({experience}: Props) {
    return (
        <article className='flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0
            w-[320px] sm:w-[300px] md:w-[700px] lg:w-[1480px] snap-center bg-[#1d1836] mt-[8rem] md:mt-[20rem] 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
            overflow-hidden'>
            {experience.companyImage && (
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false }}
                className='w-28 h-28 rounded-full md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-cover
                object-center mt-[2rem] md:mt-[4rem] '
                src={urlFor(experience?.companyImage).url()}
            />
            )}

            <div className=''>
                <h4 className='text-2xl text-center md:text-4xl font-bold'>{experience?.company}</h4>
                <p className='font-light text-center text-2xl md:text-3xl mt-[2rem]'>{experience?.jobTitle}</p>
                <div className='flex space-x-2 '>
                    {experience.technologies?.map((technology) => (
                        <img
                            key={technology._id}  
                            className='h-10 w-10 rounded-full'
                            src={urlFor(experience?.companyImage).url()}
                        />
                    ))}
                </div>
                <p className='uppercase text-center md:text-xl py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {" "}
                    {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
                </p>
                
                <ul className='list-disc space-y-4 px-[1.7rem] md:px-[4rem] text-base md:text-xl max-h-96 w-1/14  overflow-y-scroll 
                scrollbar-track-black scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                ))}

                </ul>
            </div> 
        </article>
    )
}
