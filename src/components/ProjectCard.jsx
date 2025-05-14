import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 w-full h-[420px] flex flex-col opacity-0 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minWidth: 0 }}
    >
      {/* Gradient Overlay */}
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-900 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={e => { e.target.style.display = 'none'; }}
          />
        ) : (
          <span className="text-gray-600">No Image</span>
        )}
        {/* Keep the gradient subtle and do NOT block pointer events */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative flex-1 flex flex-col justify-between z-10">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        </div>

        {/* Anchor Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-300 hover:text-white text-sm px-2 py-1 rounded bg-purple-500/10 hover:bg-purple-500/80 mt-auto z-20 transition-all w-fit group shadow-sm hover:shadow-purple-500/30"
        >
          <span className="transition-all duration-300 group-hover:opacity-100 opacity-90">View Project</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </a>


      </div>

      {/* Border Animation */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-500 pointer-events-none ${isHovered ? 'border-purple-500/50' : ''}`}></div>
    </div>
  );
};

export default ProjectCard;
