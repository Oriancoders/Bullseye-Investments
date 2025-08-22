import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">

      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Investments?
        </h2>
        
        <p className="text-xl text-gray-100 mb-12 leading-relaxed">
          Take the first step towards financial success with our expert guidance. 
          Schedule a free consultation and discover how we can help you achieve your investment goals.
        </p>
        
        {/* Primary CTA - Optimized for Fitts's Law & Serial Position Effect */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-black text-white px-8 py-6 text-lg  transition-all duration-300 transform hover:scale-105 shadow-2xl sm:w-[350px] w-full  flex items-center justify-center border-2 border-white   font-semibold hover:bg-white hover:text-black">
            <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Book a Free Consultation
          </button>
          
          <button className="border-3  text-black px-12 py-6 text-xl font-bold bg-white transition-all duration-300 transform hover:scale-105 sm:w-[350px] w-full flex items-center justify-center ">
            <Phone className="w-6 h-6 mr-3" />
            Call Us Now
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12  border-t text-white border-black/20">
          <div className="flex justify-center items-center space-x-8 ">
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