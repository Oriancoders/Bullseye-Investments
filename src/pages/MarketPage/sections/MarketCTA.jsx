import React from 'react';
import { ExternalLink, UserPlus } from 'lucide-react';

const MarketCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
          Ready to Start Trading?
        </h2>
        
        <p className="text-xl text-green-100 mb-12 leading-relaxed">
          Join thousands of successful traders who trust Bullseye Investments 
          for their PSX, PMEX, and Forex trading needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-green-700 px-12 py-6 text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[280px] flex items-center justify-center">
            <UserPlus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Open Trading Account
          </button>
          
          <button className="border-3 border-white text-white px-12 py-6 text-xl font-bold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 min-w-[280px] flex items-center justify-center">
            <ExternalLink className="w-6 h-6 mr-3" />
            Visit Trading Portals
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-500">
          <p className="text-green-100 text-sm mb-4">Trusted by investors across Pakistan</p>
          <div className="flex justify-center items-center space-x-8 text-green-200">
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

export default MarketCTA;