import React from 'react'
import Skill from "./Skil"
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <div className='bg-[#010514]  flex relative flex-col text-center md:text-left lg:flex-row
      max-w-[2000px] lg:px-10 justify-center mx-auto items-center lg:pb-[8rem] pb-[4rem]'>
        <h3 className='absolute top-20 text-2xl md:text-4xl'>
            Skills
        </h3>

        <h3 className='absolute top-32 sm:top-40 px-4 uppercase tracking-[2px]  md:text-2xl text-gray-500
        text-base'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 mt-60 sm:mt-72 px-[1rem]'>
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
         
        </div>
    </div>
  )
}
export default Skills