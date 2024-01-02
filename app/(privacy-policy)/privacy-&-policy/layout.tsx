import Navbar from '@/components/navbar'
import Footer from '@/components/partial/footer'
import React from 'react'

const PolicyLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PolicyLayout
