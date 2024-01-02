"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const GetToKnow: React.FC = () => {
  return (
    <div className="bg-[#8080801c] py-20 font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center gap-16 max-w-7xl max-md:max-w-md mx-auto">
        <Fade direction="left">
          <div className="md:h-[800px]">
            <img
              src="/asset/get_to_know.png"
              className="w-full h-full object-contain"
              alt="Get To Know logo"
            />
          </div>
        </Fade>

        <Fade direction="right">
          <div
            className="max-md:text-left md:text-center"
            style={{ fontFamily: "'Kalnia', serif" }}
          >
            <h3 className="md:text-5xl font-bold text-[#1F1841] text-2xl text-start md:leading-10">
              Get to know Hadi
            </h3>
            <p className="mt-6 text-lg max-w-lg font-sans text-justify">
              Meet our mascot, Hadi. Hadi is your digital leader and will lead
              you through specially structured computer short courses that will
              not only enhance your IT skills but will also help you navigate
              efficiency through your career path. <br /> Hadi’s mission is to
              empower the country's youth with the strength of modern skills so
              they can have equal opportunities to excel in their careers as
              anyone else in the world. <br /> So join hands with Hadi today,
              and unlock the door to many shiny prospects in this modern digital
              world.
            </p>

            <div className="flex justify-start">
              <Button
                size="lg"
                variant="hadi"
                className="px-6 py-6 mt-8 font-sans font-bold rounded-lg text-md"
              >
                Get To Know Hadi Better
                <MoveRight className="pl-2" />
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GetToKnow;
