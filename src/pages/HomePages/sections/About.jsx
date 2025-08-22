import React from 'react';
import { Shield, Award, Globe, Users } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Shield, label: 'SECP', desc: 'Licensed' },
    { icon: Award, label: 'PMEX', desc: 'Active Member' },
    { icon: Globe, label: 'PSX', desc: 'Authorized' },
    { icon: Users, label: 'KTrade', desc: 'Partner' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-white to-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className='flex md:flex-row flex-col justify-between items-center gap-6 mb-16'>
<div className="text-left ">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            About Bullseye
          </h2>
          <p className="text-xl  max-w-4xl mx-auto leading-relaxed mb-8">
            We are a diversified financial services company with over three decades of international experience. 
            Our comprehensive platform offers trading, investment, insurance, and real estate services under one roof, 
            all backed by proper regulatory compliance and ethical practices.
          </p>
          <p className="text-xl  max-w-3xl mx-auto mb-12">
            As a SECP-licensed entity with active PMEX membership, we provide our clients with secure, 
            transparent, and professional financial services across multiple markets and asset classes.
          </p>
        </div>

        <img src="https://floretcapitals.com/wp-content/uploads/2025/07/stock-scaled-e1752190437413.png" alt="" className='md:w-1/2 w-full ' />
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {credentials.map((cred, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-colors">
                <cred.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-black text-lg">{cred.label}</div>
              <div className="">{cred.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;