import React from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

const MarketHeatmap = () => {
  const sectors = [
    { name: 'Banking', change: '+2.4%', trend: 'up', size: 'large' },
    { name: 'Oil & Gas', change: '+1.8%', trend: 'up', size: 'large' },
    { name: 'Cement', change: '-0.5%', trend: 'down', size: 'medium' },
    { name: 'Textiles', change: '+0.9%', trend: 'up', size: 'medium' },
    { name: 'Fertilizer', change: '+3.2%', trend: 'up', size: 'medium' },
    { name: 'Power', change: '-1.2%', trend: 'down', size: 'small' },
    { name: 'Auto', change: '+1.5%', trend: 'up', size: 'small' },
    { name: 'Pharma', change: '+0.7%', trend: 'up', size: 'small' }
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'medium': return 'col-span-2 row-span-1';
      case 'small': return 'col-span-1 row-span-1';
      default: return 'col-span-1 row-span-1';
    }
  };

  const getColorClass = (trend, change) => {
    const changeValue = parseFloat(change.replace('%', ''));
    if (trend === 'up') {
      if (changeValue > 2) return 'bg-green-600 text-white';
      if (changeValue > 1) return 'bg-green-500 text-white';
      return 'bg-green-400 text-white';
    } else {
      if (changeValue < -1) return 'bg-red-600 text-white';
      return 'bg-red-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Market Trends & Heatmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual representation of sector performance and market trends across PSX
          </p>
        </div>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-96 mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`${getSizeClass(sector.size)} ${getColorClass(sector.trend, sector.change)} 
                         rounded-lg p-4 flex flex-col justify-between hover:opacity-90 transition-opacity cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-sm lg:text-base">{sector.name}</h3>
                {sector.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <TrendingDown className="w-4 h-4 flex-shrink-0" />
                )}
              </div>
              <div className="text-lg lg:text-xl font-bold">{sector.change}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-black mb-6 text-center">Performance Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded mr-3"></div>
              <span className="text-sm text-gray-700">Strong Gain (+2%+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
              <span className="text-sm text-gray-700">Moderate Gain (+1-2%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
              <span className="text-sm text-gray-700">Small Gain (0-1%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
              <span className="text-sm text-gray-700">Decline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHeatmap;