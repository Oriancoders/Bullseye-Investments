import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 via-gray-50 to-white relative overflow-hidden">
      <AOSInitializer/>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center z-20 relative">
        <div data-aos="fade-up" className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
          <FaQuestion  className="w-10 h-10 text-white" />
        </div>
        
        <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
          Still Have Questions?
        </h2>
        
        <p data-aos="fade-up" className="text-xl mb-12 leading-relaxed">
          Our experienced team is ready to help you navigate the financial markets. 
          Get personalized advice and support for your investment journey.
        </p>
        
        <Link to={"/Contact"} className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default Contact;