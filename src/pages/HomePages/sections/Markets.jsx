import React from 'react';
import { TrendingUp, BarChart3, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Markets = () => {
  const markets = [
    {
      icon: TrendingUp,
      name: 'PSX',
      fullName: 'Pakistan Stock Exchange',
      status: 'Live Trading',
      highlight: '+2.3% Today'
    },
    {
      icon: BarChart3,
      name: 'PMEX',
      fullName: 'Pakistan Mercantile Exchange',
      status: 'Active Session',
      highlight: 'Gold: $2,045/oz'
    },
    {
      icon: DollarSign,
      name: 'Forex',
      fullName: 'Foreign Exchange',
      status: '24/5 Trading',
      highlight: 'EUR/USD: 1.0875'
    }
  ];

  return (
    <section className="py-20  text-white relative">
      <div
        className="absolute w-full h-full top-0 left-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1716279083559-ffc3a863c457?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // filter: 'blur(8px)',
        }}
      ></div>

      <span className='absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-br from-black/90 to-black/40'></span>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
            Markets Snapshot
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Real-time access to Pakistan's leading exchanges and global forex markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {markets.map((market, index) => (
            <div key={index} className="bg-gray-gra p-8 hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2 border-4 rounded-md bg-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <market.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">{market.name}</div>
                  <div className="text-sm ">{market.fullName}</div>
                </div>
              </div>

              <div className="space-y-3 text-black">
                <div className="flex justify-between items-center">
                  <span className="">Status:</span>
                  <span className="text-green-600 font-semibold">{market.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Highlight:</span>
                  <span className="text-black font-bold">{market.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={"/Markets"} className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Explore Markets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Markets;