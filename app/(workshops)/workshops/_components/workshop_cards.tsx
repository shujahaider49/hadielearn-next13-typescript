import React from 'react';
import { MoveRight } from 'lucide-react';
import { workshopData } from '@/data/data';

const WorkshopCards = () => {
  return (
    <>
    <section className="pt-120 pb-120 ">
      <div className="container">
    <div className="flex flex-col mb-14">
            <h1 className="md:text-5xl text-center md:text-start py-4 font-bold text-[#1F1841] text-2xl">
              Free Workshops
            </h1>
            <p className="text-[#111413]  text-center md:text-start text-xl">
              Join one of our workshops to explore various digital niches and
              endless career options you can pursue for a prosperous future.
            </p>
          </div>
        <div className="md:flex flex-col">
          {workshopData.map((workshop, index) => (
            <div key={index} className="flex-shrink-0 w-full  mb-8">
              <article className="overflow-hidden md:w-[50rem] rounded-lg shadow transition hover:shadow-lg">
                <img
                  alt="Workshop"
                  src={workshop.cardImg || 'default-image-url'}
                  className="md:w-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="bg-white p-4 sm:p-6">
                  <div className="flex items-center mb-3">
                    <img
                      alt="instructor image"
                      src={workshop.avatarImg || 'instructor image'}
                      className="h-20 w-h-20 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="text-xl font-bold">{workshop.name}</p>
                      <p className="text-md">{workshop.exp}</p>
                      <p className="text-md">{workshop.date}</p>
                    </div>
                  </div>

                  <a href="#">
                    <h3 className="mt-0.5 text-3xl font-bold text-gray-900 hover:text-[#0f3f5d]">
                      {workshop.heading}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-lg text-gray-600">{workshop.para}</p>

                  <button className="flex gap-1 mt-7 hover:text-[#0f3f5d]">
                    Read More
                    <MoveRight className="hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WorkshopCards;
