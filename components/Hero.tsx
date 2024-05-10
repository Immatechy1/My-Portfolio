import React from 'react'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
    React.useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 100,
          delay: 100,
          once: false,
        });
    }, []);
    
    return (
        <div className='bg-[#010514] overflow-hidden'>
            <div data-aos="zoom-out" data-aos-duration="1200" className='flex relative p-[2rem]'>
                <div className='z-[2] lg:pt-[12.5rem] md:pt-[14rem] ml-[-0.6rem] sm:pt-[12rem] pt-[10rem] lg:pl-[3rem]'>
                    <div className='lg:text-[8.5rem] md:text-[6rem] text-[3.7rem] text-[#f3f1f1] font-semibold tracking-tighter'>{pageInfo?.firstName} </div>
                    <div className='lg:text-[8.5rem] md:text-[6rem] mt-[-2rem] text-[3.7rem] text-[#f3f1f1] lg:mt-[-5rem]  font-semibold tracking-tighter'>{pageInfo?.lastName}</div>
                    <div className='lg:text-[2rem] md:text-[1.8rem] ml-[0.4rem] mt-[-0.8rem] text-[1.4rem] text-[#65C23A] lg:mt-[-2rem] font-semibold tracking-tighter'>Budding full stack developer</div>
                </div>
                
                <div data-aos="flip-up" data-aos-duration="1200" className='flex  absolute justify-end top-[2.8rem] md:top-[3.3rem] lg:top-[8rem] right-[1rem] md:right-[1rem] md:w-[48rem] lg:right-[10rem]'>
                <Image
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt=""
                    width={540}
                    height={560}
                />
                </div>
                <div className='absolute top-[5rem] md:top-[7.5rem] lg:top-[11.2rem] right-[3.8rem] md:right-[7rem] lg:right-[11.2rem]'>
                    <Image className='z-[-1] w-[2rem] md:w-[2rem] lg:w-[2.5rem] ' 
                        src={urlFor(pageInfo?.blockImage).url()}
                        alt=""
                        width={0}
                        height={0}
                    />
                </div>
            </div>  
        </div>
    )
}