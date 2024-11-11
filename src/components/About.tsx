import React from "react";

export const About = (): JSX.Element => {
  return (
    <div className="w-full bg-[#2c2e3c] relative overflow-hidden">
      {/* Gradient Circle */}
      <div 
        className="absolute hidden md:block -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, #ec5e2a 0%, transparent 60%)'
        }}
      />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:flex-1">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="Our Mission"
              src="/mission.png"
            />
          </div>

          <div className="w-full md:flex-1">
            <p className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
              <span className="text-white tracking-[2.50px]">OUR </span>
              <span className="text-[#e4f489] tracking-[2.50px]">MISSION</span>
            </p>

            <p className="text-lg md:text-2xl font-light text-white text-center tracking-[1.8px] md:tracking-[2.30px] leading-[35px] md:leading-[50.5px] mb-6 md:mb-8">
              To Deliver Tailored Solutions, Harnessing Technology And Human
              Resources Expertise, Empowering Businesses To Thrive.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#e4f489] text-black font-semibold px-6 md:px-8 py-3 rounded-xl tracking-wider text-sm md:text-base">
                CONTACT US
              </button>
              <button className="bg-[#d7cfe4] text-black font-semibold px-6 md:px-8 py-3 rounded-xl tracking-wider text-sm md:text-base">
                VIEW OUR PORTFOLIO
              </button>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:flex-1">
            <p className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
              <span className="text-white tracking-[2.50px]">OUR </span>
              <span className="text-[#e4f489] tracking-[2.50px]">STRENGTH</span>
            </p>

            <p className="text-lg md:text-2xl font-light text-white text-center tracking-[1.8px] md:tracking-[2.30px] leading-[35px] md:leading-[50.5px]">
              · Combined Expertise In It, Insurance,
              <br />· Engineering, And Project Management
              <br />· Proven Track Records In Respective Fields
              <br />· Customer-centric Approach
              <br />· Innovative Problem-solving
              <br />· Collaborative Teamwork
            </p>
          </div>

          <div className="w-full md:flex-1">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="Our Strengths"
              src="/strengths.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
