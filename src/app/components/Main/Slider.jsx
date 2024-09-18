'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './customStyle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}  
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        lazy={true}
      >       
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner1.png" alt="baner1"  fill priority  className='absolute top-0 left-0 object-cover' quality={100} />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner2.png" alt="baner2"  fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner3.png" alt="baner3"  fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner4.png" alt="baner4"  fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner5.png" alt="baner5" fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner6.png" alt="baner6" fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
        <SwiperSlide className=' bg-slate-400 relative'>
          <Image src="/banner_SlideBanner7.png" alt="baner1" fill priority  className='absolute top-0 left-0 object-cover' quality={100}  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
