import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <AOSInitializer/>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Investments?
        </h2>
        
        <p  data-aos="fade-up" className="text-xl text-gray-100 mb-12 leading-relaxed">
          Take the first step towards financial success with our expert guidance. 
          Schedule a free consultation and discover how we can help you achieve your investment goals.
        </p>
        
        {/* Primary CTA - Optimized for Fitts's Law & Serial Position Effect */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center  max-w-2xl mx-auto">

          <Link  data-aos="fade-up" to={"/Contact"} className="bg-white text-black px-4 py-4 font-semibold hover:bg-gray-200 transition-all duration-200 transform inline-flex items-center group rounded-sm gap-x-2 flex-1 max-w-[250px] justify-center">
            Free Consultation
            <Calendar className="w-6 h-6 mr-3 group-hover:translate-x-3 transition-all" />
          </Link>
          
          <a  data-aos="fade-up" href='tel:02135164519' className="bg-white text-black px-4 py-4 font-semibold hover:bg-gray-200 transition-all duration-200 transform inline-flex items-center group rounded-sm gap-x-4 flex-1 max-w-[250px] justify-center">
            Call Us Now 
            <Phone className="w-6 h-6 mr-3 group-hover:translate-x-3 transition-all" />
          </a>
        </div>
        
        {/* Trust indicators */}
        <div  data-aos="fade-in" className="mt-12  border-t text-white border-black/20">
          <div className="flex justify-center items-center space-x-8 ">
            <span className="font-semibold">SECP Licensed</span>
            <span>•</span>
            <span className="font-semibold">PMEX Member</span>
            <span>•</span>
            <span className="font-semibold">PSX Applied</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;