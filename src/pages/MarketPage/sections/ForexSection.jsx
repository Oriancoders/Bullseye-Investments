import React from 'react';
import { DollarSign, Globe, TrendingUp, TrendingDown } from 'lucide-react';

const ForexSection = () => {
  const majorPairs = [
    { pair: 'EUR/USD', price: '1.0875', change: '-0.15%', trend: 'down' },
    { pair: 'GBP/USD', price: '1.2634', change: '+0.23%', trend: 'up' },
    { pair: 'USD/JPY', price: '149.45', change: '+0.18%', trend: 'up' },
    { pair: 'USD/PKR', price: '278.50', change: '+0.05%', trend: 'up' }
  ];

  const forexBasics = [
    {
      title: 'Currency Pairs',
      description: 'Trade major, minor, and exotic currency pairs with competitive spreads'
    },
    {
      title: 'Leverage Trading',
      description: 'Access up to 1:100 leverage for enhanced trading opportunities'
    },
    {
      title: '24/5 Markets',
      description: 'Trade around the clock from Sunday 5 PM to Friday 5 PM EST'
    },
    {
      title: 'Tight Spreads',
      description: 'Competitive pricing with spreads starting from 0.1 pips'
    }
  ];

  return (
    <section id="forex" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Foreign Exchange (Forex)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The world's largest financial market with $6+ trillion daily volume. 
            Trade major currency pairs with professional tools and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Forex Basics */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Forex Trading Basics</h3>
            <div className="space-y-6">
              {forexBasics.map((basic, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-black mb-2">{basic.title}</h4>
                  <p className="text-gray-600">{basic.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Market Overview */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Market Overview</h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">$6.6T</div>
                  <div className="text-gray-600 text-sm">Daily Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">24/5</div>
                  <div className="text-gray-600 text-sm">Trading Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">180+</div>
                  <div className="text-gray-600 text-sm">Currencies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">1:100</div>
                  <div className="text-gray-600 text-sm">Max Leverage</div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-black mb-4">Trading Sessions</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">London</span>
                    <span className="text-black">8:00 AM - 5:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">New York</span>
                    <span className="text-black">1:00 PM - 10:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tokyo</span>
                    <span className="text-black">12:00 AM - 9:00 AM GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Rates */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-black mb-8">Live Exchange Rates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorPairs.map((pair, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-black text-lg">{pair.pair}</h4>
                    <div className="text-2xl font-bold text-black mt-2">{pair.price}</div>
                  </div>
                  <div className={`flex items-center ${pair.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {pair.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm font-semibold">{pair.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forex Benefits */}
        <div className="bg-green-600 rounded-lg p-8 mb-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Why Trade Forex with Bullseye?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <Globe className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Global Markets</h4>
                <p className="text-sm">Access to all major and minor currency pairs</p>
              </div>
              <div>
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Competitive Spreads</h4>
                <p className="text-sm">Industry-leading pricing and execution</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Expert Analysis</h4>
                <p className="text-sm">Daily market insights and trading signals</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-4 font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 mr-4">
            Start Forex Trading
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
            Learn Forex Basics
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForexSection;