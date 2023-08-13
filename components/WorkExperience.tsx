import React from 'react'
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({experiences}: Props) {
 
  return (
    <div className='bg-[#010514] flex relative overflow-hidden px-6 sm:px-4 flex-col 
      max-w-full sm:px-12 justify-evenly mx-auto '>
      <h3 className=' text-center mt-[5rem] md:mt-[7rem] uppercase text-2xl'>   
        Experience
      </h3>

  

      <div className=' w-full flex space-x-10 md:space-x-32 lg:space-x-80 overflow-x-scroll overflow-hidden mt-[4rem] snap-x snap-mandatory md:mt-[6rem] px-[4rem] lg:px-[14rem] '>
          {experiences?.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </div>
  );
}

export default WorkExperience;