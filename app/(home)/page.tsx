import Stats from "@/components/partial/stats";
import HeroSection from "./_components/hero-section";
import GetoToKnow from "./_components/get-to-know";
import Workshop from "./_components/workshop";
import Testimonials from "@/components/partial/testimonials";
import { Metadata } from "next";
import OurPartners from "./_components/our-partners";
import ProgramSlider from "@/components/partial/programSlider";

export const metadata: Metadata = {
  title: "Hadi E-Learning - An excellent online learning platform",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="pt-20">
        <Stats />
      </div>

      <div className="pt-20">
        <GetoToKnow />
      </div>

      <div className="pt-20">
        <div className="container md:pl-24 mb-14">
          <h1 className="md:text-5xl text-center md:text-start py-4 font-bold text-[#1F1841] text-2xl">
          Programs Hadi is offering
          </h1>
          <p className="text-[#111413] text-center md:text-start text-xl">
          We invite you to explore our courses and discover the many benefits of Hadi E-Learning.
          </p>
        </div>
        <ProgramSlider />
      </div>

      <div className="pt-20">
        <Workshop />
      </div>

      <div className="pt-20">
        <Testimonials />
      </div>

      <div className="pt-20">
        <OurPartners />
      </div>
    </main>
  );
}
