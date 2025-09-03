import React from 'react';
import { Contact, ExternalLink, UserPlus } from 'lucide-react';
import ACCOUNTURL from '../../../utils/data/ACCOUNTURL';
import { Link } from 'react-router-dom';

const MarketCTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Start Trading?
        </h2>
        
        <p className="text-xl text-white mb-12 leading-relaxed">
          Join thousands of successful traders who trust Bullseye Investments 
          for their PSX, PMEX, and Forex trading needs.
        </p>
        
   

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center  max-w-2xl mx-auto">

          <Link  data-aos="fade-up" to={"/Contact"} className="bg-white text-black px-4 py-4 font-semibold hover:bg-gray-200 transition-all duration-200 transform inline-flex items-center group rounded-sm gap-x-2 flex-1 max-w-[250px] justify-center">
            Contact Bullseye
            <Contact className="w-6 h-6 mr-3 group-hover:translate-x-3 transition-all" />
          </Link>
          
          <a  data-aos="fade-up" href={ACCOUNTURL} target='_blank' className="bg-white text-black px-4 py-4 font-semibold hover:bg-gray-200 transition-all duration-200 transform inline-flex items-center group rounded-sm gap-x-4 flex-1 max-w-[250px] justify-center">
             Open Trading Account 
            <UserPlus className="w-6 h-6 mr-3 group-hover:translate-x-3 transition-all" />
          </a>
        </div>
        
        <div className="mt-12 ">
          <p className="text-white text-sm mb-4">Trusted by investors across Pakistan</p>
          <div className="flex justify-center items-center space-x-8 text-white">
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

export default MarketCTA;