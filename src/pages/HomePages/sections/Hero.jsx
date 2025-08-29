import React from 'react';
import { TrendingUp, Shield } from 'lucide-react';
import bgHero from '../../../assets/bgHero.mp4'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { Link } from 'react-router-dom';
import ACCOUNTURL from '../../../utils/data/ACCOUNTURL';

const Hero = () => {
  return (
    <section className=" bg-gradient-to-br from-black via-gray-900 to-black relative ">
      {/* Background Pattern */}

      <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={bgHero} 
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/50 backdrop-blur-sm overflow-hidden">

      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="sm:text-center">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"   // 👈 start from hidden
            animate="visible"  // 👈 animate to visible (on mount)
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Shield className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium ">SECP Licensed & PMEX Active</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeInUp}
            initial="hidden"   // 👈 start from hidden
            animate="visible"
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="">Diversified</span>
            <br />
            <span className="font-semibold">Financial Services</span>
            <br />
            <span className="">with Global Vision</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"   // 👈 start from hidden
            animate="visible"
            className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            30+ years of international expertise in commodities, stocks, insurance, forex, and real estate.
            Your trusted partner for comprehensive financial solutions.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/Services" className="group relative px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 transform sm:hover:scale-105 min-w-[200px] sm:w-fit w-full">
              <TrendingUp className="w-5 h-5 inline-block mr-2" />
              Explore Services
            </Link>
            <a href={ACCOUNTURL} target='_blank' className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform sm:hover:scale-105 min-w-[200px] sm:w-fit w-full">
              Open Account
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-20 mt-10 pt-12 border-t border-white/20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center">
              <div className=" text-3xl font-bold text-white mb-2">2025</div>
              <div className="text-white">Founded Year</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center">
              <div className=" text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white">SECP Licensed</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center">
              <div className=" text-3xl font-bold text-white mb-2">Global</div>
              <div className="text-white">Financial Outlook</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
