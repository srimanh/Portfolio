import { useState, useEffect } from 'react';

const SpaceLoadingAnimation = () => {
  const [starCount] = useState(75);
  const [stars, setStars] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Generate random stars
  useEffect(() => {
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`
    }));
    setStars(newStars);
  }, [starCount]);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        const nextProgress = prev + Math.random() * 8;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* Background stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            opacity: Math.random() * 0.7 + 0.3
          }}
        />
      ))}

      {/* Distant galaxies/nebulae */}
      <div className="absolute w-32 h-32 bg-purple-900 rounded-full opacity-5 blur-xl"
           style={{ top: '15%', left: '10%' }} />
      <div className="absolute w-24 h-24 bg-blue-900 rounded-full opacity-5 blur-xl"
           style={{ top: '70%', left: '85%' }} />

      {/* Floating asteroids */}
      <div className="absolute w-6 h-6 bg-gray-700 rounded-full opacity-40 animate-float" 
           style={{ top: '20%', left: '25%', animationDuration: '15s', animationDelay: '0s' }} />
      <div className="absolute w-4 h-4 bg-gray-600 rounded-full opacity-30 animate-float-reverse" 
           style={{ top: '70%', left: '80%', animationDuration: '17s', animationDelay: '1s' }} />
      <div className="absolute w-3 h-3 bg-gray-500 rounded-full opacity-20 animate-float" 
           style={{ top: '80%', left: '10%', animationDuration: '13s', animationDelay: '0.5s' }} />

      {/* Orbital rings */}
      <div className="absolute w-40 h-40 rounded-full border-2 border-purple-500/30 animate-spin" 
           style={{ animationDuration: '15s' }} />
      <div className="absolute w-64 h-64 rounded-full border border-indigo-500/20 animate-spin-reverse" 
           style={{ animationDuration: '25s' }} />
      <div className="absolute w-80 h-80 rounded-full border border-blue-500/10 animate-spin" 
           style={{ animationDuration: '30s' }} />

      {/* Center cosmic elements */}
      <div className="relative z-10">
        {/* Inner glowing core */}
        <div className="absolute w-10 h-10 bg-purple-300 rounded-full blur-md animate-pulse opacity-70"
             style={{ animationDuration: '2s', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        
        {/* Main planet */}
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full shadow-lg relative">
          {/* Surface details */}
          <div className="absolute top-1 left-3 w-3 h-2 bg-purple-300 rounded-full opacity-30" />
          <div className="absolute top-4 right-2 w-4 h-3 bg-indigo-400 rounded-full opacity-20" />
          <div className="absolute bottom-3 left-5 w-2 h-2 bg-purple-200 rounded-full opacity-20" />
          
          {/* Animated ring */}
          <div className="absolute -inset-3 border-2 border-t-transparent border-b-transparent border-purple-400/60 rounded-full animate-spin" 
               style={{ animationDuration: '8s' }} />
        </div>
      </div>
      
      {/* Loading progress indicator */}
      <div className="absolute bottom-24 w-48">
        <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" 
            style={{ width: `${Math.floor(loadingProgress)}%`, transition: 'width 0.3s ease-out' }}
          />
        </div>
        <div className="text-center text-purple-300 mt-2 text-sm font-mono">
          {Math.floor(loadingProgress)}% Complete
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-12 text-indigo-300 tracking-widest uppercase text-sm font-light">
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0s' }}>E</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.1s' }}>x</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}>p</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}>l</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.4s' }}>o</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }}>r</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }}>i</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.7s' }}>n</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.8s' }}>g</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '0.9s' }}> </span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '1.0s' }}>S</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '1.1s' }}>p</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '1.2s' }}>a</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '1.3s' }}>c</span>
        <span className="animate-pulse inline-block" style={{ animationDuration: '1.5s', animationDelay: '1.4s' }}>e</span>
      </div>
    </div>
  );
};

export default SpaceLoadingAnimation;