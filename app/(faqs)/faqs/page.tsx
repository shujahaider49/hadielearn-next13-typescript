import React from 'react'
import Faq from './_components/faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQs - Hadi E-Learning"
}

const page = () => {
  return (
    <div>
      <Faq />
    </div>
  )
}

export default page
