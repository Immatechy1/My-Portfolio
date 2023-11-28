import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';
import { VerticalTimeline } from 'react-vertical-timeline-component';


type Props = {
  experiences: Experience[];
};

function WorkExperience({experiences}: Props) {
  React.useEffect(() => {
    AOS.init({
      duration: 50,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <div className='bg-[#010514] flex relative overflow-hidden px-6 sm:px-4 flex-col 
      max-w-full sm:px-12 justify-evenly mx-auto mt-[-1rem]'>
      <h3 className='text-center font-bold mt-[6rem] md:mt-[7rem] uppercase text-2xl'>   
      Work Experience
      </h3>

      <div data-aos-duration="1200" className="mt-[1rem] md:mt-[2rem] lg:mt-[4rem] flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default WorkExperience;