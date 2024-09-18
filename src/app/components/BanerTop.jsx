import React from 'react'
import Image from 'next/image'

function BanerTop() {
  return (
    <div className='w-full bg-purple-800 h-[20px] lg:h-[50px] fixed top-0'>
      <Image src='/topBaner.png' alt='baner-top' fill priority  className='absolute top-0 left-0 object-cover'/> 
    </div>
  )
}

export default BanerTop
