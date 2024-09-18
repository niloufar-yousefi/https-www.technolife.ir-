'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './../../../globals.css'
import Link from 'next/link';
import useStore from './../../../store/store'


export default function page({ params }) {

  // fetch data start 
  const [data, setData] = useState([])
  const { slug, id } = params
  const url = `https://api.one-api.ir/digikala/v1/product/?id=${id}`
  const headers = {
    'accept': 'application/json',
    'one-api-token': '745773:66ac97d10ec51',
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, {
        method: 'GET',
        headers: headers,
      })
      const data = await res.json()
      setData(data.result.product)
    }
    fetchData()
  }, [])


  //cart
  const { basket, addToBasket } = useStore()


  // add to basket end

  return (
    <div className='w-full h-[450px]  bg-slate-50'>

      {/* desk */}
      <div className='w-full h-full hidden lg:flex justify-between *:bg-white *:border-2 *:border-slate-200 *:rounded-3xl '>

        {/* desk part1 */}
        <div className='w-[55%] h-full flex flex-wrap justify-around *:h-full'>

          {/* desk part1-1 */}
          <div className="py-4 px-7 flex flex-wrap justify-around w-[70%]">
            {data.title_fa && <h2 className='text-slate-600 w-full text-lg font-bold  '>{data.title_fa}</h2>}
            {data.title_en && <h5 className='text-slate-400 w-full  text-xs'>{data.title_en}</h5>}
            {data.digiplus?.services_summary[0] && <h5 className='text-slate-400 w-full  text-xs'>{data.digiplus.services_summary[0]}</h5>}
            {data.product_badge?.text && <h5 className='text-slate-400  w-full  text-xs'>{data.product_badge.text}</h5>}
          <div className='w-full '>
          <div className='w-[70%]  flex flex-wrap  p-2 ]'>
              {data.review && data.review.attributes && data.review.attributes.map((item, index) => {
                return (
                  <div key={index} className='flex flex-wrap w-full  border-slate-100 border-dashed border-b-2 '>
                    <p className='text-slate-500 w-[50%] text-xs py-1'>{item.title}:</p>
                    <p className='text-slate-500 w-[50%] text-xs py-1'>{item.values}</p>
                  </div>
                )
              }
              )}
            </div>
          </div>

          </div>

          {/* desk part1-2 */}
          <div className=" h-full relative w-[20%]">
          {data.images?.main && <Image src={data.images.main} alt='#' fill sizes="(max-width: 800px) 100vw, 800px" priority className='absolute top-0 left-0 object-contain w-full h-full' quality={100} />}

          </div>
        </div>

        {/* desk part2 */}
        <div className='w-[40%] h-full mb-10 py-4 px-20'>
          <p className='text-slate-600 w-full  text-sm mb-5'>فروشنده</p>
          <p className='text-slate-600 w-full  text-sm mb-5'>تکولایف</p>
          <p className='text-slate-600 w-full  text-sm mb-5'>عملکرد عالی</p>
          <p className='text-slate-600 w-full  text-sm mb-5'>نظرات شما</p>
          <hr className='w-full h-[1px] bg-slate-200 mb-10' />
          {data.price?.rrp_price && <h5 className='text-slate-600 mb-10 w-full text-end  text-2xl'>{data.price.rrp_price} <span className='text-xs'>تومان</span></h5>}
              
          <Link  className='w-full' href='/basket'>
            <Button onClick={() => addToBasket({ id: data.id, title: data.title_fa, price: data.price.rrp_price, image: data.images.main, quantity: 1 })} variant="contained" color="success" className='text-slate-50  py-3 rounded-lg w-full hover:text-slate-200 text-[14px] duration-75' style={{ fontFamily: 'kamaleh' }}>
              افزودن به سبد خرید
              <ShoppingCartIcon className='justify-end' />
            </Button>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className='w-full h-full flex lg:hidden flex-wrap'>

        {/* mobile part1 */}
        <div className='w-full h-[70%] flex flex-wrap '>

          {/* mobile part1-1 */}
          <div className="bg-white relative w-full h-[60%]">
            {data.images?.main && <Image src={data.images.main} alt='#' fill sizes="(max-width: 800px) 100vw, 800px" priority className='absolute top-0 left-0 object-contain w-full h-full' quality={100} />}
          </div>

          {/* mobile part1-2 */}
          <div className="w-full h-[40%] flex items-center ">
            {data.title_fa && <h2 className='text-slate-600 w-full text-sm font-bold text-center '>{data.title_fa}</h2>}
          </div>
        </div>

        {/* mobile part2 */}
        <div className='w-full h-[30%] flex flex-wrap'>

          {/* mobile part2-1 */}
          <div className="w-[50%]  flex  items-center">
            {data.price?.rrp_price && <h5 className='text-slate-600 w-full  text-2xl'>{data.price.rrp_price} <span className='text-xs'>تومان</span></h5>}
          </div>

          {/* mobile part2-2 */}
          <Link className='w-[50%] flex items-center' href='/basket'>
            <Button onClick={() => addToBasket({ id: data.id, title: data.title_fa, price: data.price.rrp_price, image: data.images.main, quantity: 1 })} variant="contained" color="success" className='text-slate-50  py-3 rounded-lg w-full hover:text-slate-200 text-[14px] duration-75' style={{ fontFamily: 'kamaleh' }}>
              افزودن به سبد خرید
              <ShoppingCartIcon className='justify-end' />
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}
