import React from 'react';
import { Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import whitelogo from '../assets/whitelogo.png'
import AOSInitializer from '../utils/AOS/AOSInitializer';

const Footer = () => {
  const quickLinks = [
    'Home', 'Services', 'About Us', 'FAQ', 'Legal'
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Facebook, label: 'Facebook' },
    { icon: MessageCircle, label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <AOSInitializer />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div  className="col-span-1 md:col-span-2">
            <img data-aos="fade-up" src={whitelogo} alt="" className='w-40 mb-6' />
            <p data-aos="fade-up" className="text-gray-200 mb-6 leading-relaxed">
              Bullseye Insurance Broker Pvt. Ltd. is a Private Limited Company, duly incorporated under the Companies Act, 2017 with the Securities and Exchange Commission of Pakistan (SECP).

            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a data-aos="fade-up" key={index} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black transition-all duration-200">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 data-aos="fade-up" className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li data-aos="fade-up" key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 data-aos="fade-up" className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-200">
              <div data-aos="fade-up" className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">1304 13th floor Balad Trade Center 3 Boat Basin Clifton Block 7 Karachi</span>
              </div>
              <div data-aos="fade-up" className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">bullseyeinvestments2025@gmail.com</span>
              </div>
              <div data-aos="fade-up" className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">021 35164519</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-200 text-sm mb-4 md:mb-0">
              © 2025 Bullseye Investments Private Limited. All rights reserved.
            </div>
            <div data-aos="fade-up" className="flex space-x-6 text-sm text-gray-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;