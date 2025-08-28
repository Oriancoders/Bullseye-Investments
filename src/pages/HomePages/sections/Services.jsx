import React from 'react';
import { BarChart3, TrendingUp, Shield, DollarSign, Home, Headphones, GraduationCap, CreditCard, Video, FileText, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      // icon: Crown,
      title: "Commodities & Futures Trading",
      description: "Access gold, silver, oil, agricultural products, currencies and more through advanced platforms like MT5."
    },
    {
      // icon: FileText,
      title: "Equity & Capital Market Services",
      description: "Upon PSX trading rights approval, invest in stocks, ETFs, derivatives, and fixed income instruments."
    },
    {
      // icon: ShieldCheck,
      title: "Secure Clearing & Settlement",
      description: "Robust risk management and regulated clearinghouses ensure safe and transparent transactions."
    },
    {
      // icon: Monitor,
      title: "Digital Trading Solutions",
      description: "Seamless trading across mobile, web, and desktop platforms with cutting-edge technology."
    },
    {
      // icon: CreditCard,
      title: "Account Opening & Support",
      description: "Simplified Sahulat Accounts for retail investors and dedicated customer support services."
    },
    {
      // icon: Users,
      title: "Transparency, Technology & Trust",
      description: "Connecting you to local and global markets with efficient execution and personalized service."
    }
  ];


  return (
    <section className="py-20 bg-gradient-to-tr from-white via-white to-gray-200">
      <AOSInitializer />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p data-aos="fade-up" className="text-xl  max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your investment goals and risk profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.4 , ease : 'easeInOut'}}
              viewport={{ once: true }}
              key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className=" leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to={"/Services"} className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;