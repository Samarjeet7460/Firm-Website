import React from 'react';

const About = () => {
  return (
      <div className="min-h-screen" id='about'>
        {/* Header Section */}
        <div className="text-black py-16 mb-12 mt-10">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-6 pb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Desktop & Tablet Layout: Image Left, Text Right */}
            {/* Mobile Layout: Image Top, Text Bottom */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <div className="p-8 lg:p-12 flex justify-center items-center h-full">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                    alt="TECHNO MECH Manufacturing Facility"
                    className="w-full max-w-md lg:max-w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    id="sideImg"
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:w-1/2 w-full">
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Our Story
                    </h2>
                    <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                  </div>

                  <div className="space-y-6 text-justify">
                    <p className='text-gray-700 leading-relaxed text-lg'>
                      <span className='font-semibold text-amber-600'>TECHNO MECH</span> was established in 1998 by Mr. Tarlochan Singh & Mr. Gurpreet Singh. The company is involved in the manufacture of complete Hot Steel Rolling Mills and its allied machinery.
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
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;