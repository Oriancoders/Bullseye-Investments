import React from 'react';
import { Shield, Award, Clock, Building2 } from 'lucide-react';

const WhyChooseServices = () => {
  const features = [
    {
      icon: Shield,
      title: 'SECP-Registered',
      description: 'Legally compliant & trustworthy',
      highlight: 'Licensed & Regulated'
    },
    {
      icon: Award,
      title: 'PMEX Member',
      description: 'Direct market access for commodities trading',
      highlight: 'Active Member'
    },
    {
      icon: Clock,
      title: 'Decades of Experience',
      description: '30+ years in financial markets',
      highlight: '30+ Years'
    },
    {
      icon: Building2,
      title: 'One-Stop Investment',
      description: 'All major asset classes under one roof',
      highlight: 'Complete Solutions'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-white to-gray-300 relative overflow-hidden">
      {/* Von Restorff Effect - Unique background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">

          
          <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
            Your Trusted Investment Partner
          </h2>
          
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Built on decades of experience, regulatory compliance, and unwavering commitment to client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group ">
              {/* Unique card design for memorability */}
              <div className=" backdrop-blur-sm    p-8  transition-all duration-300 transform hover:scale-105 min-h-[300px] max-h-300 flex flex-col " >
                <div className='space-y-2'>
                  <div className="w-20 h-20 bg-black   rounded-full flex items-center justify-center mx-auto mb-6  transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                  </div>
                
                <div className=" font-bold text-sm mb-2">{feature.highlight}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseServices;