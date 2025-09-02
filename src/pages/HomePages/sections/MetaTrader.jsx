import React from 'react';
import { Monitor, Smartphone, Download } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';

const MetaTrader = () => {
  const platforms = [
    { icon: Monitor, name: 'Windows Users', desc: 'Desktop Application', url: 'https://www.metatrader5.com/en' },
    { icon: Monitor, name: 'Apple Users', desc: 'MAC and Iphone', url: 'https://apps.apple.com/us/app/metatrader-5/id413251709' },
    { icon: Smartphone, name: 'Mobile Users', desc: 'Android', url: 'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&pli=1' }
  ];
  return (
    <section className="py-20 bg-black relative">
      <AOSInitializer />
      <span style={{
        width: 1000,
        height: 1000,
        background: `radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(255,255,255,0))`,
        filter: "blur(10px)",
        pointerEvents: "none",
      }}
        className="absolute rounded-full -left-1/2 -top-1/2" />

      <span style={{
        width: 1000,
        height: 1000,
        background: `radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(255,255,255,0))`,
        filter: "blur(10px)",
        pointerEvents: "none",
      }}
        className="absolute rounded-full -right-1/2 -bottom-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-white mb-6">MetaTrader 4 & 5</div>


          <p data-aos="fade-up" className="text-xl text-gray-100 max-w-3xl mx-auto mb-12">
            Start trading instantly with industry-standard MetaTrader platforms.
            Advanced charting, automated trading, and real-time market data at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div data-aos="zoom-in" key={index} >
              <div key={index} className='text-center p-8 pb-12 border border-white transition-all duration-300 group cursor-pointer rounded-lg  overflow-hidden relative'>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 group-hover:scale-105 transition-colors duration-300">
                  <platform.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-100 text-lg">{platform.desc}</p>
                <a href={platform.url} target='_blank' className='absolute w-fit px-4 py-2 text-black rounded-tl-2xl bg-white bottom-0 right-0 translate-x-full group-hover:translate-x-0 transition-all'>Download Now</a>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
            className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-all duration-200 transform inline-flex items-center rounded-sm"
          >
            <Download className="w-5 h-5 mr-2" />
            Download MetaTrader
          </a>
        </div>

      </div>
    </section>
  );
};

export default MetaTrader;