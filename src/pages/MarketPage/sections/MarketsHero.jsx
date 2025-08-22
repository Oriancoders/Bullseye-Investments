import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

const MarketsHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <BarChart3 className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Live Market Data & Analysis</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Markets<br />
            <span className="text-gray-300">PSX, PMEX & Forex</span><br />
            <span className="font-bold">Explained</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive market insights, live data, and educational resources to help you 
            understand and navigate Pakistan's financial markets with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 text-lg font-bold hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[200px]">
              <TrendingUp className="w-5 h-5 inline-block mr-2" />
              Explore Markets
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              Open Account
            </button>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">PSX</div>
              <div className="text-gray-400">Pakistan Stock Exchange</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">PMEX</div>
              <div className="text-gray-400">Commodities & Futures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Forex</div>
              <div className="text-gray-400">Currency Trading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsHero;