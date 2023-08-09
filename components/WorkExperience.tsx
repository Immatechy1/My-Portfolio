import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5 }}
      className='bg-slate-950 flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-8 sm:px-12 justify-evenly mx-auto items-'
    >
      <h3 className='absolute top-20 md:top-28 uppercase text-2xl'>   
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll mt-[2rem] md:mt-[-5rem]  snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f4ab0a]/80'>
          {experiences?.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;