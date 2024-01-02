import React from "react";
import Breadcrumbs from "./_components/breadcrumbs";
import WorkshopCards from "./_components/workshop_cards";
import Tags from "./_components/tags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join our workshop to get the most out of web based learning",
};

const page = () => {
  return (
    <div>
      <Breadcrumbs />
      <div>
        <div className="container mb-14 md:flex md:justify-between ">
          <div className="md:flex flex-col">
            {/* <h1 className="md:text-5xl text-center md:text-start py-4 font-bold text-[#1F1841] text-2xl">
              Free Workshops
            </h1>
            <p className="text-[#111413]  text-center md:text-start text-xl">
              Join one of our workshops to explore various digital niches and
              endless career options you can pursue for a prosperous future.
            </p> */}
            <div>
            <WorkshopCards />
            </div>
          </div>
          <div className="mt-4 ">
            <Tags />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default page;
