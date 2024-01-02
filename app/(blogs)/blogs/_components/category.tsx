import { ChevronRight, Search } from 'lucide-react'
import React from 'react'
import MostViewBlog from './most-view-blog'
import RecentBlog from './recent-blog'

const Category = () => {
    const Categories = [
        {tag: "AutoCAD"},
        {tag: "Development"},
        {tag: "Freelancing"},
        {tag: "Designing"},
        {tag: "Marketing"},
        {tag: "Digital Marketing"},
        {tag: "Hashing"},
        {tag: "Cyber Security"},
        {tag: "Self Employed"},
    ]
  return (
    <div className=''>
      <form className="max-w-1xl px-4 mx-auto mt-12">
      <div className="relative ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 pl-4 pr-36 text-black bg-gray-100  rounded-lg outline-none"
        />
        <Search className="absolute top-0 bottom-0 my-auto text-[#0f3f5d] right-3 hover:cursor-pointer" size={20} />
      </div>
    </form>

    <div className='container mt-10'>
        <div className='pb-10'>
            <h1 className='text-2xl text-[#1F1841] font-bold'>Categories</h1>
            <hr className="w-16 h-1 my-2 bg-[#0f3f5d] border-6 rounded" />
        </div>
        {Categories.map((category, id) => (
            <div key={id} className='flex py-2 font-sans cursor-pointer hover:text-[#0f3f5d]'>
                <ChevronRight strokeWidth={1} size={20} className='hover:translate-x-1 transition duration-300' />
                <p>{category.tag}</p>
            </div>
        ))}
    </div>
    <div>
      <MostViewBlog />
      <RecentBlog />
    </div>
    </div>
  )
}

export default Category
