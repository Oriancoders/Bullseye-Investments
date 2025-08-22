import React from 'react';
import { FileText, Scale } from 'lucide-react';

const AuditorsLegal = () => {
  const advisors = [
    {
      icon: FileText,
      category: 'Auditors',
      name: 'XYZ Chartered Accountants',
      description: 'Independent financial audit and assurance services'
    },
    {
      icon: Scale,
      category: 'Legal Advisors',
      name: 'ABC & Co. Advocates',
      description: 'Corporate legal counsel and regulatory compliance'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Auditors & Legal Advisors
          </h2>
          <p className="text-xl text-gray-600">
            Professional partners ensuring compliance and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <advisor.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">{advisor.category}</h3>
              </div>
              
              <div className="relative">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-black transition-colors">
                  {advisor.name}
                </h4>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mt-4">{advisor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditorsLegal;