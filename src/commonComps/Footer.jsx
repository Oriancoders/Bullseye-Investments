import React from 'react';
import { Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Bullseye <span className="font-light">Investments</span>
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Your trusted partner for diversified financial services. SECP licensed, 
              PMEX active, with 30+ years of international experience in trading, 
              insurance, and real estate.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">info@bullseyeinvestments.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">+92-XXX-XXXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-200 text-sm mb-4 md:mb-0">
              © 2025 Bullseye Investments Private Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-200">
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