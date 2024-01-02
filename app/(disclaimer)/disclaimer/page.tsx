import React from 'react'
import Disc from './_components/disc'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Disclaimer - Hadi E-Learning"
}

const page = () => {
  return (
    <div>
      <Disc />
    </div>
  )
}

export default page
