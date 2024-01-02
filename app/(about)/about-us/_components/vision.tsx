"use client"

import React from 'react'

const Vision = () => {
    return (
        <div className="">
            <div className="md:flex items-center max-w-screen-xl rounded-3xl bg-white mx-auto shadow-2xl text-gray-600 gap-x-12  justify-between lg:flex ">
                <div className="lg:block lg:max-w-xl">
                    <img src="/asset/vission.webp" className="md:rounded-l-3xl rounded-t-2xl" alt="vission"/>
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block px-10 top-2-">
                    <div className="max-w-2xl">
                        <h3 className="text-[#0f3f5d] text-2xl font-semibold sm:text-4xl">
                        The vision we perceived
                        </h3>
                        <p className="mt-3 max-w-xl">
                        ❝Hadi E-learning is an online IT training program that aims to uplift Pakistani youth through structured free IT training. Hadi’s motto is to enhance IT skills in youth so that they can become financially independent and contribute towards better economic conditions in the country.❞
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
