import React from 'react'
import Policy from './_components/policy'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy & Policy - Hadi E-Learning",
  };

const page = () => {
  return (
    <div>
      <Policy />
    </div>
  )
}

export default page
