import React from 'react';
import { Calendar, Award, Globe, TrendingUp } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '1990',
      icon: Calendar,
      title: 'Foundation & Vision',
      description: 'Founded with a vision to provide comprehensive financial services with international standards and ethical practices.'
    },
    {
      year: '2005',
      icon: Award,
      title: 'SECP Registration',
      description: 'Achieved full SECP licensing, establishing our commitment to regulatory compliance and investor protection.'
    },
    {
      year: '2015',
      icon: Globe,
      title: 'PMEX Membership',
      description: 'Became an active member of Pakistan Mercantile Exchange, expanding our commodities trading capabilities.'
    },
    {
      year: '2020',
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Introduced advanced trading platforms and digital services, making financial markets more accessible to retail investors.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-white to-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Three decades of growth, innovation, and unwavering commitment to our clients
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden lg:block"></div>

          <div className="lg:space-y-10">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12`}>
                {/* Content */}
                <div className="w-full lg:hidden bg-black h-[0.1px] my-10" />

                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-0`}>
                  <div className="lg:bg-white p-8 rounded-lg lg:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <milestone.icon className="w-8 h-8 text-black mr-3" />
                      <h3 className="text-2xl font-bold text-black">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-900 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;