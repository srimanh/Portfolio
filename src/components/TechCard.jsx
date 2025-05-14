import { useState } from 'react';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiMongodb, SiExpress, SiGithub, SiPython,
  SiFramer, SiFigma
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  express: SiExpress,
  git: SiGithub,
  java: DiJava,
  python: SiPython,
  framer: SiFramer,
  figma: SiFigma,
};

const TechCard = ({ name, icon, level }) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[icon.toLowerCase().replace(/\s/g, "")] || SiReact;

  return (
    <div 
      className={`p-6 rounded-xl relative overflow-hidden transition-all duration-300 ${
        isHovered 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg shadow-purple-500/10 scale-105' 
        : 'bg-gray-800/50 backdrop-blur-sm'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50"></div>
      <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-500/10 transition-transform duration-500 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-3xl text-purple-400">
          <IconComponent />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-2">{name}</h3>
          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-700 ease-out"
              style={{ width: isHovered ? `${level}%` : '15%' }}
            ></div>
          </div>
          <span className={`text-xs text-gray-400 mt-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {isHovered ? `${level}% proficient` : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechCard;