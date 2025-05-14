import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Uno from '../assets/Uno.png';
import  Refiner  from '../assets/RefineAI.jpg';
import  DealTracker from '../assets/DealTracker.jpg';
import  Portfolio  from '../assets/Portfolio.jpg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Refiner AI – Code Learning & Resume Enhancer',
      description: 'AI-based platform to refine GitHub-hosted code, quiz learners, and allow direct code updates—designed to boost developer skills and resume quality.',
      tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Express'],
      image: Refiner,
      link: 'https://github.com/srimanh/Refiner.AI.git' 
    },
    {
      title: 'UNO Multiplayer Game',
      description: 'Online UNO card game supporting real-time multiplayer gameplay with turn-based logic and live interactions using WebSockets.',
      tags: ['JavaScript', 'Socket.io', 'Node.js', 'React', 'Express', 'MongoDB', 'CSS'],
      image: Uno, 
      link: 'https://github.com/srimanh/Uno_Arena.git' 
    },
    {
      title: 'DealTracker – E-commerce Deal Comparator',
      description: 'Web app that compares product prices across platforms like Amazon and Flipkart, helping users find the best deals quickly.',
      tags: ['React', 'Node.js', 'fuse.js', 'MongoDB', 'Express'],
      image: DealTracker, 
      link: 'https://github.com/kalviumcommunity/S76_Sriman_Capstone_DealTracker.git' 
    },
    {
      title: 'Portfolio Website',
      description: 'Fully responsive personal portfolio to showcase projects, skills, and resume, built with elegant UI/UX principles and SEO optimization.',
      tags: ['React', 'tailwind css', 'JavaScript', 'Responsive Design'],
      image:  Portfolio, 
      link: 'https://github.com/srimanh/Portfolio.git' 
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    if (projectsRef.current && projectsRef.current.children) {
      tl.fromTo(projectsRef.current.children,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2,
          duration: 0.7,
          ease: "power3.out" 
        }
      );
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md"></span>
          Featured Projects
        </h2>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-3d-hover">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-bounce-once"
          >
            View All Projects
          </button>
        </div>
      </div>
<div className="max-w-3xl mx-auto mt-16 mb-10 bg-gray-900/80 rounded-2xl p-8 shadow-lg border border-gray-800">
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
      <span role="img" aria-label="rocket">🚀</span>
      Let&apos;s work together!
    </h2>
    <p className="text-gray-300 text-base md:text-lg">
      I&apos;m available for freelance projects and would love to explore potential collaborations. Feel free to email me, and let&apos;s discuss how we can work together!
    </p>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=srimandgl2004@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-2 px-6 py-2 border-2 border-white text-white rounded-lg font-semibold transition-all duration-200 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
>
  Get in touch
</a>
  </div>
</div>
    </section>

    
  );
};

export default Projects;