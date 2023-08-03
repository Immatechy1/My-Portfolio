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
      className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row lg:flex-row max-w-7xl px-10 xl:px-20 justify-evenly mx-auto items-center sm:mt-40 md:-mt-20 lg:mt-10 xl:mt-64'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
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
            className='mt-96 sm:mt-40 md:-mt-20 lg:mb-80 xl:-mb-96 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[250px]
            md:h-[300px] lg:w-[320px] lg:h-[350px] lg:rounded-lg xl:w-[350px] xl:h-[350px]'
        />

        <div className='space-y-10 px-0 md:px-8 lg:px-10 mt-10 sm:mt-10 md:-mt-24 lg:mb-80 xl:-mb-96 '>
            <h4 className='text-3xl font-semibold' >Here is a{" "} <span className='underline decoration-[#f7ab0a]/50'>little</span>{" "}background</h4>
            <p className='text-base'>
              {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}