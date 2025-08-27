import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoblack from '../assets/logoblack.png';
import whitelogo from '../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../GlobalStates/GlobalState';
import { motion } from 'framer-motion';
import ACCOUNTURL from '../utils/data/ACCOUNTURL';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const { scrwidth } = useGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/About' },
    { label: 'Services', href: '/Services' },
    { label: 'Markets', href: '/Markets' },
    { label: 'FAQ', href: '/faqs' },
    { label: 'Contact Us', href: '/Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-lg text-black' : 'sm:bg-transparent sm:text-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <img src={isScrolled ? logoblack : whitelogo} alt="" className="w-40" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  onClick={() => setActivePage(item.href)}
                  className={`
                    transition-colors duration-200 font-medium relative 
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 
                    after:w-full after:h-[2px] 
                    after:transition-all after:duration-300 
                    ${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-white'} 
                    ${activePage === item.href
                      ? 'after:bg-current after:opacity-100'
                      : 'after:bg-current after:opacity-0 group-hover:after:opacity-100'}
                  `}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-x-6">
            <a
              href="tel:02135164519"
              className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800 transition-all duration-200 transform rounded-sm"
            >
              Call Now
            </a>
            <a href={ACCOUNTURL} target='_blank' className="bg-green-600 hover:bg-green-800 text-white px-6 py-2 font-semibold transition-all duration-200 transform rounded-sm">
              Open Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-black' : 'text-white '} transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-4 px-6 lg:px-8 py-4 bg-white"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => {
                    setActivePage(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:02135164519"
                className="bg-black text-white px-6 py-3 font-semibold mt-4 hover:bg-gray-800 transition-colors text-center"
              >
                Call Now
              </a>
              <a href={ACCOUNTURL} target='_blank' className="bg-green-600 text-white px-6 py-3 font-semibold mt-2 hover:bg-gray-800 transition-colors">
                Open Account
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
