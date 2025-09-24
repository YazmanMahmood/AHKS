import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No extra effect needed; splash handles initial logo motion

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white text-black' : 'bg-[#237bff] text-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center group">
            <motion.img 
              src={logo} 
              alt="Logo"
              layoutId="ahks-logo"
              className="w-[8rem] h-[4.5rem] object-contain"
            />
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 font-medium relative group text-base lg:text-lg xl:text-xl ${
                  location.pathname === item.path
                    ? (isScrolled ? 'text-black' : 'text-white')
                    : (isScrolled ? 'text-black hover:text-[#00000]' : 'text-white hover:text-[#00000]')
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button - Right aligned */}
          <div className="md:hidden">
            <button
              className={`p-2 ${isScrolled ? 'text-black hover:text-[#00000]' : 'text-white hover:text-[#237bff]'} transition-colors duration-300 touch-manipulation`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className={`rounded-lg mt-2 py-4 px-4 shadow-lg border border-accent/20 ${isScrolled ? 'bg-white' : 'bg-[#237bff]'}`}>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 px-2 transition-all duration-300 transform hover:translate-x-2 touch-manipulation text-lg ${
                  location.pathname === item.path
                    ? (isScrolled ? 'text-black' : 'text-white')
                    : (isScrolled ? 'text-black hover:text-[#237bff]' : 'text-white hover:text-[#237bff]')
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;