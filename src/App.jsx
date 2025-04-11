import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import SkillsTools from './components/SkillsTools';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header  />
      <main>
        <Hero />
        <About />
        <Portfolio />
        {/* <CaseStudies /> */}
        <SkillsTools />
        <Contact />
      </main>
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold tracking-tight">
                K.GEEGRAPHIKS<span className="text-indigo-600">.</span>
              </a>
              <p className="text-gray-600 mt-2">© 2025 All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Portfolio</a>
              {/* <a href="#case-studies" className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Case Studies</a> */}
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Contact</a>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-arrow-up text-gray-600"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
