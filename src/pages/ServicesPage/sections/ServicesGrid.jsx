import React from 'react';
import { 
  Headphones, 
  GraduationCap, 
  UserPlus, 
  Video, 
  TrendingUp, 
  Crown,
  ArrowRight 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Headphones,
      title: '24/7 Trading Support',
      description: 'Expert guidance from professional analysts around the clock for informed decisions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Training Before Trading',
      description: 'Comprehensive education programs for new and experienced traders alike',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: UserPlus,
      title: 'Free Account Opening',
      description: 'Quick, secure, and hassle-free account setup to start trading immediately',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Video,
      title: 'Expert Webinars',
      description: 'Regular educational sessions by market experts to keep you ahead of trends',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Daily Market Updates',
      description: 'Comprehensive analysis and insights delivered daily for better opportunities',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Crown,
      title: 'Premier Client Solutions',
      description: 'Exclusive services and personalized strategies for our premium clients',
      color: 'from-gray-700 to-black'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A full spectrum of client-focused services designed to empower investors with the tools, 
            knowledge, and support they need to succeed.
          </p>
        </div>

        {/* Services Grid - Optimized for Hick's Law */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-gray-300">
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Learn More Link - Optimized for Fitts's Law */}
              <button className="group/btn inline-flex items-center text-black font-semibold hover:text-gray-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <button className="bg-black text-white px-10 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            View Detailed Service Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;