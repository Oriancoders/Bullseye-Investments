import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Coins } from 'lucide-react';
import logos from '../../../utils/data/logos'
const API_URL = 'https://corsproxy.io/?https://beta-restapi.sarmaaya.pk/api/dashboard/market-view';

const MarketSnapshot = () => {
  const [psx, setPsx] = useState(null);
  

  // Fetch PSX data
  useEffect(() => {
    let interval;
    const fetchPSX = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        // Find KSE100 index (PSX)
        
        const kse100 = data.response?.find(
          (item) =>
            item.symbol === 'KSE100' ||
            item.name?.toLowerCase().includes('kse-100')
        );
        setPsx(kse100);
      } catch (err) {
        setPsx(null);
      }
    };

    fetchPSX();
    interval = setInterval(fetchPSX, 60000); // 1 min

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80;
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const markets = [
    // PSX will be replaced below
    {
      icon: logos.pmex,
      name: 'PMEX',
      fullName: 'Pakistan Mercantile Exchange',
      description: 'Commodities and futures contracts',
      value: '2,045.30',
      change: '+1.2%',
      trend: 'up',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  return (
    <section id='marketssnaps' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Quick Market Snapshot
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Real-time overview of Pakistan's major financial markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dynamic PSX Card */}
          <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} style={{
                backgroundImage : `url(${logos.psx})`,
                backgroundSize : 'cover',
                backgroundPosition : 'center'
              }}/>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">PSX</h3>
              <div className="text-sm text-gray-600 mb-2">
                Pakistan Stock Exchange
              </div>
              <p className="text-gray-600 text-sm">
                Stocks, bonds, and equity trading
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              {psx ? (
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-black">
                    {psx.close?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                  <div className={`flex items-center ${psx.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {psx.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="font-semibold">
                      {psx.change > 0 ? '+' : ''}
                      {psx.change?.toFixed(2)} ({psx.changePercentage > 0 ? '+' : ''}
                      {psx.changePercentage?.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-4 text-gray-400">Loading...</div>
              )}
              <button onClick={() => scrollToSection('PSX')} className="w-full bg-gray-100 text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Other static/dynamic market cards */}
          {markets.map((market, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} style={{
                backgroundImage : `url(${market.icon})`,
                backgroundSize : 'cover',
                backgroundPosition : 'center'
              }}>
                
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">{market.name}</h3>
                <div className="text-sm text-gray-600 mb-2">{market.fullName}</div>
                <p className="text-gray-600 text-sm">{market.description}</p>
              </div>
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
                <button onClick={() => scrollToSection(market.name)} className="w-full bg-gray-100 text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
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