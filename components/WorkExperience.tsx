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
    <div className='bg-[#010514] overflow-hidden mt-[6rem] px-4 sm:px-6 md:px-14'>
      <h3 className='text-center items-center uppercase font-bold text-2xl'>   
       Work Experience
      </h3>

      <div data-aos-duration="1200" className="mt-[1rem] md:mt-[2rem] lg:mt-[6rem] flex flex-col">
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