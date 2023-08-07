import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  pageInfo: PageInfo,
}
 
export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5,}}
      className='bg-black flex flex-col  relative mt-[5rem] sm:mt-[5.8rem]  text-center md:text-left
        md:flex-row md:text-left lg:flex-row px-4 md:px-8 lg:px-[8rem] justify-evenly items-center'>
        <h3 className='uppercase md:absolute md:top-24 tracking-[20px] text-gray-500 text-2xl'>
            About Me
        </h3>
        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2, 
            }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{once: true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className='mt-[3rem] sm:mt-[4rem] md:mt-[14rem] flex-shrink-0 w-56 h-56 md:w-[300px] md:h-[300px]
            lg:w-[400px] lg:h-[400px] rounded-full object-cover md:rounded-lg  lg:rounded-lg'
        />
        <div className='space-y-10 mt-[3rem] sm:mt-[4rem] md:mt-[14rem] md:pl-[1rem] md:pl-[4rem] '>
          <p className='text-base lg:text-xl'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
    </motion.div>
  )
}