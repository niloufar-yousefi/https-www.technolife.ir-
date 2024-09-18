"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const SaleTrend = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-full h-[40vh] lg:h-[70vh] flex flex-wrap px-4 lg:px-10 justify-between content-around '>
      <div className='w-[45%] h-[45%] rounded-3xl ' data-aos="fade-left" data-aos-once="true">
      <Image src="/banner_a.png" alt="baner1"  fill priority  className='absolute rounded-3xl top-0 left-0 object-fill cursor-pointer hover:scale-105 duration-300' quality={100} />
      </div>

      <div className='w-[45%] h-[45%] rounded-3xl ' data-aos="fade-right" data-aos-once="true">
        <Image src="/banner_b.png" alt="baner2"  fill priority  className='absolute rounded-3xl top-0 left-0 object-fill cursor-pointer hover:scale-105 duration-300' quality={100} />
      </div>
      
      <div className='w-[45%]  h-[45%] rounded-3xl ' data-aos="fade-left" data-aos-once="true">
        <Image src="/banner-c.png" alt="baner2"  fill priority  className='absolute rounded-3xl top-0 left-0 object-fill cursor-pointer hover:scale-105 duration-300' quality={100} />
      </div>

      <div className='w-[45%]  h-[45%] rounded-3xl ' data-aos="fade-right" data-aos-once="true">
        <Image src="/banner-d.png" alt="baner2"  fill priority  className='absolute rounded-3xl top-0 left-0 object-fill cursor-pointer hover:scale-105 duration-300' quality={100} />
      </div>

    </div>
  )
}

export default SaleTrend