"use client"

import CountUp from "react-countup"

export default () => {

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-col items-center justify-center gap-x-20 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-40">
                        
                            <div className="text-center">
                                <h4 className="text-6xl text-[#0F3F5D] font-semibold">
                                    <CountUp start={0} duration={8} end={500} /> +
                                </h4>
                                <p className="mt-3 text-lg text-gray-600 font-medium">Live Classes</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-6xl text-[#18594D] font-semibold">
                                    <CountUp start={0} duration={8} end={10000} /> +
                                </h4>
                                <p className="mt-3 text-lg text-gray-600 font-medium">Enrolled Students</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-6xl text-[#0F3F5D] font-semibold">
                                    <CountUp start={0} duration={8} end={800} /> +
                                </h4>
                                <p className="mt-3 text-lg text-gray-600 font-medium">Students On Waitlist</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-6xl text-[#18594D] font-semibold">
                                    <CountUp start={0} duration={8} end={11000} /> +
                                </h4>
                                <p className="mt-3 text-lg text-gray-600 font-medium">Queries Answered</p>
                            </div>
                    
                </ul>
            </div>
        </section>
    )
}