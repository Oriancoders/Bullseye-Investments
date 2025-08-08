import React from 'react';
import { TrendingUp, Shield } from 'lucide-react';
import heroBG from '../../..//assets/heroBG.jpg'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div> */}

      <div
        className="absolute w-full h-full top-0 left-0 z-0"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // filter: 'blur(8px)',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
          variants={fadeInUp}
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Shield className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium ">SECP Licensed & PMEX Active</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="">Diversified</span>
            <br />
            <span className="font-semibold">Financial Services</span>
            <br />
            <span className="">with Global Vision</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            30+ years of international expertise in commodities, stocks, insurance, forex, and real estate.
            Your trusted partner for comprehensive financial solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              <TrendingUp className="w-5 h-5 inline-block mr-2" />
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              Open Account
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-white">Service Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white">SECP Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
