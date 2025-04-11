import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.year && (
            <span className="text-indigo-400 text-xs font-medium">
              {project.year} • {project.client}
            </span>
          )}
          <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
          <p className="text-gray-300 text-sm capitalize">{project.category}</p>
        </div>
        <a
          href={project.behanceUrl || "#"}
          target={project.behanceUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="mt-3 bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
        >
          {project.category === "Graphic Design" ? "View on Behance" : "View Project"}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 