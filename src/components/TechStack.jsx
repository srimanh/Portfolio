import React, { useRef } from 'react';
import TechCard from './TechCard';
import Marquee from 'react-fast-marquee';
import { VscCode } from "react-icons/vsc";

const TechStack = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const techItems = [
    { name: 'React', icon: 'react', level: 90 },
    { name: 'Next.js', icon: 'nextjs', level: 88 },
    { name: 'Tailwind CSS', icon: 'tailwind', level: 92 },
    { name: 'JavaScript', icon: 'javascript', level: 87 },
    { name: 'HTML5', icon: 'html5', level: 100 },
    { name: 'CSS3', icon: 'css3', level: 100 },
    { name: 'Node.js', icon: 'nodejs', level: 85 },
    { name: 'MongoDB', icon: 'mongodb', level: 85 },
    { name: 'Express.js', icon: 'express', level: 82 },
    { name: 'Git & GitHub', icon: 'git', level: 90 },
    { name: 'Java', icon: 'java', level: 30 },
    { name: 'Python', icon: 'python', level: 75 },
    { name: 'Framer Motion', icon: 'framer', level: 80 },
    { name: 'Figma', icon: 'figma', level: 100 },
  ];

  // Split techItems into two rows
  const row1 = techItems.filter((_, i) => i % 2 === 0);
  const row2 = techItems.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="inline-block text-purple-500 text-4xl"><VscCode /></span>
          My Tech Stack
        </h2>

        {/* First Marquee Row */}
        <div className="w-full mb-8 relative">
          {/* Left gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
            style={{
              background: "linear-gradient(to right, rgba(24,24,27,0.85) 70%, transparent 100%)"
            }} />
          {/* Right gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
            style={{
              background: "linear-gradient(to left, rgba(24,24,27,0.85) 70%, transparent 100%)"
            }} />
          <Marquee
            pauseOnHover
            gradient={false}
            speed={40}
            className="relative z-10 py-6"
          >
            {row1.map((tech, idx) => (
              <div key={idx} className="mx-4 w-64">
                <TechCard name={tech.name} icon={tech.icon} level={tech.level} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee Row (reverse direction) */}
        <div className="w-full relative">
          {/* Left gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
            style={{
              background: "linear-gradient(to right, rgba(24,24,27,0.85) 70%, transparent 100%)"
            }} />
          {/* Right gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
            style={{
              background: "linear-gradient(to left, rgba(24,24,27,0.85) 70%, transparent 100%)"
            }} />
          <Marquee
            pauseOnHover
            gradient={false}
            speed={40}
            direction="right"
            className="relative z-10 py-6"
          >
            {row2.map((tech, idx) => (
              <div key={idx} className="mx-4 w-64">
                <TechCard name={tech.name} icon={tech.icon} level={tech.level} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;