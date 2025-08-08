import React from 'react';
import { TrendingUp, Target } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Target className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Comprehensive Financial Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Your Gateway to<br />
            <span className="text-gray-300">Diversified Investment</span><br />
            <span className="font-bold">Success</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Expert-led financial solutions in commodities, stocks, forex, insurance, and real estate. 
            Backed by 30+ years of experience and full regulatory compliance.
          </p>

          {/* Primary CTA - Optimized for Fitts's Law */}
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-12 py-6 text-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[320px] mb-8">
            <TrendingUp className="w-6 h-6 inline-block mr-3" />
            Start Your Investment Journey
          </button>

          {/* Supporting Text */}
          <p className="text-gray-400 text-sm">
            Free consultation • SECP Licensed • PMEX Active Member
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;