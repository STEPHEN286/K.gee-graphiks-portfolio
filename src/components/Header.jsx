import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faLinkedinIn, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from '../data/links';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold tracking-tight">
              K.GEEGRAPHIKS<span className="text-indigo-600">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                title={link.title}
              >
                {link.icon === 'faGlobe' ? (
                  <FontAwesomeIcon icon={faGlobe} className="text-xl" />
                ) : link.icon === 'faBehance' ? (
                  <FontAwesomeIcon icon={faBehance} className="text-xl" />
                ) : link.icon === 'faLinkedinIn' ? (
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                ) : link.icon === 'faTiktok' ? (
                  <FontAwesomeIcon icon={faTiktok} className="text-xl" />
                ) : link.icon === 'faWhatsapp' ? (
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                ) : null}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="text-2xl font-bold tracking-tight">
                K.GEEGRAPHIKS<span className="text-indigo-600">.</span>
              </a>
              <button
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 text-xl"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-gray-900 text-xl"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 text-xl"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>

            <div className="mt-auto flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  title={link.title}
                >
                  {link.icon === 'faGlobe' ? (
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
                  ) : link.icon === 'faBehance' ? (
                    <FontAwesomeIcon icon={faBehance} className="text-2xl" />
                  ) : link.icon === 'faLinkedinIn' ? (
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                  ) : link.icon === 'faTiktok' ? (
                    <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
                  ) : link.icon === 'faWhatsapp' ? (
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 