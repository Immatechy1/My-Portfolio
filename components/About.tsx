import React from 'react'
import Image from 'next/image';
import 'aos/dist/aos.css'; // Import AOS styles
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
    <div className='bg-[#010514] overflow-hidden'>
    <div  data-aos="zoom-out-up" data-aos-duration="100" data-aos-easing="linear" className='mt-[6rem] sm:mt-[8rem] lg:mt-[0rem] pb-[3rem]'>
      <div className='flex flex-col relative  text-center md:text-left md:flex-row md:text-left lg:flex-row px-4 md:px-8 lg:px-[3rem] justify-evenly items-center'>
        <h3 className='uppercase md:absolute md:top-8 lg:mt-[8rem] text-2xl'>
          About Me
        </h3>
        <Image data-aos="fade-right" data-aos-duration="1200"
          src={urlFor(pageInfo?.profilePic).url()}
          className='mt-[3rem] sm:mt-[4rem] md:mt-[8rem] lg:mt-[16rem] flex-shrink-0 w-56 h-56 md:w-[300px] md:h-[320px]
          lg:w-[400px] lg:h-[400px] rounded-full object-cover md:rounded-lg lg:rounded-lg'
          alt=""
          width={560}
          height={560}
        />
        <div className='space-y-10 mt-[3rem] sm:mt-[4rem] md:mt-[8rem] lg:mt-[16rem]  md:pl-[2rem] lg:pl-[3rem] '>
          <p data-aos="fade-up" data-aos-duration="1200" className='text-[0.8rem] lg:text-[1rem]'>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>`

      <div data-aos="fade-right" data-aos-duration="1200" className='flex flex-col mx-[2rem] w-[84%] sm:w-[74%] lg:w-[40%] mt-[3rem] '>
        <div className=''>
          <Image className='flex rotate-[270deg] mb-2' src='/images/pin.png' 
          alt='pin' width={50} height={50}  />
        </div>
        <div  className='text-[2rem] text-[1.3rem] font-semibold'>Trustworthy, Creative and Dedicated to 
          <span className='text-[#65C23A]'> delivering on time</span></div>
          <div className='w-[8rem] mt-8 border-[#65C23A]'>
            <Button text={'VIEW CV'} isOutline onClick={() => window.open("files/IMMATECHY.pdf")}
          />
        </div>
      </div>
    </div>
  </div>
  )
}