import React from 'react';
import { BarChart3, BookOpen, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-gray-300 via-white to-white text-black">
      <AOSInitializer />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up" className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            New to Trading?
          </h2>

          <p data-aos="fade-up" className="text-xl  mb-8 leading-relaxed">
            Master the fundamentals of PSX stocks, PMEX commodities, and Forex trading with our comprehensive
            educational resources. From basic concepts to advanced strategies, we guide you every step of the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center">
              <TrendingUp className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Market Basics</h3>
              <p className="">Learn fundamental analysis and market terminology</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }} 
              className="text-center">
              <BarChart3 className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Trading Strategies</h3>
              <p className="">Discover proven strategies for different markets</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }} 
              className="text-center">
              <Users className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Expert Guidance</h3>
              <p className="">Get mentorship from experienced professionals</p>
            </motion.div>
          </div>

          <Link to={"/Markets"} className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Learn Market Basics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;