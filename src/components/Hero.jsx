import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faLinkedinIn, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from '../data/links';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div> */}

      <div className="absolute inset-0 ">
      <div className="absolute inset-0 bg-black/70"></div>
      <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover`}
          >
            <source src="https://videocdn.cdnpk.net/videos/bb85411f-f420-4008-8833-b4c38898c0bd/horizontal/previews/clear/large.mp4?token=exp=1744373455~hmac=5bb451aa831ee2d775ea2784ad11362f4604c76276d2e60bdf8dd8d618b809cf" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>


      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 mt-30 mb-15 ">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white">
            Crafting <span className="text-indigo-400">Digital</span> Experiences & <span className="text-indigo-400">Visual</span> Identities
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
            UI/UX Designer and Visual Artist specializing in clean, functional design solutions that elevate brands and enhance user experiences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="#portfolio" 
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 !rounded-button whitespace-nowrap cursor-pointer text-center"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors !rounded-button whitespace-nowrap cursor-pointer text-center"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="mt-8 sm:mt-12 flex space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-indigo-400 transition-colors"
                title={social.title}
              >
                <FontAwesomeIcon 
                  icon={social.icon === 'globe' ? faGlobe : 
                        social.icon === 'whatsapp' ? faWhatsapp :
                        social.icon === 'behance' ? faBehance :
                        social.icon === 'tiktok' ? faTiktok :
                        faLinkedinIn} 
                  className="w-6 h-6" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    
    </section>
  );
};

export default Hero; 