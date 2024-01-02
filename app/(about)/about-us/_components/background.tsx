"use client"

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Background: React.FC = () => {
  return (
    <section className="pt-135">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="text-left">
              <div className="mb-10">
                <h2 className="text-5xl font-semibold text-[#1F1841]">Background</h2>
              </div>
              <p className="text-base text-[22px] leading-8 text-justify pr-20 mb-10">
                Pakistan's economic conditions have gone through turbulence in recent years. This situation has caused a void of opportunities in the countries which has discouraged the youth greatly. To address this disappointment among the youth of the country Hadi E-learning plans to offer:
              </p>
              <ul className="list-none ml-5 text-xl font-bold">
                <li className='flex gap-x-1 py-2 hover:text-[#1F1841]'>
                  <CheckCircle2 size={25} className='hover:fill-[#1F1841] hover:text-white fill-[#ECEBFF] transition-all duration-300' />
                  Free IT training to the youth.
                </li>
                <li className='flex gap-x-1 py-2 hover:text-[#1F1841]'>
                  <CheckCircle2 size={25} className='hover:fill-[#1F1841] hover:text-white fill-[#ECEBFF] transition-all duration-300' />
                  Training in in-demand futuristic fields.
                </li>
                <li className='flex gap-x-1 py-2 hover:text-[#1F1841]'>
                  <CheckCircle2 size={25} className='hover:fill-[#1F1841] hover:text-white fill-[#ECEBFF] transition-all duration-300' />
                  Mentorship to make students ready for the industry.
                </li>
                <li className='flex gap-x-1 py-2 hover:text-[#1F1841]'>
                  <CheckCircle2 size={25} className='hover:fill-[#1F1841] hover:text-white fill-[#ECEBFF] transition-all duration-300' />
                  Opportunities to be financially independent.
                </li>
                <li className='flex gap-x-1 py-2 hover:text-[#1F1841]'>
                  <CheckCircle2 size={25} className='hover:fill-[#1F1841] hover:text-white fill-[#ECEBFF] transition-all duration-300' />
                  Strengthening the country's economy through skilled HR.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3">
                <div className="m-img pr-6 text-right">
                  <img src="/asset/left_background.webp" alt="achievement1" className="rounded-xl" />
                </div>
              </div>
              <div className="w-full md:w-1/3 hidden md:block">
                <div className="w-img">
                  <img src="/asset/right_background.webp" alt="achievement2" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
