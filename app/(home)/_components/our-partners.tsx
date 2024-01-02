"use client"

import Image from 'next/image'
import React from 'react'

const OurPartners = () => {
  return (
    <div className='pt-10'>
      <div className='container'>
        <p className='md:text-5xl mb-16 text-center md:text-start font-bold text-[#1F1841] line text-2xl'>Our Partners</p>
      </div>
      <div className="flex justify-evenly items-center">
        <Image src="/asset/PIT-logo.png" alt="" height={120} width={120}/>
        <Image src="/asset/cycarts_logo.png" alt="" height={120} width={120}/>
      </div>
    </div>
  )
}

export default OurPartners
