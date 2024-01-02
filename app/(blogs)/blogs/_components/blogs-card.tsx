import React from 'react'
import {blogsData} from '../../../../data/blogs'
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
const BlogsCards = () => {
  return (
    <div className=''>
    
    {blogsData.map((blog, index) => (
        <Link
          key={index}
          href="/"
          className="flex flex-col items-center bg-white rounded-lg shadow-xl my-2 md:flex-row md:max-w-3xl hover:-translate-y-2 transition-all duration-500"
        >
          <img
            className="object-fit w-full rounded-t-lg h-full md:h-32 md:w-60 hover:scale-110 transition-all duration-300 md:rounded-none md:rounded-s-lg"
            src={blog.img}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-s2 text-2xl font-bold tracking-tight text-[#1F1841]">
              {blog.heading}
            </h5>
            <p className="mb-3 font-sans font-normal text-gray-700 dark:text-gray-400">
              {blog.para}
            </p>
            <div className='flex justify-between text-[#0F3F5D] font-bold text-lg'>
                <p>{blog.views}</p>
                <div className='flex justify-around'>
                <CalendarDays size={18} className='mt-1 text-white' fill='#0F3F5D' />
                <p>{blog.date}</p>
                </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
);
};

export default BlogsCards
