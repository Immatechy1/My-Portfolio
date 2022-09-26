
import { motion } from 'framer-motion';
import { url } from 'inspector';
import React from 'react'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (

    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5,}}
      className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
            src={urlFor(pageInfo?.src={urlFor(pageInfo?.profilePic).url()}).url()}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-68
            md:95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold' >Here is a <span className='underline decoration-[#f7ab0a]/50'></span> little background</h4>
            <p className='text-base'>
              {pageInfo?.address}
            </p>
        </div>
    </motion.div>
  )
}