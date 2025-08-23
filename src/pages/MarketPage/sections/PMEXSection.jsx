import React from 'react';
import { Coins, Award, TrendingUp, ExternalLink } from 'lucide-react';

const PMEXSection = () => {
  const commodities = [
    { name: 'Gold', symbol: 'GOLD', price: '$2,045.30', change: '+1.2%', trend: 'up' },
    { name: 'Crude Oil', symbol: 'CRUDE', price: '$78.45', change: '+0.8%', trend: 'up' },
    { name: 'Silver', symbol: 'SILVER', price: '$24.67', change: '-0.3%', trend: 'down' },
    { name: 'Copper', symbol: 'COPPER', price: '$8,234', change: '+2.1%', trend: 'up' }
  ];

  return (
    <section id="pmex" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-8">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeNz5FaHp2oqhQBoGrvx5ujwnaVDtK5osi6PjJn41shmR9rWpZYR_z56x4bAsFMfHPrg&usqp=CAU' className="w-full h-full text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Pakistan Mercantile Exchange (PMEX)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Pakistan's leading commodities exchange for futures and derivatives trading. 
            Trade gold, silver, crude oil, and agricultural commodities with professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* About PMEX */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">What is PMEX?</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Pakistan Mercantile Exchange (PMEX) is the country's premier commodities exchange, 
                offering futures contracts on precious metals, energy, and agricultural products.
              </p>
              <p>
                As an active PMEX member, Bullseye Investments provides direct market access 
                with professional guidance and competitive pricing.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold text-black">PMEX Active Member</span>
                </div>
                <p className="text-sm text-gray-700">
                  Bullseye Investments is a registered and active member of PMEX, 
                  providing you with direct access to commodities markets.
                </p>
              </div>
            </div>
          </div>

          {/* Trading Hours & Info */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Trading Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Trading Hours</span>
                <span className="font-semibold text-black">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Settlement</span>
                <span className="font-semibold text-black">T+1</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Contract Size</span>
                <span className="font-semibold text-black">Varies by commodity</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Margin Requirements</span>
                <span className="font-semibold text-black">5-10% of contract value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commodities Prices */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-black mb-8">Live Commodities Prices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodities.map((commodity, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-black">{commodity.name}</h4>
                    <div className="text-sm text-gray-600">{commodity.symbol}</div>
                  </div>
                  <div className={`flex items-center ${commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${commodity.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span className="text-sm font-semibold">{commodity.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-black">{commodity.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-black rounded-lg p-8 mb-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Why Trade Commodities with Bullseye?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">PMEX Member</h4>
                <p className="text-sm">Direct market access with competitive rates</p>
              </div>
              <div>
                <Coins className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Expert Analysis</h4>
                <p className="text-sm">Daily market insights and trading signals</p>
              </div>
              <div>
                <ExternalLink className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Professional Support</h4>
                <p className="text-sm">24/7 trading assistance and guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className=" text-center flex sm:flex-row flex-col gap-4 items-center justify-center w-full">
          <button className="border-2 border-black bg-black text-white px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-105 ">
            Start Commodities Trading
          </button>
          <a href='https://mportal.pmex.com.pk/' target='_blank' className="border-2 border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-200">
            Visit PMEX Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export default PMEXSection;