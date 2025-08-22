import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, CheckCircle } from 'lucide-react';

const PoliciesProcedures = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const policies = [
    {
      icon: Users,
      title: 'KYC (Know Your Customer)',
      content: 'Comprehensive verification process including CNIC validation, company document review, and proof of income/source of funds verification. We ensure all clients meet regulatory requirements before account activation.'
    },
    {
      icon: Shield,
      title: 'CDD (Customer Due Diligence)',
      content: 'Thorough risk profiling of all clients, ongoing monitoring of trading activities, and regular transaction reviews. Our CDD process helps identify and mitigate potential risks while ensuring compliance with international standards.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Framework',
      content: 'Our internal compliance officer ensures strict adherence to SECP directives, FATF standards, and international best practices. Regular audits and compliance reviews maintain the highest standards of regulatory compliance.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Policies & Procedures
          </h2>
          <p className="text-xl text-gray-600">
            Our commitment to regulatory compliance and best practices
          </p>
        </div>

        <div className="space-y-4">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4">
                    <policy.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">{policy.title}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">{policy.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesProcedures;