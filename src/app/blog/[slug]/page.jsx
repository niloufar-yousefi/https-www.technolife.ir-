'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import './../../globals.css'
import Link from 'next/link';





export default function page({ params }) {
  const [items, setItems] = useState([]);
  const { slug } = params;
  const url = `https://api.one-api.ir/digikala/v1/category/?id=${slug}`;
  const headers = {
    'accept': 'application/json',
    'one-api-token': '745773:66ac97d10ec51',
  };
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(rs => rs.json())
      .then(rs => {
        let x = rs.result
        setItems(x[x.length - 1].data.products)
      })
  }, [])
  return (
    <Box className='flex flex-wrap justify-center  md:justify-between  w-full h-auto  bg-white px-4' lazy="true" >
      {
        items.map((item, index) => (

          <Box className='w-full md:w-[48%] lg:w-[23%] my-4 h-[300px] shadow-md flex flex-wrap px-6  duration-300 hover:shadow-2xl' key={index}>
            <div className='w-full  flex justify-center items-center h-[180px] cursor-pointer'>
              <Link className='' href={`/blog/${slug}/${item.id}`}>
                <Image src={item.images.main} alt={item.title_fa} width={100} height={100} priority className='w-auto h-auto object-cover' quality={100} />
              </Link>
            </div>
            <h2 className='text-slate-600 w-full text-center text-sm'>{item.title_fa}</h2>
            <p className='w-full text-center text-slate-600 text-sm'>{item.price.rrp_price} تومان</p>
          </Box>


        ))
      }

    </Box>
  )
}
