"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProgramHero = () => {
  return (
    <div>
      <img
        src="/asset/bg-gird1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-50"
      />
      <Fade direction="up">
        <section className="max-w-6xl mt-12 mx-auto px-4 md:px-8">
          <div className="space-y-3 text-center">
            <h3 className="text-4xl text-[#0f3f5d] font-bold">
              Programs to level up your digital skills
            </h3>
            <p className="text-black md:px-36 pt-4 text-md italic font-sans">
              We have got all your digital skill training needs covered with our
              extensive offered program list. All you have to do is to explore
              our program list, choose the program of your choice, and take your
              first step toward financial independence.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              variant="hadi"
              size="sm"
              className="font-sans py-1.5 mr-5 text-md font-thin"
            >
              Enroll Now
            </Button>
            <div className="flex items-center text-gray-400 border border-[#0f3f5d] rounded-md">
              <div className="px-2 py-2 bg-[#0f3f5d] ">
                <Search color="white" className="font-bold" size={18} />
              </div>
              <input
                type="text"
                placeholder="search course here"
                id=""
                className="w-full p-1 pr-60 ml-2 bg-white text-black font-sans outline-none"
              />
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default ProgramHero;
