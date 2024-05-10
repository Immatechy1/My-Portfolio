import React from 'react'
import Skill from "./Skil"
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <div className='bg-[#010514] mt-[4rem] overflow-hidden'>
      <h3 className='text-center items-center font-bold text-2xl uppercase'>
        Skills
      </h3>
      <h3 className='text-center items-center uppercase tracking-[2px] text-gray-500 text-base md:text-2xl mt-8'>
        Hover over a skill for current proficiency
      </h3>
      
      <div className=' flex relative flex-col text-center md:text-left lg:flex-row  max-w-[2000px] justify-center mx-auto items-center'>
        <div className='grid grid-cols-4 gap-5 mt-[4rem] px-[1rem]'>
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Skills