"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterNavItem {
  href?: string;
  name?: string;
  email?: string;
  number?: string;
  address?: string;
}

interface FooterNavSection {
  label: string;
  items: FooterNavItem[];
}

const Footer: React.FC = () => {
  const footerNavs: FooterNavSection[] = [
    {
      label: "Menu",
      items: [
        { href: "/about-us", name: "About" },
        { href: "/programs", name: "Programs" },
        { href: "/workshops", name: "Workshops" },
        { href: "/", name: "How it Works ?" },
        { href: "/contact-us", name: "Contact" },
        { href: "/blogs", name: "Blogs" },
        { href: "/faqs", name: "FAQs" },
      ],
    },
    {
      label: "Terms",
      items: [
        { href: "/privacy-&-policy", name: "Privacy & Policy" },
        { href: "/disclaimer", name: "Disclaimer" },
        { href: "/dmca-policy", name: "DMCA" },
        { href: "/terms-and-condition", name: "Terms and Conditions" },
      ],
    },
    {
      label: "Contact",
      items: [
        { email: "info@hadielearning.com" },
        { number: "03-1111-93339" },
        { address: "Hadi E-Learning, Civic Center, Faisal Town Lahore." },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#8080801c] mt-20">
      <div className="container py-3">
        <div className="grid grid-cols-1">
          <div className="relative py-12">
            <div className="relative w-full">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="md:col-span-3 flex md:justify-center md:items-center md:pl-10">
                  <Link href="#">
                    <Image
                      src="/asset/footer_logo.png"
                      alt="Hadi logo"
                      height={180}
                      width={180}
                      className="w-42"
                    />
                  </Link>
                </div>
                <div className="md:col-span-9 margin-left">
                  <div className="md:flex md:flex-wrap md:justify-between mt-5 md:pl-44 md:mt-0">
                    {footerNavs.map((nav, index) => (
                      <div key={nav.label} className="w-full md:w-1/3 mt-8 md:mt-0">
                        <ul className="list-none text-start">
                          <h4 className="text-[#1f1841] text-2xl font-bold">
                            {nav.label}
                          </h4>
                          {nav.items.map((item, itemIndex) => (
                            <>
                              <li key={itemIndex} className="mt-2">
                                {item.href ? (
                                  <Link
                                    href={item.href}
                                    className="btn-link text-[#111413] font-medium text-lg hover:text-[#0f3f5d] after:bg-[#0f3f5d] duration-500 ease-in-out"
                                  >
                                    {item.name}
                                  </Link>
                                ) : null}
                                {item.email ? (
                                  <div className="text-[#0f3f5d] font-bold flex">
                                    {" "}
                                    <Mail className="pr-1" /> {`${item.email}`}
                                  </div>
                                ) : null}
                                {item.number ? (
                                  <p className="text-[#0f3f5d] font-bold flex">
                                    {" "}
                                    <Phone className="pr-1" />{" "}
                                    {` ${item.number}`}
                                  </p>
                                ) : null}
                                {item.address ? (
                                  <p className="text-[#0f3f5d] font-bold flex">
                                    {" "}
                                    <MapPin className="pr-1" />{" "}
                                    {` ${item.address}`}
                                  </p>
                                ) : null}
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex md:justify-end mr-36 pt-10 gap-x-5 gap-y-2 cursor-pointer">
                    <Facebook
                      size={30}
                      className="hover:bg-[#0f3f5d] py-2 rounded-lg hover:fill-white transition-all duration-300 fill-black"
                    />
                    <Instagram
                      size={30}
                      className="hover:bg-[#0f3f5d]  py-2 rounded-lg hover:fill-white transition-all duration-300"
                    />
                    <Linkedin
                      size={30}
                      className="hover:bg-[#0f3f5d] py-2 rounded-lg hover:fill-white transition-all duration-300 fill-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] px-0 border-t border-gray-300 dark:border-gray-300 ">
        <div className="container text-center">
          <div className="grid  items-center gap-6">
            <div className="flex justify-center text-center">
              <p className="mb-0 text-black font-medium">
                Copyright ©
                <Link href="/auth/login" className="mx-1 text-md text-black font-bold">
                  Hadi eLearning |{" "}
                </Link>
              </p>
              <p className="mb-0 text-black font-medium">
                Developed by
                <Link href="/" className="mx-1 text-md text-black font-bold">
                  Cycarts
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
