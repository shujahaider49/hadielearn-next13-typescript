import Navbar from '@/components/navbar'
import Footer from '@/components/partial/footer'
import React from 'react'

const ContactLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default ContactLayout
