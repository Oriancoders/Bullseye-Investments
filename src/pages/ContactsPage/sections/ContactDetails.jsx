import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const ContactDetails = () => {
  const contacts = [
    {
      icon: Phone,
      label: 'Phone',
      value: '021 35164519',
      action: 'tel:02135164519',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bullseyeinvestments25@gmail.com',
      action: 'mailto:bullseyeinvestments25@gmail.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.bullseyeinvestments.com',
      action: 'https://www.bullseyeinvestments.com',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Contact Details
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with our professional team
          </p>
        </div>

        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg">{contact.label}</div>
                    <div className="text-gray-600">{contact.value}</div>
                  </div>
                </div>
                
                <a
                  href={contact.action}
                  className={`bg-black text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;