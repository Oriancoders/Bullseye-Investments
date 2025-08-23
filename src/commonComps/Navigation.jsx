import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoblack from '../assets/logoblack.png'
import whitelogo from '../assets/whitelogo.png'

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../GlobalStates/GlobalState';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEducationOpenMobile, setIsEducationOpenMobile] = useState(false);
  const [activePage, setActivePage] = useState('home'); // new state for active link
  const {scrwidth} = useGlobalContext()

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
    { 
      label: 'Education', 
      href: '#education', 
      submenu: [
        { label: 'Markets', href: '/Markets' },
        { label: 'MetaTrader', href: '/MetaTrader' },
      ]
    },
    { label: 'FAQ', href: '/faqs' },
    { label: 'Contact Us', href: '/Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 ${
      isScrolled ? 'bg-white shadow-lg text-black' : 'sm:bg-transparent bg-white sm:text-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <img src={logoblack} alt="" className='w-40' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {!item.submenu ? (
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
                ) : (
                  <>
                    {/* Parent menu item */}
                    <button
                      className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'} flex items-center gap-1 font-medium`}
                    >
                      {item.label} <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Submenu */}
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                      <div className="flex flex-col">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setActivePage(subItem.href)}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-x-6">
            <button className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800 transition-all duration-200 transform rounded-sm">
              Call Now
            </button>
            <button className="bg-green-600 hover:bg-green-800  text-white px-6 py-2 font-semibold  transition-all duration-200 transform rounded-sm">
              Open Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-black' : ' sm:text-white text-black' } transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 ">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) =>
                !item.submenu ? (
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
                ) : (
                  <div key={item.label} className="border-b border-gray-100">
                    {/* Education header toggle */}
                    <button
                      onClick={() => setIsEducationOpenMobile(!isEducationOpenMobile)}
                      className="w-full flex justify-between items-center text-gray-700 py-2 font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          isEducationOpenMobile ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    {/* Submenu, toggle */}
                    {isEducationOpenMobile && (
                      <div className="flex flex-col pl-4 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => {
                              setActivePage(subItem.href);
                              setIsMobileMenuOpen(false);
                            }}
                            className="text-gray-600 hover:text-black py-2 border-b border-gray-100"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
              <button className="bg-black text-white px-6 py-3 font-semibold mt-4 hover:bg-gray-800 transition-colors">
                Open Account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
