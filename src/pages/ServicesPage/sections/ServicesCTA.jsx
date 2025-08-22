import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
          Ready to Grow Your Investments?
        </h2>
        
        <p className="text-xl text-gray-100 mb-12 leading-relaxed">
          Take the first step towards financial success with our expert guidance. 
          Schedule a free consultation and discover how we can help you achieve your investment goals.
        </p>
        
        {/* Primary CTA - Optimized for Fitts's Law & Serial Position Effect */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-black text-white px-8 py-6 text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[280px] flex items-center justify-center">
            <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Book a Free Consultation
          </button>
          
          <button className="border-3  text-black px-12 py-6 text-xl font-bold bg-white transition-all duration-300 transform hover:scale-105 min-w-[280px] flex items-center justify-center">
            <Phone className="w-6 h-6 mr-3" />
            Call Us Now
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-black/20">
          <p className="text-black/70 text-sm mb-4">Trusted by thousands of investors across Pakistan</p>
          <div className="flex justify-center items-center space-x-8 text-black/60">
            <span className="font-semibold">SECP Licensed</span>
            <span>•</span>
            <span className="font-semibold">PMEX Member</span>
            <span>•</span>
            <span className="font-semibold">30+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;