"use client"

import React from 'react'
import { Fade } from 'react-awesome-reveal'

const AboutHero = () => {
  return (
    <div>
        <img
        src="/asset/bg-gird1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-50"
      />
      <section className="max-w-6xl mt-12 mx-auto px-4 md:px-8">
        <Fade direction='up'>
            <div className="space-y-3 text-center">
                <h3 className="text-4xl text-[#0f3f5d] font-bold">
                Learn more about Hadi E-learning
                </h3>
                <p className="text-black md:px-36 pt-4 text-md italic font-sans">
                Hadi E-learning, transforming your career through free IT training.  
                </p>
            </div>
            </Fade>
        </section>
    </div>
  )
}

export default AboutHero
