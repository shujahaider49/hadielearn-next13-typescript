"use client"

import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Workshop: React.FC = () => {
  return (
    <>
     <div className="bg-[#f8f7fd] font-[sans-serif]">
  <div className="md:flex justify-between items-center gap-16 max-w-max max-md:max-w-md ">
    <Fade direction='left'>
    <div className="md:h-full">
      <img
        src="/asset/home_page_workshop.jpg"
        className="w-full h-full object-contain"
        alt="Get To Know logo"
      />
    </div>
    </Fade>
    <Fade direction='right'>
    <div className="max-md:text-left md:text-center md:m-10 " style={{ fontFamily: "'Kalnia', serif" }}>
      <h3 className="md:text-5xl font-bold text-[#1F1841] text-4xl mt-4 md:text-start text-center">Join our Free <br /> Workshops</h3>
      <p className="mt-6 text-lg max-w-lg font-sans text-justify">Join our free online workshops on a variety of topics to gain valuable insights and practical knowledge from the comfort of your own home. Our team of experts will guide you through interactive sessions, ensuring you leave with a deeper understanding of the subject matter. Register now to secure your spot!</p>
      <div className='flex justify-start'>
      <Button size="sm" variant="hadi" className="mt-4 font-sans">
        See All
      </Button>
      </div>
    </div>
    </Fade>
  </div>

</div>
  <div className='text-center mt-32'>
    <div>
        <h1 className='md:text-6xl mb-16 font-bold text-[#0F3F5D] line text-2xl space-y-2'>Your Gateway to a Brighter Future</h1>
    </div>
    <div>
        <Button variant="hadi" size="lg" className='rounded-lg text-xl text-slate-300 font-bold hover:cursor-text'>
            Enroll Now
        </Button>
    </div>
  </div>
    </>
  )
}

export default Workshop
