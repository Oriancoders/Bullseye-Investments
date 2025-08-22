import React from 'react';
import { BarChart3, TrendingUp, Shield, DollarSign, Home, Headphones, GraduationCap, CreditCard, Video, FileText, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "24/7 Trading Analysts Support",
      description: "Expert guidance from professional analysts around the clock"
    },
    {
      icon: GraduationCap,
      title: "Training Before Trading",
      description: "Comprehensive education programs for new and experienced traders"
    },
    {
      icon: CreditCard,
      title: "Free Online Account Opening",
      description: "Quick, secure, and hassle-free account setup process"
    },
    {
      icon: Video,
      title: "Informative Webinars/Seminars",
      description: "Regular educational sessions with market experts and analysts"
    },
    {
      icon: FileText,
      title: "Daily Market Updates",
      description: "Comprehensive market analysis and insights delivered daily"
    },
    {
      icon: Crown,
      title: "Premier Client Solutions",
      description: "Exclusive services and priority support for premium clients"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-tr from-white via-white to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your investment goals and risk profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className=" leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;