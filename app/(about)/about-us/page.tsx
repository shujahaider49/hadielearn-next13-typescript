import React from 'react'
import AboutHero from './_components/about-hero'
import MissionVision from './_components/mission-vision'
import { Metadata } from 'next'
import Stats from '@/components/partial/stats'
import AboutHadi from './_components/about-hadi'
import Background from './_components/background'
import Testimonials from '@/components/partial/testimonials'

export const metadata: Metadata = {
  title: "Build skills with Hadi E-Learning: The best virtual learning platform"
}

const page = () => {
  return (
    <div>
      <AboutHero />
      <div className='pt-20'>
        <MissionVision />
      </div>
      <div className='pt-20'>
        <Stats />
      </div>
        <AboutHadi />
      <div className='pt-20'>
        <Background />
      </div>
      <div className='pt-20'>
        <Testimonials />
      </div>
    </div>
  )
}

export default page
