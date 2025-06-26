import React from 'react'
import sideimg from "../assets/sideimg.webp"

function About() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4'>
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='flex flex-col sm:flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
          {/* Image Section */}
          <div className='order-2 sm:order-1 lg:order-1 w-full sm:w-1/2 lg:w-full'>
            <img src={sideimg} alt="side image" className='rounded-xl'/>
          </div>

          {/* Content Section */}
          <div className='order-1 sm:order-2 lg:order-2 w-full sm:w-1/2 lg:w-full space-y-6'>
            <div className='space-y-6 text-justify'>
              <p className='text-gray-700 leading-relaxed text-lg'>
                <span className='font-semibold text-blue-600'>TECHNO MECH</span> was established in 1998 by Mr. Tarlochan Singh & Mr. Gurpreet Singh. The company is involved in the manufacture of complete Hot Steel Rolling Mills and its allied machinery.
              </p>

              <p className='text-gray-700 leading-relaxed text-lg'>
                Our manufacturing unit is a systematic Engineering Company with latest machines and well equipped workplace. We have the best Production and technical staff in the industry with over a decade experience. Drawings are prepared before we start a project which are studied by our engineers.
              </p>

              <p className='text-gray-700 leading-relaxed text-lg'>
                We provide consultancy to re-arrange / modify your existing Steel Plant and suggest the modifications required for the best output of your plant. The unique design of our Steel Rolling Mill Plants helps you to produce different items from one plant just by changing one set of Rolls.
              </p>

              <p className='text-gray-700 leading-relaxed text-lg'>
                We have supplied Steel Rolling Mills / Machinery to almost every part of India and even overseas. As per customer requirements, we can design and manufacture fully automatic and semi-automatic rolling production lines with yearly capacity from 10,000 MT to 500,000 MT.
              </p>

              <p className='text-gray-700 leading-relaxed text-lg'>
                Techno Mech believes in enduring partnerships with every customer, so that relationships grow stronger with mutual success. The loyalty and repeat orders by our clientele has made us strive for higher goals.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='mt-20 pt-16 border-t border-gray-200'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12'>
            {/* Our Strengths */}
            <div className='group w-[400px] h-[400px]'>
              <div className='relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                <div className='relative'>
                  <div className='flex items-center mb-6'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-800'>Our Strengths</h2>
                  </div>
                  
                  <div className='space-y-3'>
                    {[
                      'Customer centric approach',
                      'Competitive pricing',
                      'Quality assured products',
                      'Time bound delivery',
                      'Wide distribution network'
                    ].map((strength, index) => (
                      <div key={index} className='flex items-center'>
                        <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3'></div>
                        <span className='text-gray-700'>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className='group w-[400px] h-[400px]'>
              <div className='relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                <div className='relative'>
                  <div className='flex items-center mb-6'>
                    <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                      </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-800'>Vision & Mission</h2>
                  </div>
                  
                  <p className='text-gray-700 leading-relaxed'>
                    To be among the Top Global Suppliers of Cost effective turnkey solutions for Rolling Mills / Allied Machinery through implementation of world class technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats or Info Section */}
        <div className='mt-16 bg-black rounded-2xl p-8 text-white'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold mb-2'>25+</div>
              <div className='text-blue-100'>Years of Experience</div>
            </div>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold mb-2'>500K MT</div>
              <div className='text-blue-100'>Production Capacity</div>
            </div>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold mb-2'>ISO:9002</div>
              <div className='text-blue-100'>Quality Standards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About