import React from "react";

export const Services = (): JSX.Element => {
  return (
    <div className="w-full bg-[#2c2e3c]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">
            <span className="text-white tracking-[2.50px]">What </span>
            <span className="text-[#e4f489] tracking-[2.50px]">we Offer</span>
          </p>

          <p className="text-xl md:text-4xl font-light text-white tracking-[1.8px] md:tracking-[2.30px] leading-[45px] md:leading-[75.5px]">
            - It Consulting And Solutions
            <br />- Insurance Advisory Services
            <br />- Project Management
            <br />- Business Strategy Development
            <br />- Human Resources Consulting
            <br />- Digital Transformation
          </p>
        </div>
      </div>
    </div>
  );
};
