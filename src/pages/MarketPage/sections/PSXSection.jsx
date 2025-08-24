import { BarChart3, Clock, TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';

const PSXSection = () => {

  const topGainers = [
    { symbol: 'ENGRO', price: '245.50', change: '+5.2%' },
    { symbol: 'HUBCO', price: '89.75', change: '+4.8%' },
    { symbol: 'LUCK', price: '456.20', change: '+3.9%' }
  ];

  const topLosers = [
    { symbol: 'TRG', price: '67.30', change: '-2.1%' },
    { symbol: 'BYCO', price: '12.45', change: '-1.8%' },
    { symbol: 'OGDC', price: '98.60', change: '-1.5%' }
  ];

  return (
    <section id="PSX" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

            <div className=" mb-16 col-span-1">
          <div className="w-20 h-20  rounded-full flex items-center justify-center  mb-8">
            <img src='https://dps.psx.com.pk/static/images/logo-200.png' className="w-full h-full text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Pakistan Stock Exchange (PSX)
          </h2>
          <p className="text-xl text-gray-900 max-w-4xl mx-auto">
            Pakistan's premier stock exchange offering equity trading, bonds, and derivatives. 
            Home to the KSE-100 index and over 500 listed companies.
          </p>
        </div>
          {/* Market Overview */}

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Market Overview</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">KSE-100 Index</span>
                  <div className="text-right">
                    <div className="font-bold text-black">45,234.56</div>
                    <div className="text-green-600 text-sm flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +2.34%
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Trading Hours</span>
                  <span className="font-semibold text-black">9:15 AM - 3:30 PM</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-semibold text-black">PKR 7.2T</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Listed Companies</span>
                  <span className="font-semibold text-black">540+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Gainers & Losers */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top Gainers */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  Top Gainers
                </h3>
                <div className="space-y-4">
                  {topGainers.map((stock, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-semibold text-black">{stock.symbol}</div>
                        <div className="text-sm text-gray-600">PKR {stock.price}</div>
                      </div>
                      <div className="text-green-600 font-bold">{stock.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Losers */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                  <TrendingDown className="w-5 h-5 text-red-600 mr-2" />
                  Top Losers
                </h3>
                <div className="space-y-4">
                  {topLosers.map((stock, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-semibold text-black">{stock.symbol}</div>
                        <div className="text-sm text-gray-600">PKR {stock.price}</div>
                      </div>
                      <div className="text-red-600 font-bold">{stock.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Tools */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-black mb-6">Trading Tools & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-8 h-8 text-black mx-auto mb-4" />
              <h4 className="font-bold text-black mb-2">Market Hours</h4>
              <p className="text-gray-600 text-sm">Monday - Friday<br />9:15 AM - 3:30 PM</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <BarChart3 className="w-8 h-8 text-black mx-auto mb-4" />
              <h4 className="font-bold text-black mb-2">Live Charts</h4>
              <p className="text-gray-600 text-sm">Real-time market data<br />and technical analysis</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <ExternalLink className="w-8 h-8 text-black mx-auto mb-4" />
              <h4 className="font-bold text-black mb-2">PSX Portal</h4>
              <p className="text-gray-600 text-sm">Official PSX website<br />and trading platform</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className=" text-center flex sm:flex-row flex-col gap-4 items-center justify-center w-full">
          <button className="border-2 border-black bg-black text-white px-8 py-4 font-semibold  transition-all duration-200 transform hover:scale-105 ">
            Start PSX Trading
          </button>
          <a href='https://dps.psx.com.pk/' target='_blank' className="border-2 border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-200">
            Visit PSX Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export default PSXSection;