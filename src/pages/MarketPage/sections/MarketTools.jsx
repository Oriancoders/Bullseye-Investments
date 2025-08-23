import React from 'react';
import { Calendar, BookOpen, Video, Download } from 'lucide-react';

const MarketTools = () => {
  const tools = [
    {
      icon: Calendar,
      title: 'Economic Calendar',
      description: 'Track important economic events and their market impact',
      action: 'View Calendar'
    },
    {
      icon: BookOpen,
      title: 'Trading Guides',
      description: 'Comprehensive guides for PSX, PMEX, and Forex markets',
      action: 'Download Guides'
    },
    {
      icon: Video,
      title: 'Educational Webinars',
      description: 'Weekly sessions with market experts and analysts',
      action: 'Register Now'
    },
    {
      icon: Download,
      title: 'Market Reports',
      description: 'Daily and weekly market analysis and insights',
      action: 'Get Reports'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Tools & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional trading tools and educational resources to enhance your market knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{tool.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
              <button className="w-full bg-gray-100 text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                {tool.action}
              </button>
            </div>
          ))}
        </div>

        {/* Demo Watchlist */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-6">Demo Watchlist</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-black mb-4">PSX Favorites</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">ENGRO</span>
                  <span className="text-green-600 font-semibold">+2.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">HUBCO</span>
                  <span className="text-green-600 font-semibold">+1.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">LUCK</span>
                  <span className="text-red-600 font-semibold">-0.5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-black mb-4">PMEX Commodities</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gold</span>
                  <span className="text-green-600 font-semibold">+1.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Crude Oil</span>
                  <span className="text-green-600 font-semibold">+0.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Silver</span>
                  <span className="text-red-600 font-semibold">-0.3%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-black mb-4">Forex Pairs</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">EUR/USD</span>
                  <span className="text-red-600 font-semibold">-0.15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GBP/USD</span>
                  <span className="text-green-600 font-semibold">+0.23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">USD/PKR</span>
                  <span className="text-green-600 font-semibold">+0.05%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTools;