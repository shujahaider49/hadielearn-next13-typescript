import { recentBlogs } from '@/data/blogs'
import Link from 'next/link'
import React from 'react'

const RecentBlog = () => {
  return (
    <div className=' p-10'>
    <div className='pb-10'>
            <h1 className='text-2xl text-[#1F1841] font-bold'>Recent Blogs</h1>
            <hr className="w-16 h-1 my-2 bg-[#0f3f5d] border-6 rounded" />
        </div>
    {recentBlogs.map((blog, index) => (
        <Link
          key={index}
          href="/"
          className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-lg"
        >
          <img
            className="object-fit w-full rounded-xl h-full md:h-20 md:w-36"
            src={blog.img}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-s2 text-xl font-bold tracking-tight text-[#1F1841]">
              {blog.heading}
            </h5>
            <div className='flex justify-between  font-sans '>
                <p>{blog.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RecentBlog
