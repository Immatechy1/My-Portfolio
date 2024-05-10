import React from 'react'
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { urlFor } from '@/sanity';
import Button from './button/Button';
import { PageInfo } from '@/typings';

type Props = {
  pageInfo: PageInfo,
}
 
export default function About({ pageInfo }: Props) {
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
    <div className='bg-[#010514] mt-[3rem] sm:mt-[4rem] lg:mt-[6rem] px-4 md:px-8 lg:px-[5rem] overflow-hidden'>
      <h3 className='text-center items-center font-bold text-2xl uppercase'>
        ABOUT ME
      </h3>
       
      <div className='flex flex-col relative text-center lg:flex-row justify-evenly items-center mt-[4rem] lg:gap-14 md:mt-[7rem] lg:mt-[5rem]'>
        <Image data-aos="fade-right" data-aos-duration="1200"
          src={urlFor(pageInfo?.profilePic).url()}
          className='flex-shrink-0 w-56 h-56 md:w-[350px] md:h-[320px]
          lg:w-[500px] lg:h-[450px] rounded-full object-cover md:rounded-lg lg:rounded-lg'
          alt=""
          width={560}
          height={560}
        />

        <p data-aos="fade-up" data-aos-duration="1200" className='text-sm md:text-lg lg:text-base tracking-widest lg:leading-8 md:leading-8 mt-[4rem] lg:mt-[0] '>
          {pageInfo?.backgroundInformation}
        </p>
      </div>

      <div data-aos="fade-right" data-aos-duration="1200" className='flex flex-col w-[84%] sm:w-[74%] lg:w-[40%] mt-[2rem] '>
        <Image className='flex rotate-[270deg] mb-2' 
          src='/images/pin.png' 
          alt='pin' 
          width={50} 
          height={50}  
        />
         
        <div  className='text-[2rem] text-[1.3rem] font-semibold'>Trustworthy, Creative and Dedicated to 
          <span className='text-[#65C23A]'> delivering on time</span>
        </div>

        <div className='w-[8rem] mt-6 border-[#65C23A]'>
          <Button text={'VIEW CV'} isOutline onClick={() => window.open("files/IMMATECHY.pdf")}
        />
      </div>
      </div>
    </div>
  )
}