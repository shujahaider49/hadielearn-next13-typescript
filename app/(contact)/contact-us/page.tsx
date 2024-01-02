import React from 'react'
import ContactUsForm from './_components/contact-us-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Hadi E-Learning"
}

const page = () => {
  return (
    <div>
      <ContactUsForm />
    </div>
  )
}

export default page
