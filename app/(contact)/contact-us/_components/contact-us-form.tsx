import { Button } from "@/components/ui/button";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="md:flex items-center justify-center h-screen relative">
      <div className="-z-10 absolute w-full h-full">
        <iframe
          className="w-full h-full"
          title="contact"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Faisal plaza, civic center, Lahore, Punjab&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="bg-white md:flex justify-between md:max-w-7xl md:w-screen p-8 py-16 md:px-16 shadow-lg">
        <div className="md:mr-10 text-start">
          <h2 className="text-3xl font-bold text-[#1F1841] mb-4">Get in touch</h2>
          <ul className="font-sans leading-loose">
            <li>
              <h4 className="font-bold text-[#1F1841]">Address</h4>
              <p className="mb-4 font-sans">Hadi E-Learning, Civic Center, Faisal Town Lahore.</p>
            </li>
            <li>
              <h4 className="font-bold text-[#1F1841]">Call us</h4>
              <p className="mb-4 font-sans">
                <a href="tel:03-1111-93339">03-1111-93339</a>
              </p>
            </li>
            <li>
              <h4 className="font-bold text-[#1F1841]">Email Address</h4>
              <p className="mb-4 font-sans">
                <a href="mailto:info@hadielearning.com">
                  info@hadielearning.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <form className="flex flex-col gap-y-3 font-sans text-black">
            <input
              type="text"
              required
              placeholder="Your Name"
              name="name"
              className="bg-gray-100 mb-3 rounded-lg p-3 md:w-[42rem]  focus:outline-blue-200 focus:bg-white placeholder:text-black"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              name="email"
              className="bg-gray-100 mb-3 rounded-lg p-3 focus:outline-blue-200 focus:bg-white placeholder:text-black"
            />
            <textarea
              required
              placeholder="Your Message"
              name="message"
              className="bg-gray-100 mb-3 rounded-lg p-3 h-40 focus:outline-blue-200 focus:bg-white placeholder:text-black"
            ></textarea>
            <div>
            
            <Button
              type="submit"
              variant="hadi"
              className="font-sans font-bold block"
            >
              Send Message
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
