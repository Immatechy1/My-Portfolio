import React from 'react'
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import Image from 'next/image';
import { Skill } from '@/typings';

type Props = {
    skill: Skill
    directionLeft?: boolean
}

function Skil({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
            initial={{ 
                x: directionLeft ? -50 : 50,
                opacity: 0
            }}
            whileInView={{ opacity: 1, x:0, y:0}}
            transition={{ duration: 1 }}>
            <Image
                src={urlFor(skill?.image).url()}
                className='rounded-full border object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
                alt=""
                width={560}
                height={560}
            />
        </motion.div>
      
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            group-hover:bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 xl:w-32 xl:h-32
            rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}</p>  
            </div>
        </div>
    </div>
  )
}

export default Skil