import profileImg from '../assets/profile.jpg';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiPython,
  SiFramer,
  SiFigma,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import TiltedCard from '../components/TiltedCard';

const techStack = [
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Java', icon: <DiJava /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Figma', icon: <SiFigma /> },
];

const socials = [
  {
    href: 'https://github.com/srimanh',
    icon: <i className="fab fa-github"></i>,
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/srimanh',
    icon: <i className="fab fa-linkedin"></i>,
    label: 'LinkedIn'
  },
  {
    href: 'mailto:srimandgl2004@gmail.com',
    icon: <i className="fas fa-envelope"></i>,
    label: 'Email'
  }
];

const About = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row gap-12">
    {/* Left: Profile */}
    <div className="md:w-1/4 flex flex-col items-center md:items-start">
      <div className="md:sticky md:top-28 flex flex-col items-center md:items-start">
        <TiltedCard
          imageSrc={profileImg}
          altText="Sriman's Profile"
          captionText="Web Developer"
          containerHeight="380px"     
          containerWidth="300px"
          imageHeight="380px" 
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">
              Sriman 
            </p>
          }
        />
        <div className="w-full flex flex-col items-center mt-2">
          <h3 className="text-2xl font-extrabold text-white mb-1 animate-fadeInDown" style={{ animationDelay: '200ms' }}>
            Sriman.H
          </h3>
          <p className="text-gray-400 text-base font-medium mb-3 animate-fadeInDown" style={{ animationDelay: '300ms' }}>
            Web developer
          </p>
          <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <span className="inline-block w-3 h-3 rounded-full bg-purple-400 animate-pulse-glow"></span>
            <span className="text-gray-200 text-sm font-medium">Open for hire</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Content */}
    <div className="md:w-3/4 flex flex-col gap-12 animate-fadeInUp">
      {/* About Heading and Bio */}
      <section className="mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-2 animate-fadeInDown">About</h1>
        <p className="text-lg font-medium text-white mb-8 animate-fadeInDown" style={{ animationDelay: '100ms' }}>
          A short story of me.
        </p>
        <div className="space-y-5 text-[1.04rem] text-gray-100 animate-fadeIn">
          <p>
            <span className="font-semibold text-white">
              Hi there! Thanks for visiting my digital home on the internet.
            </span>
          </p>
         <p>
            I&apos;m <span className="font-semibold text-purple-300">Sriman</span>, a passionate web developer from Dindigul, Tamil Nadu. I’m currently pursuing my degree in Computer Science and actively learning full-stack development to enhance my career opportunities. I believe in the power of technology to solve real-world problems and am always excited to explore new areas of learning.
          </p>
          <p>
            I’m currently studying in my first year at college, and when I’m not attending classes, I spend my time coding, building projects, and expanding my skill set. I enjoy working with tools like{' '}
            <span className="font-semibold text-blue-400">React.js</span>,{' '}
            <span className="font-semibold text-blue-400">Node.js</span>,{' '}
            <span className="font-semibold text-blue-400">MongoDB</span>, and{' '}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>. I am also exploring areas like JWT authentication and cloud deployment.
          </p>
          <p>
            Whether it’s developing user-friendly interfaces, solving algorithmic challenges, or contributing to group projects, I’m always looking to sharpen my skills. I enjoy transforming ideas into functional applications and learning from every experience.
          </p>
          <p>
            Outside of programming, I’m passionate about martial arts, especially Kung-Fu, which has taught me discipline and focus. I also enjoy listening to music, particularly energetic tracks that boost my creativity and motivation. A balanced lifestyle keeps me grounded and driven in everything I do.
          </p>

        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-2 animate-fadeInDown">Tech Stack</h2>
        <div className="w-16 h-1 bg-white rounded mb-6 animate-fadeInLeft"></div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, idx) => (
            <span
              key={tech.name}
              className="bg-[#181c24] text-gray-100 px-5 py-2 rounded-lg font-semibold text-base shadow-md flex items-center gap-2 animate-fadeIn"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {tech.icon && <span>{tech.icon}</span>} {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* Let's Connect */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-2 animate-fadeInDown">Let&apos;s Connect</h2>
        <div className="w-16 h-1 bg-white rounded mb-6 animate-fadeInLeft"></div>
        <p className="text-gray-200 mb-4 text-lg animate-fadeIn">
          I&apos;m always open to new ideas, collaborations, or even just a chat about tech! Feel free to reach out to me via email at <span className="font-bold text-white">srimandgl2004@gmail.com</span> or connect with me on social media.
        </p>
        <div className="flex gap-6 text-2xl mt-2">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-purple-400 transition-colors duration-200 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default About;