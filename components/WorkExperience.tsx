import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly xl:-mt-36 md:-mt-56 -mt-10 mx-auto items-center'
    >
      <h3 className='absolute xl:top-20 md:top-20 top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>   
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f4ab0a]/80'>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
      </div>
    </motion.div>
  );
  
}

export default WorkExperience;