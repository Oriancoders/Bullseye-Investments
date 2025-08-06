import React from 'react';
import { BarChart3, BookOpen, TrendingUp, Users } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold   mb-6">
            New to Trading?
          </h2>
          
          <p className="text-xl  mb-8 leading-relaxed">
            Master the fundamentals of PSX stocks, PMEX commodities, and Forex trading with our comprehensive 
            educational resources. From basic concepts to advanced strategies, we guide you every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Market Basics</h3>
              <p className="">Learn fundamental analysis and market terminology</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Trading Strategies</h3>
              <p className="">Discover proven strategies for different markets</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Expert Guidance</h3>
              <p className="">Get mentorship from experienced professionals</p>
            </div>
          </div>
          
          <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Learn Market Basics
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education;