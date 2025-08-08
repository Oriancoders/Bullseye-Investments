import React from 'react';
import { CheckCircle, FileText, ExternalLink } from 'lucide-react';

const OpenAccount = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Choose Market',
      description: 'Select from PSX stocks, PMEX commodities, or Forex trading'
    },
    {
      icon: FileText,
      title: 'Fill Application',
      description: 'Complete our secure online form with your details'
    },
    {
      icon: ExternalLink,
      title: 'Get Started',
      description: 'Redirect to official PSX/PMEX portals for final verification'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-400 via-white to-white text-Dar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Open Your Account
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Start your investment journey in just three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gray-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-black hover:text-white transition-all duration-300 group">
                  <step.icon className="w-10 h-10 text-black group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                <p className=" leading-relaxed ">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 space-y-7">
          <button className="bg-black text-white px-12 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 ">
            Open Account Now
          </button>
          <p className="text-lg  mt-4 bg-green-600 text-white px-6 py-2 rounded-full ">Account opening is free. No hidden charges.</p>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;