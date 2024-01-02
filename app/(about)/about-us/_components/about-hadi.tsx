"use client"

import React from 'react'

const AboutHadi: React.FC = () => {
  return (
    <>
      <div className="h-screen font-[sans-serif]">
  <div className="grid md:grid-cols-2 items-center gap-16 max-w-7xl max-md:max-w-md mx-auto">
    <div className="md:h-[800px]">
      <img
        src="/asset/about_hadi.png"
        className="w-full h-full object-contain"
        alt="Get To Know logo"
      />
    </div>
    <div className="max-md:text-left md:text-center" style={{ fontFamily: "'Kalnia', serif" }}>
      <h3 className="md:text-5xl font-bold text-[#1F1841] text-2xl text-start md:leading-tight">How Hadi has <br />
evolved</h3>
      <p className="mt-6 text-lg max-w-lg font-sans text-justify">Introducing Hadi E-Learning, empowering Pakistani youth with technical knowledge. Our mascot, Hadi, symbolizes leadership, mentorship, and friendship, guiding youth towards success. With subsidized access, we provide opportunities for all. Let Hadi be your career consultant and leader, unlocking doors to a prosperous future. Join us on this journey to positively impact the lives of Pakistani youth with one of the best online learning platforms. Together, we can empower our youth and bridge the gap to global opportunities.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default AboutHadi
