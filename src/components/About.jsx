import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A passionate UI/UX Designer and Web Developer dedicated to creating meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full h-[500px]">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 rounded-full opacity-50"></div>
                
                {/* Profile Image Container */}
                <div className="relative z-10 w-full h-full">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-20 blur-xl"></div> */}
                  <img
                    src="https://avatars.githubusercontent.com/u/132741271?v=4"
                    alt="Your Profile"
                    className="relative z-20 w-full h-full object-cover shadow-md filter grayscale brightness-110 contrast-110"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Who I Am</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I'm a creative professional with a passion for design and user experience. With a keen eye for detail and a love for clean, functional design, I help businesses create digital experiences that resonate with their audience.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    My approach combines artistic sensibility with technical expertise, ensuring that every project not only looks great but also delivers results. As a web developer, I bring both design vision and technical implementation skills to create seamless, high-performing digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 