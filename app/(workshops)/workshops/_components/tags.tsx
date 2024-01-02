"use client"

import React, { useEffect, useState } from "react";

const Tags = () => {
  const popTag = [
    {
      t: "DigitalSkillsWorkshops",
    },
    {
      t: "TechTraining",
    },
    {
      t: "DigitalLiteracy",
    },
    {
      t: "TechForAll",
    },
    {
      t: "DigitalEmpowerment",
    },
    {
      t: "Digitallnclusion",
    },
    {
      t: "DigitalTransformation",
    },
    {
      t: "TechSkillsForAll",
    },
    {
      t: "FutureOfWork",
    },
    {
      t: "BridgingTheDigitalDivide",
    },
  ];

  const [showTags, setShowTags] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowTags(screenWidth < 758 || screenWidth > 1274);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showTags && (
        <div className="mb-10">
          <p className="text-4xl text-center md:text-start font-bold text-[#1F1841] line">
            Popular Tags
          </p>
        </div>
      )}
      {showTags && (
        <div className="grid grid-cols-2 gap-x-9 gap-y-3">
          {popTag.map((tags, index) => (
            <div key={index}>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-bold  ring-1 ring-inset ring-gray-500/10 hover:bg-[#1F1841] hover:text-white transition-all duration-300">
                {tags.t}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Tags;
