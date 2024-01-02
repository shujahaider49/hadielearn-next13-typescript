"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, Calendar, Clock, FileText } from 'lucide-react';
import ReactStars from 'react-stars';

import { courseCard } from '../../data/data';
import { Fade } from 'react-awesome-reveal';

interface CourseItem {
  img: string;
  title: string;
  rating: number;
  duration: string;
  classes: string;
  hrs: string;
  teacher: string;
  cost: string;
}

const ProgramSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <ArrowRight color='black' />,
    prevArrow: <ArrowLeft color='black' />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
    <Fade direction='up'>
    <section className="max-w-screen-xl mx-auto px-4 md:px-8">
      <Slider {...settings}>
        {courseCard.slice(0, 6).map((item: CourseItem, index: number) => (
          <div className="w-full mx-auto group sm:max-w-sm cursor-pointer border border-slate-200" key={index}>
            <div>
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-full aspect-video"
              />
              <div className="mt-3 space-y-4">
                <div className="flex pl-5 mt-6">
                  <ReactStars 
                    count={5} 
                    size={15} 
                    color2={'#1F1841'}
                    value={item.rating}
                    
                  />
                  <span className="text-black pl-2 bottom-0">{item.rating}</span>
                </div>
                <h3 className="text-xl pl-5 text-[#1F1841] font-bold">
                  {item.title.substring(0, 25) + "..."}
                </h3>

                <div className='flex justify-around pb-5'>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                    <Calendar size={18}/>
                    {item.duration}
                  </p>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                    <FileText size={18}/>
                    {item.classes}
                  </p>
                  <p className="flex text-black gap-1 text-sm duration-150 group-hover:text-gray-800">
                    <Clock size={18}/>
                    {item.hrs}
                  </p>
                </div>
              </div>
              <div className='flex justify-around border-t-2 py-1'>
                <p className='text-[#0F3F5D] font-sans mt-2'>{item.teacher}</p>
                <p className='text-[#0F3F5D] font-bold mt-2'>{item.cost}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
    </Fade>
    </>
  );
};

export default ProgramSlider;