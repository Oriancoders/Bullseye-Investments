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
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href={ACCOUNTURL} target='_blank' className="group bg-white text-black px-12 py-6 text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[280px] flex items-center justify-center">
            <UserPlus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Open Trading Account
          </a>
          
          <Link to={"/Contact"} className="border-3 border-white text-white px-12 py-6 text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 min-w-[280px] flex items-center justify-center">
            <Contact className="w-6 h-6 mr-3" />
            Contact Bullseye
          </Link >
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