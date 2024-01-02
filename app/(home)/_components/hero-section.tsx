"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";

const slidersContent = [
  {
    title1: "Hadi E-Learning",
    title2: "providing you",
    typewriterWords: ["Free IT", "Training"],
    description: "Transform your future with free IT Training.",
    imageSrc: "/asset/hero/hero1.svg",
  },
  {
    title1: "Hadi E-Learning",
    title2: "providing you",
    typewriterWords: ["Skills", "Quality"],
    description: "Elevate your skill set with training in futuristic fields.",
    imageSrc: "/asset/hero/hero2.png",
  },
  {
    title1: "Hadi E-Learning",
    title2: "providing you",
    typewriterWords: ["Opportunities"],
    description: "Elevate your skill set with training in futuristic fields.",
    imageSrc: "/asset/hero/hadi3.png",
  },
];

const HeroSection: React.FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <img
        src="/asset/bg-gird1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div>
        <Slider {...settings}>
          {slidersContent.map((content, index) => (
            <div
              key={index}
              className="py-24 relative"
              style={{ fontFamily: "'Kalnia', serif" }}
            >
              <div className="md:max-w-screen-xl mx-auto text-gray-600 md:gap-x-12 items-center md:justify-between justify-center overflow-hidden md:flex md:px-8 relative z-10">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                  <Fade direction="up">
                    <h2 className="text-4xl text-gray-800 md:text-6xl font-bold">
                      {content.title1} <br /> {content.title2}
                    </h2>
                    <h2 className="text-4xl text-[#0f3f5d] font-extrabold md:text-5xl">
                      <Typewriter
                        words={content.typewriterWords}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1500}
                      />
                    </h2>
                    <p className="text-xl text-black">{content.description}</p>
                  </Fade>
                  <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-8">
                    <Button
                      variant="ghost"
                      className="border border-[#0f3f5d] rounded-lg px-10 py-6 text-[#0f3f5d] font-bold text-xl"
                      size="lg"
                    >
                      About us
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-[#0f3f5d] to-[#31af98] rounded-lg md:px-10 py-6 font-bold text-xl"
                      size="lg"
                    >
                      Programs
                      <MoveRight className="pl-2" />
                    </Button>
                  </div>
                </div>
                <div className="flex-none mt-12 md:-mt-7 md:mr-20 md:max-w-xl">
                  <Zoom cascade>
                    <Image
                      src={content.imageSrc}
                      alt="Hero"
                      height={500}
                      width={500}
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
