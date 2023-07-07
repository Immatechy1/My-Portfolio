import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean
}

function Skil({ directionLeft }: Props) {
  return (
    <div className='group relative md:top-40 xl:top-40 top-32 flex cursor-pointer'>
        <motion.img 
            initial={{ 
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 1 }}
            src="data:image/png;base64,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"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
            xh:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' 
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>  
            </div>
        </div>
    </div>
  )
}

export default Skil