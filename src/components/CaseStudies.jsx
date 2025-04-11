import React from 'react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Detailed explorations of selected projects, highlighting my design process and problem-solving approach.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-indigo-600 font-medium mb-2">UI/UX DESIGN</span>
              <h3 className="text-3xl font-bold mb-4">Financial App Redesign</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive redesign of a banking application focused on improving user experience, accessibility, and visual appeal while maintaining robust security features.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <i className="fas fa-lightbulb text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Challenge</h4>
                    <p className="text-gray-600">Simplifying complex financial data while ensuring security and compliance requirements were met.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <i className="fas fa-pencil-ruler text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Approach</h4>
                    <p className="text-gray-600">User-centered design with extensive research, wireframing, prototyping, and iterative testing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <i className="fas fa-chart-line text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Result</h4>
                    <p className="text-gray-600">42% increase in user engagement and 27% reduction in support tickets related to UI issues.</p>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md !rounded-button whitespace-nowrap cursor-pointer">
                View Full Case Study
              </a>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20financial%20app%20interface%20mockup%20on%20smartphone%2C%20showing%20dashboard%20with%20clean%20data%20visualization%2C%20transaction%20history%2C%20budget%20tracking%20features%2C%20professional%20UI%20design%2C%20light%20theme%2C%20high-quality%20render%20on%20minimal%20background&width=800&height=1000&seq=8&orientation=portrait"
                alt="Financial App Redesign"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors cursor-pointer">
            View More Case Studies
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 