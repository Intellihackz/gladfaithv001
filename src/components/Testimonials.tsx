import React from 'react'

export const Testimonials = (): JSX.Element => {
  return (
    <div className="w-full bg-[#2c2e3c]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <p className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          <span className="text-white tracking-[2.50px]">Our </span>
          <span className="text-[#e4f489] tracking-[2.50px]">Testimonials</span>
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="w-full md:flex-1 relative">
            <div className="bg-[#223850] rounded-lg p-6 md:p-8 pt-16">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#d9d9d9]">
                  <img 
                    className="w-full h-full object-cover"
                    src="/testimonial1.jpg" 
                    alt="Olivia Cole"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-4 tracking-widest text-white">
                OLIVIA COLE
              </h3>
              <p className="text-sm md:text-base text-white text-center leading-6 md:leading-7">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full md:flex-1 relative">
            <div className="bg-[#223850] rounded-lg p-6 md:p-8 pt-16">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#d9d9d9]">
                  <img 
                    className="w-full h-full object-cover"
                    src="/testimonial2.jpg"
                    alt="Evan White"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-4 tracking-widest text-white">
                EVAN WHITE
              </h3>
              <p className="text-sm md:text-base text-white text-center leading-6 md:leading-7">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full md:flex-1 relative">
            <div className="bg-[#223850] rounded-lg p-6 md:p-8 pt-16">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#d9d9d9]">
                  <img 
                    className="w-full h-full object-cover"
                    src="/testimonial3.jpg"
                    alt="Jessica Page"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-4 tracking-widest text-white">
                JESSICA PAGE
              </h3>
              <p className="text-sm md:text-base text-white text-center leading-6 md:leading-7">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
