import  { useEffect, useRef } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { gsap } from 'gsap';
import image from '../assets/profile.jpg';
import BlurText from './Blurtext';
import {Link} from 'react-router-dom';

const AuroraText = ({ children }) => {
  return (
    <span className="aurora-text">
      {children}
    </span>
  );
};
const ShinyText = ({ children }) => {
  return (
    <span className="shiny-text">
      {children}
    </span>
  );
};


const Hero = () => {
  const profileRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.7 }
      )
      .fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      )
      .fromTo(
        profileRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
      );
  }, []);

  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-2/3">
          <div
            ref={tagRef}
            className="inline-block px-4 py-2 rounded-full bg-gray-800 text-sm text-purple-300 mb-8"
          >
           <ShinyText>
              Exploring new technologies
            </ShinyText>
          </div>

          <div ref={contentRef}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 flex flex-wrap items-center">
            <BlurText
              text="Hi, I'm"
              delay={150}
              animateBy="words"
              direction="top"
              className="inline-block mr-2"
            />
            <AuroraText>
              Sriman
            </AuroraText>
          </h1>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-300">
            <BlurText
              text="Web Developer"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-300"
            />
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            <BlurText
              text="I like to build beautiful things with code. I enjoy learning about new technologies."
              delay={100}
              animateBy="words"
              direction="top"
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            />
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium flex items-center gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)] focus:outline-none"
            >
              Explore more
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg border border-gray-700 text-white font-medium flex items-center gap-2 transition-transform duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.3)] focus:outline-none"
            >
              View Projects
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href="https://github.com/srimanh"
              className="px-6 py-3 rounded-lg border border-gray-700 text-white font-medium flex items-center gap-2 hover:bg-gray-800 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end">
        <div className="relative flex items-center justify-center w-64 h-64">
          {/* Glowing Ring (closer to image) */}
          <span className="absolute w-72 h-72 rounded-full bg-cyan-400/20 blur-2xl animate-pulse-glow pointer-events-none"></span>
          {/* Profile Image (no float) */}
          <div
            ref={profileRef}
            className="relative z-10 w-64 h-64 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl"
            style={{ boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)' }}
          >
            <img
              src={image}
              alt="Sriman profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;