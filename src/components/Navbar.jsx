import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedList from './Animation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNavbar, setShowNavbar] = useState(false); 
  let lastScrollY = window.scrollY;

  const pages = [
    { name: 'Home', href: '/', icon: <FaEnvelope /> },
    { name: 'Blog', href: '/blog', icon: <FaBlog /> },
    { name: 'Projects', href: '/projects', icon: <FaProjectDiagram /> },
    { name: 'About', href: '/about', icon: <FaEnvelope /> },
  ];

  const commandMenuPages = [
    { name: 'Social Links', href: 'srimandgl2004@gmail.com', icon: <FaEnvelope /> },
    { name: 'GitHub', href: 'https://github.com/srimanh', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sriman-h-419930258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <FaLinkedin /> },
    ...pages, 
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 300); 

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredPages = commandMenuPages.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-transform duration-500 ${
          scrolled
            ? 'bg-gray-900/70 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`} 
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white">
              Sriman
            </Link>
            <nav className="hidden md:flex items-center space-x-10">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setCommandMenuOpen(true)}
              className="px-3 py-1 rounded-md bg-gray-800 text-white text-lg font-mono hover:bg-gray-700 transition-all border border-gray-600 shadow-sm flex items-center gap-2"
            >
              ⌘
            </button>
          </div>
        </div>
      </header>

      {/* Animated List */}
      {commandMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg shadow-lg p-6 w-[35rem] transform transition-transform duration-500 scale-100 overflow-hidden">
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
            <input
              type="text"
              placeholder="Type a command or search"
              className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AnimatedList
              items={filteredPages.map((page) => ({
                content: (
                  <div className="flex items-center space-x-2 animated-item">
                    <span className="text-white">{page.icon}</span>
                    <span className="text-white">{page.name}</span>
                  </div>
                ),
                href: page.href,
              }))}
              onItemSelect={(item) => {
                if (item.href.startsWith('/')) {
                  window.location.href = item.href; // Navigate to internal routes
                } else {
                  window.open(item.href, '_blank'); 
                }
                setCommandMenuOpen(false);
              }}
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={true}
            />
            <button
              className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md"
              onClick={() => setCommandMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;