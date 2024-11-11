import React from "react";

export const Hero = (): JSX.Element => {
    return (
        <div className="relative w-full min-h-[400px] md:min-h-screen max-h-[600px] ">
            <div className="w-full min-h-[400px] md:min-h-screen bg-[url(/hero.png)] bg-cover bg-center py-16">
                <div className="container mx-auto px-4 py-8 md:py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
                            <span className="text-white">
                                SECURE TODAY
                            </span>
                            <br/>
                            <span className="text-[#e4f489]">
                                INSURED FOR TOMORROW
                            </span>
                        </h1>
                        <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-[622px]">
                            We Are A Team Of Seasoned Professionals Dedicated To Providing
                            Innovative Solutions To Businesses, Leveraging Technology (it) And
                            Human Resources Expertise. Our Diverse Experience Spans Insurance,
                            Engineering, Project Management, And More.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <button className="w-full sm:w-auto bg-[#e4f489] text-black font-semibold px-6 md:px-12 py-3 md:py-4 rounded-xl tracking-wider text-sm md:text-base">
                                CONTACT US
                            </button>
                            <button className="w-full sm:w-auto bg-[#d7cfe4] text-black font-semibold px-6 md:px-12 py-3 md:py-4 rounded-xl tracking-wider text-sm md:text-base">
                                OUR PORTFOLIO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
