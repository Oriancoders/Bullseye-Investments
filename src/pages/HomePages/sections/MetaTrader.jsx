import React from 'react';
import { Monitor, Smartphone, Download } from 'lucide-react';

const MetaTrader = () => {
  const platforms = [
    { icon: Monitor, name: 'Windows', desc: 'Desktop Application' },
    { icon: Monitor, name: 'Mac', desc: 'macOS Compatible' },
    { icon: Smartphone, name: 'Mobile', desc: 'iOS & Android' }
  ];

  return (
    <section className="py-20 bg-black relative">
      <span style={{
                width: 1000,
                height: 1000,
                background: `radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(255,255,255,0.01))`,
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
              className="absolute rounded-full -left-1/2 -top-1/2"/>

        <span style={{
                width: 1000,
                height: 1000,
                background: `radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(255,255,255,0.01))`,
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
              className="absolute rounded-full -right-1/2 -bottom-1/2"/>
     
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="text-4xl font-bold text-white mr-4">MetaTrader</div>
            <div className="text-2xl text-white">4 & 5</div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
            Professional Trading Platform
          </h2>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-12">
            Start trading instantly with industry-standard MetaTrader platforms. 
            Advanced charting, automated trading, and real-time market data at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center p-8 border border-gray-700 hover:border-white transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <platform.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
              <p className="text-gray-100 text-lg">{platform.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download MetaTrader
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetaTrader;