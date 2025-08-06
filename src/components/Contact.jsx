import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
          <MessageCircle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
          Still Have Questions?
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Our experienced team is ready to help you navigate the financial markets. 
          Get personalized advice and support for your investment journey.
        </p>
        
        <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default Contact;