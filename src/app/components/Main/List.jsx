'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './customStyle2.css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';



export default function App() {
  return (
    <div className='w-full h-[350px] lg:h-[500px] py-20 '>
      <p className='text-center text-2xl font-bold mb-5 lg:mb-0 text-[#88CCEC]'>محصولات پیشنهادی</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay:2500, disableOnInteraction: false }}  
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon1.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon2.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon3.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon4.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon5.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon6.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon7.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon8.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon9.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon10.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon11.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-slate-50'>
          <div className='w-[150px] h-[150px] rounded-[50%] bg-[#d3e8f2] p-1 duration-300 hover:scale-105 hover:bg-[#92D5F5] cursor-pointer'>
            <Image src='/icon12.png' width={100} height={100} priority className='w-auto h-auto ' quality={100} alt='' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
