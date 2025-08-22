import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Coins } from 'lucide-react';

const MarketSnapshot= () => {
  const markets = [
    {
      icon: BarChart3,
      name: 'PSX',
      fullName: 'Pakistan Stock Exchange',
      description: 'Stocks, bonds, and equity trading',
      value: '45,234.56',
      change: '+2.34%',
      trend: 'up',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Coins,
      name: 'PMEX',
      fullName: 'Pakistan Mercantile Exchange',
      description: 'Commodities and futures contracts',
      value: '$2,045.30',
      change: '+1.2%',
      trend: 'up',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DollarSign,
      name: 'Forex',
      fullName: 'Foreign Exchange',
      description: 'Currency pairs and FX trading',
      value: '1.0875',
      change: '-0.15%',
      trend: 'down',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Quick Market Snapshot
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Real-time overview of Pakistan's major financial markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r bg-amber-700 to-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <market.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Market Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">{market.name}</h3>
                <div className="text-sm text-gray-600 mb-2">{market.fullName}</div>
                <p className="text-gray-600 text-sm">{market.description}</p>
              </div>

              {/* Market Data */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-black">{market.value}</span>
                  <div className={`flex items-center ${market.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {market.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="font-semibold">{market.change}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-100 text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSnapshot;