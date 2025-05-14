import { useState, useEffect, useRef } from 'react';
import { Clock, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import blog4 from '../assets/blog-4.png'


function getTimeAgo(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1 day ago';
  return `${diffDays} days ago`;
}


const blogPosts = [
  {
    id: 1,
    title: 'Mastering Next.js 15: Server Components and the App Router',
    description: 'A comprehensive guide to leveraging Next.js 15 s server components and app router for optimal performance.',
    readTime: 6,
    views: 243,
    date: 'May 07, 2025',
    imageUrl: blog1,
    content: `
      Next.js 15 has revolutionized how we build React applications with its server component architecture and app router. This comprehensive guide dives deep into:

      Server Components: The New Paradigm
      
      Server Components represent a fundamental shift in React architecture, allowing components to render exclusively on the server. This reduces JavaScript bundle sizes and improves initial load performance significantly. We'll explore practical implementation patterns and best practices for deciding between server and client components.

      App Router in Depth
      
      The App Router provides a more intuitive, file-system based routing approach that naturally supports layouts, loading states, and error boundaries. We'll cover advanced routing techniques including:
      - Parallel routes for complex UIs
      - Intercepting routes for modal patterns
      - Route groups for logical organization
      - Server-side route handlers and middleware

      Data Fetching Strategies
      
      Next.js 15 offers multiple approaches to data fetching that work harmoniously with Server Components:
      - Server-side fetch with automatic deduplication
      - Using React's cache() and preload patterns
      - Implementing revalidation strategies
      - Optimizing with generateStaticParams

      Real-world Performance Optimization
      
      We'll analyze before-and-after metrics from three production applications that migrated to Next.js 15, demonstrating substantial improvements in Core Web Vitals and overall user experience.
    `
  },
  {
    id: 2,
    title: 'The Ultimate Guide to TypeScript 5.4 for Full-Stack Developers',
    description: 'Exploring the latest TypeScript features that improve type safety and developer experience across your stack.',
    readTime: 7,
    views: 318,
    date: 'April 22, 2025',
    imageUrl: blog2,
    content: `
      TypeScript continues to evolve rapidly, with version 5.4 introducing several game-changing features for full-stack development. This comprehensive guide explores:

      Decorator Metadata and Reflection
      
      The standardized decorator implementation in TypeScript 5.4 finally brings runtime metadata capabilities that transform framework development. We'll demonstrate practical applications for:
      - ORM entity definitions
      - Dependency injection containers
      - API route controllers
      - Form validations that share types across client and server

      Variadic Tuple Types in Practice
      
      While introduced earlier, variadic tuple types have reached new levels of utility with additional inference capabilities. We'll explore real-world applications in:
      - Strongly-typed REST clients
      - State management libraries
      - Component prop management
      - Function composition utilities

      Advanced Type Utility Patterns
      
      TypeScript 5.4 enables more powerful type manipulations than ever before. We'll build a collection of practical utility types for:
      - Deep partial types with precise control
      - Discriminated union helpers
      - Database schema to type generators
      - End-to-end typesafe API contracts

      Migration Strategies
      
      Moving to TypeScript 5.4 may require adjustments to existing codebases. We provide a step-by-step migration guide with automated codemods for common patterns that need updates.

      Performance Improvements
      
      Type checking and compilation speeds have improved dramatically. We benchmark compilation times across different project sizes and configurations to demonstrate the tangible developer experience improvements.
    `
  },
  {
    id: 3,
    title: 'Microservices vs. Monoliths in 2025: The State of Backend Architecture',
    description: 'An evidence-based analysis of when to choose microservices or monolithic architectures for modern applications.',
    readTime: 8,
    views: 429,
    date: 'March 18, 2025',
    imageUrl: blog3,
    content: `
      The debate between microservices and monoliths continues to evolve as technologies mature. This in-depth analysis brings evidence-based insights to help you make the right architectural decisions in 2025:

      The State of Microservices in 2025
      
      Microservices have evolved significantly from their early implementations. We examine:
      - How service mesh technologies have matured to solve previous pain points
      - Standardization of observability patterns
      - Improvements in local development experience
      - "Right-sized" services that avoid over-fragmentation
      - Quantifiable maintenance costs from real-world implementations

      The Monolith Renaissance
      
      Monolithic architectures have experienced a renaissance with:
      - Modular monolith patterns that enable clear boundaries
      - Improved deployment strategies for large codebases
      - Native support for isolation in modern languages and frameworks
      - Case studies of companies that successfully "un-microserviced"

      Decision Framework for Architecture Selection
      
      We provide a comprehensive decision framework covering:
      - Team size and structure considerations
      - Domain complexity analysis
      - Deployment frequency requirements
      - Scaling patterns and geographic distribution needs
      - Regulatory and compliance factors

      Hybrid Approaches
      
      Most successful organizations now implement hybrid approaches. We examine:
      - The "macroservice" pattern
      - BFF (Backend for Frontend) implementations
      - Strangler fig pattern for gradual migration
      - Event-driven architectures that span architectural styles

      Real-world Performance and Cost Analysis
      
      Using data from dozens of production systems, we present:
      - Infrastructure cost comparisons
      - Developer productivity metrics
      - System reliability statistics
      - Time-to-market measurements
    `
  },
  {
    id: 4,
    title: 'Building AI-Powered Features with the Latest LLM APIs',
    description: 'A practical guide to integrating advanced AI capabilities into your web applications using the latest LLM APIs.',
    readTime: 5,
    views: 387,
    date: 'February 12, 2025',
    imageUrl: blog4,
    content: `
      Large Language Models (LLMs) have transformed from experimental technology to production-ready tools. This guide provides practical implementation strategies for integrating AI into your applications:

      LLM API Landscape in 2025
      
      We compare the major LLM providers across:
      - Pricing models and cost optimization strategies
      - Performance benchmarks for common use cases
      - Specialized models for different tasks
      - Fine-tuning capabilities and requirements
      - Data privacy considerations and compliance features

      Implementing Common AI Features
      
      Step-by-step implementation guides for:
      - Advanced search capabilities with semantic understanding
      - Content generation with brand voice consistency
      - Data extraction and structuring from unstructured content
      - Conversational interfaces with memory and context awareness
      - Code generation and refactoring assistants

      Optimizing Prompt Engineering
      
      Techniques for creating effective prompts including:
      - Chain-of-thought reasoning for complex processing
      - Systematic output formatting strategies
      - Few-shot learning approaches
      - Managing context windows efficiently
      - Prompt templates and libraries for common scenarios

      Error Handling and Edge Cases
      
      Production-grade implementations must handle:
      - Content safety and moderation strategies
      - Hallucination detection and mitigation
      - Fallback mechanisms for unreliable outputs
      - Performance degradation under high load
      - User feedback loops for continuous improvement

      Real-world Case Studies
      
      We examine implementations from e-commerce, SaaS, healthcare, and financial services industries, with metrics on ROI and user engagement.
    `
  }
];

// Blog Post Card Component with 3D tilt/rotate
const BlogPostCard = ({ post, onPostClick, views, index }) => {
  const cardRef = useRef(null);

  // 3D tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(900px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      card.style.boxShadow = `0 8px 32px 0 rgba(139,92,246,0.25), 0 1.5px 8px 0 rgba(139,92,246,0.15)`;
    };
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '';
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-[#181c2f] border border-gray-800 shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/30 transition-all duration-300 animate-fadeInUp`}
      style={{ animationDelay: `${index * 120}ms` }}
      onClick={() => onPostClick(post)}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-extrabold text-white mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.description}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center mr-4">
            <Clock size={16} className="mr-2" />
            {post.readTime} min read
          </div>
          <div className="flex items-center">
            <Eye size={16} className="mr-2" />
            {views} views
          </div>
          <div className="ml-auto text-xs text-gray-500">{getTimeAgo(post.date)}</div>
        </div>
      </div>
    </div>
  );
};

function RenderContent({ content }) {
  // Split by lines and identify sections/paragraphs
  return content.split('\n').map((line, idx) => {
    // Empty lines
    if (line.trim() === '') {
      return null;
    }
    
    // Handle list items
    if (line.trim().startsWith('- ')) {
      return (
        <li key={idx} className="ml-6 list-disc text-gray-200">{line.replace(/^- /, '')}</li>
      );
    }
    
    // Check if this is a section heading (non-indented, standalone paragraph)
    // that's not a list item and follows an empty line
    const isPossibleHeading = 
      idx > 0 && 
      content.split('\n')[idx-1].trim() === '' &&
      !line.startsWith(' ') && 
      !line.startsWith('-') &&
      content.split('\n')[idx+1]?.trim() === '';
    
    if (isPossibleHeading) {
      return (
        <h2 key={idx} className="text-2xl font-bold mt-6 mb-2 text-purple-400">
          {line.trim()}
        </h2>
      );
    }
    
    // Regular paragraph
    return (
      <p key={idx} className="text-gray-200 mb-3">{line}</p>
    );
  });
}

// Blog Detail Modal Component with heading fix
const BlogDetailModal = ({ post, onClose, views }) => {
  // Process content to remove markdown syntax before rendering
  const processedContent = post.content.split('\n').map(line => {
    if (line.trim().startsWith('## ')) {
      return line.replace(/^## /, '');
    }
    return line;
  }).join('\n');
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[60] flex justify-center items-center animate-modalFadeIn">
      <div className="bg-[#181c2f] w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden relative border border-purple-700 scale-95 animate-modalPopIn flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
        >
          &times;
        </button>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover rounded-t-2xl"
          draggable={false}
        />
        <div className="flex-1 overflow-y-auto p-8">
          <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
          <div className="flex items-center text-gray-400 mb-6">
            <div className="flex items-center mr-4">
              <Clock size={16} className="mr-2" />
              {post.readTime} min read
            </div>
            <div className="flex items-center">
              <Eye size={16} className="mr-2" />
              {views} views
            </div>
            <div className="ml-auto text-sm text-gray-500">{getTimeAgo(post.date)}</div>
          </div>
          <div className="prose prose-invert max-w-full">
            <RenderContent content={processedContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Typing animation for search bar placeholder
function useTypingPlaceholder(text, speed = 60) {
  const [placeholder, setPlaceholder] = useState('');
  useEffect(() => {
    let i = 0;
    setPlaceholder('');
    const interval = setInterval(() => {
      setPlaceholder(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return placeholder;
}

// Main Blog Page Component
export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState('');
  const [views, setViews] = useState({});
  const typingPlaceholder = useTypingPlaceholder('Search posts...');

  // Load views from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('blogViews') || '{}');
    setViews(stored);
  }, []);

  // Increment view count when modal opens
  useEffect(() => {
    if (selectedPost) {
      setViews(prev => {
        const updated = { ...prev, [selectedPost.id]: (prev[selectedPost.id] || 0) + 1 };
        localStorage.setItem('blogViews', JSON.stringify(updated));
        return updated;
      });
    }
  }, [selectedPost]);

    useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  // Filter posts by search query (title or description)
  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <header className="pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-6xl font-extrabold text-white mb-4 animate-fadeInDown">Blog</h1>
          <p className="text-gray-200 text-xl mb-8 animate-fadeInDown" style={{ animationDelay: '120ms' }}>
            The place where I share my thoughts, ideas and experiences about software development.
          </p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="relative mb-12 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={typingPlaceholder}
            className="w-full md:w-2/3 p-4 bg-[#181c2f] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-lg shadow-lg animate-fadeIn"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onPostClick={setSelectedPost}
                views={views[post.id] || 0}
                index={idx}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-20 text-xl">
              No posts found.
            </div>
          )}
        </div>
      </main>
      {selectedPost && (
        <BlogDetailModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          views={views[selectedPost.id] || 0}
        />
      )}
    </div>
  );
}