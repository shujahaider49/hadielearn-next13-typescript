"use client"

import { courseCard } from '@/data/data'
import { Calendar, Clock, FileText } from 'lucide-react'
import React from 'react'
import ReactStars from 'react-stars'

const ProgramCards: React.FC = () => {
  return (
    <section className="py-20">
      <div className="flex flex-wrap max-w-screen-xl gap-y-10 mx-auto px-4 md:px-8">
          {courseCard.map((items, key) => (
            <div className="w-full mx-auto group sm:max-w-sm cursor-pointer list-none border border-slate-200 rounded-lg" key={key}>
              <div>
                <img
                  src={items.img}
                  alt={items.title}
                  width={300}
                  height={200}
                  className="w-full h-full  aspect-video"
                />
                <div className="mt-3 space-y-4">
                    <div className='flex pl-5 mt-6'>
                    <span>
                    <ReactStars 
                        count={5} 
                        size={15} 
                        color2={'#1F1841'}
                        value={items.rating} 
                        />
                    </span>
                  <span className=" text-black pl-2 bottom-0 ">{items.rating}</span>
                    </div>
                  <h3 className="text-xl pl-5 text-[#1F1841] font-bold">
                    {items.title.substring(0,25) + "..."}
                  </h3>

                  <div className='flex justify-around pb-5'>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                  <Calendar size={18}/>
                    {items.duration}
                  </p>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                  <FileText size={18}/>
                    {items.classes}
                  </p>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                  <Clock size={18}/>
                    {items.hrs}
                  </p>
                  </div>
                </div>
                <div className='flex justify-around border-t-2 py-1'>
                    <p className='text-[#0F3F5D] font-sans  mt-2'>{items.teacher}</p>
                    <p className='text-[#0F3F5D] font-bold mt-2'>{items.cost}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default ProgramCards
