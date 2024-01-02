"use client"

import React from 'react'
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick'

const Testimonials: React.FC = () => {
    const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    fade: false,
    arrows: false,
  };
  const testimonialData = [
    {
      id: 1,
      name: "Alizah Jamal",
      content:
        "The 2-month graphic designing course has been amazing so far! I've gained a ton of new knowledge and the instructor is super helpful and supportive. It's been a fantastic experience!",
    },
    {
      id: 2,
      name: "Owais Khanzada",
      content:
        "Experience is amazing, being at Karachi and connecting with Hadi e learning was super smooth, and the mentor Ms Zahra Mohsin she's got immense knowledge regarding SEO , her friendly and cooperative nature makes it even more simple and easier to understand, highly recommended ☺️",
    },
    {
      id: 3,
      name: "Ubaid Ali",
      content:
        "I've been learning React JS through Hadi E-learning, and I can't express how grateful I am for the experience. The way they present complex concepts with simplicity and clarity is truly commendable. The examples they provide are not only relevant but also incredibly helpful in solidifying my understanding. Thanks to their efforts, I've gained a new level of confidence in my React skills.",
    },

    {
      id: 4,
      name: "Ayesha Hafeez",
      content:
        "I really want to appreciate Hadi eLearning platform because they provide high quality education in their classes. Currently, i am enroll in Seo course and the instructor explain everything very well. It's a best platform to learn and grow.",
    },

    {
      id: 5,
      name: "M. Zain Hassan Sabri",
      content:
        "Hadi E-Learning is a great platform for students who wants to learn new things while sitting at home and the tutors are much better than any other institute. They make sure you learn everything and teaches you in the best way possible.",
    },

    {
      id: 6,
      name: "Jannat Awan",
      content:
        "I recently had the opportunity to enroll in the Hadi E-learning Free WordPress Course, and I must say it exceeded my expectations. The course content was comprehensive and well-structured, making it easy for beginners like me to grasp the fundamentals of WordPress.",
    },
  ];
  return (
    <>
     <section className="w-full h-full pb-8 text-white" style={{ backgroundImage: "linear-gradient(329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)" }}>
  <div className="container">
  <div className="md:flex flex-col pt-10 gap-y-3">
      <span className="text-xl font-bold">Testimonials</span>
      <Fade direction='up'>
      <h2 className="text-5xl font-bold mb-8">What students are saying</h2>
      </Fade>
    </div>
    <div className="mb-10">
      <div className="">
        <Slider className="testimonial_slider" {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="">
              <div className="md:flex md:justify-between items-center md:space-y-24 space-y-16">
                <Fade direction='up'>
                  <div className="">
                    <p className="text-justify p-2 md:mr-20 leading-7 text-lg">
                      {testimonial.content}
                    </p>
                    <div className="flex pt-8 font-bold">
                        <img src="/asset/quote.png" alt="quote" />
                        <h3 className="text-3xl pl-5">{testimonial.name}</h3>
                    </div>
                  </div>
                  </Fade>
                  <img src="/asset/testimonial.png" alt="testimonial" className='md:mr-48 shadow-inner' />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default Testimonials
