import React from 'react'
import BlogsBreadcrumbs from './_components/blogs-breadcrumbs'
import BlogsCards from './_components/blogs-card'
import Category from './_components/category'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Some interesting blogs to know more about Hadi E-Learning.",
};

const page = () => {
  return (
    <div>
      <BlogsBreadcrumbs />
      <div className='md:flex justify-evenly container md:gap-x-20'>
        <BlogsCards />
          <Category />
      </div>
    </div>
  )
}

export default page
