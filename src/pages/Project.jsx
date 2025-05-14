import ProjectCard from '../components/ProjectCard';
import Uno from '../assets/Uno.png';
import  Refiner  from '../assets/RefineAI.jpg';
import  DealTracker from '../assets/DealTracker.jpg';
import  Portfolio  from '../assets/Portfolio.jpg';

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
      link: 'https://yourportfolio.link' 
    }
  ];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white mb-10">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;