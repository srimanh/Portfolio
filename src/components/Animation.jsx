import  { useState, useEffect, useRef } from 'react';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`cursor-pointer hover:bg-gray-800 transition-colors px-4 py-4 rounded-md ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={{
        animationDelay: `${delay + index * 0.1}s`,
        animationDuration: '0.5s',
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

const AnimatedList = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const handleKeyDown = (e) => {
    if (!enableArrowNavigation) return;

    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      onItemSelect(items[selectedIndex]);
    }
  };

  useEffect(() => {
    if (enableArrowNavigation) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedIndex, enableArrowNavigation]);

  return (
    <div
      className={`overflow-y-auto ${displayScrollbar ? 'scrollbar-thin' : ''} ${className}`}
      style={{ maxHeight: '300px' }}
    >
      {items.map((item, index) => (
        <AnimatedItem
          key={index}
          index={index}
          delay={0.2}
          onMouseEnter={() => setSelectedIndex(index)}
          onClick={() => onItemSelect(item)}
          className={itemClassName}
        >
          {item.content}
        </AnimatedItem>
      ))}
    </div>
  );
};

export default AnimatedList;