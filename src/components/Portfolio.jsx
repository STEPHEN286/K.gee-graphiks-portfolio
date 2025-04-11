import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/7132f8199308837.664f3966c46f8.jpg',
      year: '2024',
      client: 'Personal Project',
      behanceUrl: 'https://www.behance.net/gallery/199308837/BRANDING'
    },
    {
      id: 2,
      title: 'Flyers and other designs',
      category: 'Graphic Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/005103163531101.662eef65c3597.jpg',
      client: 'Sound Waves Records',
      behanceUrl: 'https://www.behance.net/gallery/163531101/POSTERS-CERTIFICATE-SCHOOL-TAG-BANNERS-FLYERS'
    },
    {
      id: 3,
      title: 'Birthday Flyer',
      category: 'Graphic Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c778fd163533789.662ef0b40228e.jpg',
      year: '2023',
      client: 'EcoLife',
      behanceUrl: 'https://www.behance.net/gallery/163533789/BIRTHDAY'
    },
    {
      id: 4,
      title: 'Real Estate Website',
      category: 'UI Design',
      image: 'https://i.imgur.com/Abiyw60.png',
      year: '2024',
      client: 'Real Estate Agency',
      behanceUrl: 'https://www.figma.com/design/CqJrA3OEvhTixti6F8pmTq/Untitled?node-id=0-1&t=NWbYRazlhc89fEfx-1'
    },
    {
      id: 5,
      title: 'Digital Marketing Agency',
      category: 'UI Design',
      image: 'https://i.imgur.com/oJVVGI9.png',
      year: '2024',
      client: 'ShopEasy',
      behanceUrl: 'https://www.figma.com/design/89NDW3Ywk4pjVRlyseGou8/Digital-Marketing-Agency?node-id=0-1&t=NWbYRazlhc89fEfx-1'
    },
    {
      id: 6,
      title: 'Invitation Card and Wishes',
      category: 'Graphic Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/c1d585161434771.664f3390404f2.jpg',
      year: '2024',
      client: 'Invitation Card and Wishes',
      behanceUrl: 'https://www.behance.net/gallery/161434771/invitation-and-wishes'
    },
    {
      id: 7,
      title: 'Project Management',
      category: 'UI Design',
      image: 'https://i.imgur.com/OYLK5ZE.jpeg',
      year: '2024',
      client: 'Project Management',
      behanceUrl: 'https://www.figma.com/design/9XB7rtXL3c6RIw45ZuMsKG/codeWithIbrah?t=NWbYRazlhc89fEfx-1'
    },
    {
      id: 8,
      title: 'Food Flyers and Others',
      category: 'Graphic Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/c8ddec163531895.67f8603ad86f9.jpg',
      year: '2024',
      client: 'Project Management',
      behanceUrl: 'https://www.behance.net/gallery/163531895/FOOD-FLYERS-and-others'
    },
    {
      id: 9,
      title: 'Project Management',
      category: 'UI Design',
      image: 'https://i.imgur.com/T28iEIU.png',
      year: '2024',
      client: 'Project Management',
      behanceUrl: 'https://www.figma.com/design/sJrKdLHKtOZnZvx4EsKloY/Untitled?node-id=1-2&t=NWbYRazlhc89fEfx-1'
    }
    ,
    {
      id: 10,
      title: 'Scholarship Website',
      category: 'UI Design',
      image: 'https://i.imgur.com/HK8fI5o.png',
      year: '2024',
      client: 'Scholarship Website',
      behanceUrl: 'https://www.figma.com/design/laRNlT85Lf3rEdWFb4Fwi3/Scholarship-website?node-id=3-15&t=iIqaZJbFIvImGu53-1'
    },
    {
      id: 11,
      title: 'Ecommerce Website',
      category: 'UI Design',
      image: 'https://i.imgur.com/SqefiH2.jpeg',
      year: '2024',
      client: 'Ecommerce Website',
      behanceUrl: 'https://www.figma.com/design/ZJetsQtntgcyAF6paGFOQh/ecom?node-id=1-3&t=G3Psdho4hCGKngMC-1'
    }

  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-medium tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Creative Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of my most impactful design projects and creative explorations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === 'all' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All Works
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === 'Graphic Design' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter('Graphic Design')}
          >
            Graphic Design
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === 'UI Design' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter('UI Design')}
          >
            UI Design
          </button>
        </div>

        {/* Portfolio Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div> */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
  {filteredItems.map((item) => (
    <ProjectCard key={item.id} project={item} />
  ))}
</div>

      </div>
    </section>
  );
};

export default Portfolio; 