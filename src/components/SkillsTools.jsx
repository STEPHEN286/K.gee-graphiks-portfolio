import React from 'react';

const SkillsTools = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The technologies and methodologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Design Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">UI/UX Design</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Visual Design</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Brand Identity</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Interaction Design</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Prototyping</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fab fa-figma text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">Figma</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fab fa-adobe text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">Adobe XD</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fas fa-bezier-curve text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">Illustrator</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fas fa-layer-group text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">Photoshop</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fas fa-code text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">HTML/CSS</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <i className="fas fa-mobile-alt text-3xl text-indigo-600 mb-3"></i>
                <h4 className="font-medium">Responsive</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools; 