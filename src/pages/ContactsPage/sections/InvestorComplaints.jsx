import React from 'react';
import { User, Phone, Mail, AlertCircle } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { motion } from 'framer-motion';
const InvestorComplaints = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const top = 0;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  const officers = [
    {
      title: 'Designated Person',
      name: 'Mr. Sajid Ahmed Qureshi',
      role: 'Investor Relations'
    },
    {
      title: 'Company Secretary',
      name: 'Mr. Sajid Ahmed Qureshi',
      role: 'Corporate Affairs'
    },
    {
      title: 'Compliance Officer',
      name: 'Mr. Unwan Abbas',
      role: 'Regulatory Compliance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <AOSInitializer/>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Investor Complaints
          </h2>
          <p data-aos="fade-up" className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to addressing your concerns promptly and professionally
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {officers.map((officer, index) => (
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.4 , ease : 'easeInOut'}}
              viewport={{ once: true }}
               key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{officer.title}</h3>
              <div className="text-xl font-semibold text-gray-800 mb-1">{officer.name}</div>
              <div className="text-gray-600 text-sm">{officer.role}</div>
            </motion.div>
          ))}
        </div>

        {/* Contact Card with Animated Border */}
        <div data-aos="fade-in" className="relative">
          <div  className="absolute inset-0 bg-black rounded-2xl "></div>
          <div className="relative bg-white rounded-2xl p-8 m-1 shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-8">Contact for Complaints</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6  mr-3" />
                  <div>
                    <div className="font-semibold text-black">Phone</div>
                    <div className="text-gray-600">0321 8234243</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6  mr-3" />
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-gray-600">Bullseyeinvestment2025@gmail.com</div>
                  </div>
                </div>
              </div>
              
              <button onClick={() => scrollToSection("contactHero")} className="bg-black text-white px-12 py-4 text-lg font-bold rounded-lg hover:shadow-2xl hover:from-red-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorComplaints;