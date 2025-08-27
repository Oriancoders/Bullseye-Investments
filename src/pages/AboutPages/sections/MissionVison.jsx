import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { motion } from 'framer-motion';
const MissionVision = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver innovative, reliable, and transparent financial solutions that empower individuals and businesses to achieve their investment goals with confidence.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be Pakistan\'s most trusted diversified financial services company, setting the standard for ethical practices and client-centric solutions in the industry.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity in every transaction, Innovation in our approach, Client-first mentality, Regulatory compliance, and Sustainable growth for all stakeholders.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-white via-white to-gray-200 text-black">
      <AOSInitializer/>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-6">
            Mission, Vision & Values
          </h2>
          <p data-aos="fade-up"className="text-xl text-gray-900 max-w-3xl mx-auto">
            The principles that guide our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div key={index} 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.4 , ease : 'easeInOut'}}
              viewport={{ once: true }}
              className="group">
              <div className="lg:bg-gray-50 p-8 rounded-lg lg:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border-l-4 border-black h-full">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{pillar.title}</h3>
                <p className="text-gray-900 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;