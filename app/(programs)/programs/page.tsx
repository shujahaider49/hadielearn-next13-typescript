import React from 'react'
import ProgramHero from './_components/program-hero'
import { Metadata } from 'next';
import ProgramCards from '@/components/partial/programCards';

export const metadata: Metadata = {
    title: "Hadi, providing you with one of the best online course platform",
  };

const page = () => {
  return (
    <div>
      <ProgramHero />
      <div className='mt-10'>
        <ProgramCards />
      </div>
    </div>
  )
}

export default page
