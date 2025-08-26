import React from 'react';
import { Clock, Shield, Eye, Building } from 'lucide-react';

const WhyChoose = () => {
  const features = [

    {
      icon: Shield,
      title: 'SECP Licensed & PMEX Active',
      description: 'Fully regulated and compliant with all Pakistani financial authorities'
    },
    {
      icon: Eye,
      title: 'Transparent & Ethical',
      description: 'Clear pricing, honest communication, and ethical business practices always'
    },
    {
      icon: Building,
      title: 'One-Stop Financial Hub',
      description: 'Trading, insurance, and real estate services all under one trusted roof'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black  via-black to-black/80 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Investors Trust Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on decades of experience, regulatory compliance, and unwavering commitment to our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;