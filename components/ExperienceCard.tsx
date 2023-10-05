import React from 'react';
import Aos from 'aos';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Experience } from '@/typings';

type Props = {
    experience: Experience;
};
  
export default function ExperienceCard({experience}: Props) {
    React.useEffect(() => {
        Aos.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 100,
          delay: 100,
          once: false,
        });
      }, []);
    return (
        <article data-aos="flip-left" data-aos-duration="1500" data-aos-easing="linear" className='flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 mb-[5rem]
            w-[320px] sm:w-[350px] md:w-[650px] lg:w-[1100px] snap-center bg-[#0f172a] lg-3 lg:pb-10 
            hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 
            overflow-hidden '>
                <motion.div
                 initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false }}
                >
                    {experience.companyImage && (
                    <Image
                        className='w-28 h-28 rounded-full md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] object-cover
                        object-center mt-[2rem] md:mt-[4rem] '
                        src={urlFor(experience?.companyImage).url()}
                        alt=""
                        width={560}
                        height={560}
                    />
                )}
                </motion.div>
            

            <div className=''>
                <h4 className='text-2xl text-center mt-[-1rem]  font-bold'>{experience?.company}</h4>
                <p className='font-light text-center text-xl  mt-[3rem]'>{experience?.jobTitle}</p>
                <div className='flex space-x-2 '>
                    {experience.technologies?.map((technology) => (
                        <Image
                            key={technology._id}  
                            className='h-10 w-10 rounded-full'
                            src={urlFor(experience?.companyImage).url()}
                            alt=""
                            width={560}
                            height={560}
                        />
                    ))}
                </div>
                <p className='uppercase text-center text-xl py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {" "}
                    {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
                </p>
                
                <ul className='list-disc space-y-4 px-[1.7rem] md:px-[4rem] text-base md:text-xl max-h-96 w-1/14 pb-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800'>
                {experience.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                ))}
                </ul>
            </div> 
        </article>
    )
}
