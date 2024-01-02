import React from 'react'
import Dmca from './_components/dmca'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "DMCA Policy For Hadi E-Learning"
}

const page = () => {
  return (
    <div>
      <Dmca />
    </div>
  )
}

export default page
