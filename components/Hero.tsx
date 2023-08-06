import Link from 'next/link';
import React from 'react'
import { Cursor,  useTypewriter  } from "react-simple-typewriter"
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
   
    return (
        <div  className='flex relative flex-col p-4 '>
            
            <div className='flex mt-[-4rem] flex-row items-baseline'>
                <div className='z-[2] absolute top-[-9.5rem] sm:top-[-7.5rem]  md:top-[-1.4rem] lg:pt-[7.5rem] md: pt-[17rem] ml-[-0.6rem]  pt-[20.5rem] lg:pl-[3rem] '>
                    <div className='lg:text-[9rem] md:text-[5.3rem] text-[3.7rem] text-[#f3f1f1] font-semibold tracking-tighter'>{pageInfo?.firstName} </div>
                    <div className='lg:text-[9rem] md:text-[5.3rem] mt-[-2.5rem] text-[3.7rem] text-[#f3f1f1] lg:mt-[-5rem]  font-semibold tracking-tighter'>{pageInfo?.lastName}</div>
                    <div className='lg:text-[2rem] md:text-[1.4rem] ml-[0.4rem] mt-[-0.3rem] text-[1.4rem] text-[#f7ab0a]/40  lg:mt-[-2rem] font-semibold tracking-tighter'>Budding full stack developer</div>
                </div>

                <div className='absolute flex justify-end top-[-6rem] md:top-[-5rem] right-[1rem] md:right-[1rem] md:w-[48rem] lg:w-[42rem] lg:right-[6rem] mt-36'>
                    <img
                        className='relative lg:w-[70%]' 
                        src={urlFor(pageInfo?.heroImage).url()}
                        alt=""
                    />
                </div>

                <div className='absolute top-[2rem] md:top-[5.5rem] lg:top-[6.2rem] right-[-0.2rem] md:right-[3rem] mt-16  '>
                    <img className='z-[-1] w-[34%] lg:w-[44%]' 
                        src={urlFor(pageInfo?.blockImage).url()}
                        alt=""
                    />
                </div>


               
            </div>

            
        </div>  
    )
}

