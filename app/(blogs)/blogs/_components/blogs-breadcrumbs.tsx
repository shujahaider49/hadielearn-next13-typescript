import Link from 'next/link'
import React from 'react'

const BlogsBreadcrumbs = () => {
  return (
<div className="relative bg-gradient-to-r from-teal-900 to-teal-700 py-44 -top-24">
      <div className="absolute inset-0 opacity-30 ">
        <img src="/asset/bread.jpg" alt="Background Image" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 z-10 align-text-bottom -bottom-20 text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">Blogs</h1>
        <div className="flex gap-2">
        <span className="text-lg md:text-xl mb-8"> <Link href="/">Home </Link> </span>
        <p className="text-lg md:text-xl mb-8">| All Blogs</p>
        </div>
        
      </div>
    </div>
  )
}

export default BlogsBreadcrumbs
