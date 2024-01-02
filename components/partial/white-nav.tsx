"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import MobileSidebar from "../mobile-sidebar";

interface NavbarProps {
  label?: string;
  route?: string;
}

export const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about-us" },
  { label: "Programs", route: "/programs" },
  { label: "Workshops", route: "/workshops" },
  { label: "How It Works?", route: "https://hadielearning.com/how-it-works" },
  { label: "Blogs", route: "/blogs" },
];

export const sidebarLink = [
  { label: "Home", links: "/" },
  { label: "About", links: "/about-us" },
  { label: "Programs", links: "/programs" },
  { label: "Workshops", links: "/workshops" },
  { label: "How It Works?", links: "/programs" },
  { label: "Blogs", links: "/blogs" },
  { label: "Contact",links: "/contact-us" },
];

const WhiteNavbar = ({ label, route }: NavbarProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1232);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [stickyMenu, setStickyMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 90) {
          setStickyMenu(true);
        } else {
          setStickyMenu(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const navbarClasses = `sticky z-50 top-0 py-3 md:px-4 sm:px-10 text-justify  font-[sans-serif] min-h-[70px] ${
    stickyMenu ? 'bg-white shadow-xl' : 'bg-white bg-opacity-0 text-white'
  } sticky top-0`;

  return (
    <>
      <header className={navbarClasses}>
        <div className="flex flex-wrap items-center justify-between gap-5 relative">
          <div className="flex items-center md:pl-16">
            <Link href="/">
              <Image
                src={`${stickyMenu ? "/asset/hadi-logo.svg" : "/asset/white-logo.svg"}`}
                alt="logo"
                width={100}
                height={100}
                className="w-36"
              />
            </Link>
          </div>
          <div className="flex items-center lg:order-1 max-sm:ml-auto md:px-16">
            {isMobile ? (
              <>
                <Button
                  variant="hadi"
                  size="icon"
                  className="font-bold md:px-[3.7rem] px-10 rounded-xl py-6"
                >
                  Enroll
                </Button>
                <MobileSidebar />
              </>
            ) : (
              <>
                <ul className="lg:!flex sm:hidden font-bold lg:space-x-4 pr-8 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full">
                  {links.map((link, index) => (
                   <li
                   key={index}
                   className={`max-lg:border-b max-lg:py-2 px-3  hover:text-[#0f3f5d] max-lg:rounded ${
                     index === 0 ? "" : ""
                   } ${
                     index === 0 && !stickyMenu ? "text-white" : ""
                   } ${stickyMenu ? "text-[#1F1841]" : ""}`}
                 >
                      <Link href={link.route}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="/enroll/program">
                  <Button
                    variant="hadi"
                    size="lg"
                    className="font-bold px-[3.7rem] rounded-xl py-6"
                  >
                    Enroll
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default WhiteNavbar;
