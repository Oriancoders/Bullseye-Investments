import React from 'react';
import { TrendingUp, Globe, Target, Building, Calendar, ShieldCheck } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className=" bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden sm:pt-20 pt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Target className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">About Bullseye Investment</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold  text-white mb-6 leading-tight">
              Shaping the Future of
              <span className="block text-gray-200">Financial Services</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Bullseye Insurance Broker Pvt. Ltd. is a Private Limited Company, duly incorporated under the Companies Act, 2017 with the Securities and Exchange Commission of Pakistan (SECP).

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:p-8 p-4 border border-white/20 text-white ">
              {/* <ul className='text-xl space-y-3 mb-6'>
                <li className='flex flex-col'>
                  Company Form: 
                </li>
                <li>
                  Incorporation: 8th May 2025
                </li>
                <li>
                  License: Licensed by SECP as Futures Broker
                </li>
              </ul> */}

              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center space-y-2">
                  <Building  className="w-12 h-12 text-white mx-auto " />
                  <div className="text-xl font-bold text-white">Company Form</div>
                  <div className="text-gray-200 ">Private Limited</div>
                </div>
                <div className="text-center space-y-2">
                  <Calendar className="w-12 h-12 text-white mx-auto " />
                  <div className="text-xl font-bold text-white">Incorporation</div>
                  <div className="text-gray-200 ">8th May 2025</div>
                </div>

                <div className="text-center space-y-2">
                  <ShieldCheck className="w-12 h-12 text-white mx-auto " />
                  <div className="text-xl font-bold text-white">Licensed by</div>
                  <div className="text-gray-200 ">SECP as Futures Broker</div>
                </div>
              </div>

              <hr className='mb-6'/>
              <h1 className='text-xl font-bold text-center'>Licence No. 4(BRC-396)PMEX/SMD/2025</h1>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;