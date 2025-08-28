import React, { useEffect, useState } from 'react';
import { BarChart3, Clock, TrendingUp, TrendingDown, ExternalLink, Activity } from 'lucide-react';

const API_URL = 'https://corsproxy.io/?https://beta-restapi.sarmaaya.pk/api/dashboard/market-view';
const BASE_PERFORMERS = 'https://corsproxy.io/?https://beta-restapi.sarmaaya.pk/api/dashboard/stock-performers?type=';

const PSXSection = () => {
  const [kse100, setKse100] = useState(null);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch KSE100
  useEffect(() => {
    let interval;
    const fetchKSE100 = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const kse = data.response?.find(
          (item) =>
            item.symbol === 'KSE100' ||
            item.name?.toLowerCase().includes('kse-100')
        );
        setKse100(kse);
      } catch (err) {
        setKse100(null);
      }
    };
    fetchKSE100();
    interval = setInterval(fetchKSE100, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Gainers, Losers, Active
  useEffect(() => {
    let interval;
    const fetchPerformers = async () => {
      setLoading(true);
      try {
        const [g, l, a] = await Promise.all([
          fetch(`${BASE_PERFORMERS}gainers&page=1&limit=4`).then(r => r.json()),
          fetch(`${BASE_PERFORMERS}losers&page=1&limit=4`).then(r => r.json()),
          fetch(`${BASE_PERFORMERS}active&page=1&limit=4`).then(r => r.json()),
        ]);
        setGainers(Array.isArray(g.response?.data) ? g.response.data : []);
        setLosers(Array.isArray(l.response?.data) ? l.response.data : []);
        setActive(Array.isArray(a.response?.data) ? a.response.data : []);
      } catch (err) {
        setGainers([]);
        setLosers([]);
        setActive([]);
      }
      setLoading(false);
    };
    fetchPerformers();
    interval = setInterval(fetchPerformers, 60000);
    return () => clearInterval(interval);
  }, []);

  // Card style
  const cardClass = "rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-lg p-6 flex flex-col gap-2 hover:shadow-2xl transition-all duration-300 border border-gray-200";
  const symbolClass = "font-bold text-lg text-black";
  const priceClass = "text-gray-700 text-base";
  const changeClass = (chg) => `font-bold ${chg > 0 ? 'text-green-600' : 'text-red-600'}`;
  const volClass = "text-blue-600 font-semibold";

  return (
    <section id="PSX" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="mb-16 col-span-1">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-white shadow">
              <img src='https://dps.psx.com.pk/static/images/logo-200.png' className="w-full h-full" alt="PSX Logo" />
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
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">KSE-100 Index</span>
                  <div className="text-right">
                    <div className="font-bold text-black text-xl">
                      {kse100
                        ? kse100.close?.toLocaleString(undefined, { maximumFractionDigits: 2 })
                        : 'Loading...'}
                    </div>
                    {kse100 && (
                      <div className={`${kse100.change >= 0 ? 'text-green-600' : 'text-red-600'} text-sm flex items-center`}>
                        {kse100.change >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {kse100.change > 0 ? '+' : ''}
                        {kse100.change?.toFixed(2)} ({kse100.changePercentage > 0 ? '+' : ''}
                        {kse100.changePercentage?.toFixed(2)}%)
                      </div>
                    )}
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
        </div>
        {/* Modern Stock Performers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Top Gainers */}
          <div className={cardClass}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold text-black">Top Gainers</span>
            </div>
            {loading ? (
              <div className="text-gray-400">Loading...</div>
            ) : (
              Array.isArray(gainers) && gainers.slice(0, 4).map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className={symbolClass}>{stock.symbol}</div>
                    <div className={priceClass}>PKR {Number(stock.close).toLocaleString()}</div>
                  </div>
                  <div className={changeClass(stock.change)}>
                    +{Number(stock.change).toFixed(2)} ({Number(stock.changePercentage).toFixed(2)}%)
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Top Losers */}
          <div className={cardClass}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-black">Top Losers</span>
            </div>
            {loading ? (
              <div className="text-gray-400">Loading...</div>
            ) : (
              Array.isArray(losers) && losers.slice(0, 4).map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className={symbolClass}>{stock.symbol}</div>
                    <div className={priceClass}>PKR {Number(stock.close).toLocaleString()}</div>
                  </div>
                  <div className={changeClass(stock.change)}>
                    {Number(stock.change).toFixed(2)} ({Number(stock.changePercentage).toFixed(2)}%)
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Most Active */}
          <div className={cardClass}>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-black">Most Active</span>
            </div>
            {loading ? (
              <div className="text-gray-400">Loading...</div>
            ) : (
              Array.isArray(active) && active.slice(0, 4).map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className={symbolClass}>{stock.symbol}</div>
                    <div className={priceClass}>PKR {Number(stock.close).toLocaleString()}</div>
                  </div>
                  <div className={volClass}>
                    Vol: {Number(stock.volume).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Trading Tools */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
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
        <div className="text-center flex sm:flex-row flex-col gap-4 items-center justify-center w-full">
          <button className="border-2 border-black bg-black text-white px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-105 ">
            Start PSX Trading
          </button>
          <a href='https://dps.psx.com.pk/' target='_blank' rel="noopener noreferrer" className="border-2 border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-200">
            Visit PSX Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export default PSXSection;