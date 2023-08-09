import React from 'react'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
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
        <div  className='bg-slate-950  flex relative p-[1rem] overflow-hidden '>
            <div data-aos="zoom-out"  data-aos-duration="1200"   className='z-[2] lg:pt-[12.5rem] md:pt-[9rem] ml-[-0.6rem] sm:pt-[9.6rem] pt-[8rem] lg:pl-[3rem] '>
                <div className='lg:text-[8.5rem] md:text-[6rem] text-[3.7rem] text-[#f3f1f1] font-semibold tracking-tighter'>{pageInfo?.firstName} </div>
                <div className='lg:text-[8.5rem] md:text-[6rem] mt-[-2rem] text-[3.7rem] text-[#f3f1f1] lg:mt-[-5rem]  font-semibold tracking-tighter'>{pageInfo?.lastName}</div>
                <div className='lg:text-[2rem] md:text-[1.8rem] ml-[0.4rem] mt-[-0.8rem] text-[1.4rem] text-[#d44be0] lg:mt-[-2rem] font-semibold tracking-tighter'>Budding full stack developer</div>
            </div>

            <div data-aos="flip-up"  data-aos-duration="1200"  className='flex  absolute justify-end top-[-8.5rem] md:top-[-8.3rem] lg:top-[-4rem] right-[1rem] md:right-[1rem] md:w-[48rem] lg:right-[10rem]  mt-36'>
                <img
                    className='relative ' 
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt=""
                />
            </div>

            <div className='absolute top-[-0.5rem] md:top-[3.5rem] lg:top-[6.2rem] right-[-0.2rem] md:right-[3rem] lg:right-[6.2rem] mt-16  '>
                <img className='z-[-1] w-[34%] lg:w-[48%] ' 
                    src={urlFor(pageInfo?.blockImage).url()}
                    alt=""
                />
            </div>
        </div>  
    )
}

