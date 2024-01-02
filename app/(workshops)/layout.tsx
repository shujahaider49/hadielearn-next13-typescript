import Footer from '@/components/partial/footer'
import WhiteNavbar from '@/components/partial/white-nav'
import React from 'react'

const AboutLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <WhiteNavbar />
      {children}
      <Footer />
    </div>
  )
}

export default AboutLayout