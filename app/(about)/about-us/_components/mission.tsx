"use client"

import React from 'react'

const Mission = () => {
    return (
        <div className="">
            <div className="md:flex items-center max-w-screen-xl bg-white mx-auto shadow-2xl text-gray-600 gap-x-12  justify-between lg:flex ">
                <div className="lg:block lg:max-w-xl">
                    <img src="/asset/mission.webp" className="md:rounded-l-3xl rounded-t-2xl" alt="mission"/>
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block px-10 top-2-">
                    <div className="max-w-2xl">
                        <h3 className="text-[#0f3f5d] text-2xl font-semibold sm:text-4xl">
                        The mission we are on
                        </h3>
                        <p className="mt-3 max-w-xl">
                        ❝The mission of Hadi E-Learning is to empower the youth with the treasure of technical knowledge. We want our talented youth to excel in this digital age and set higher benchmarks for themselves. We aim and strive to create opportunities for them so they don't have to stop on their road to success due to hurdles like fewer or no opportunities.❞
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission
