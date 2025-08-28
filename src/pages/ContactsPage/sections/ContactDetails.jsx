import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';

const ContactDetails = () => {
  const contacts = [
    {
      icon: Phone,
      dial : 'Call Now',
      value: '021 35164519',
      action: 'tel:02135164519',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      dial : 'Go to gmail',
      value: 'bullseyeinvestments25@gmail.com',
      action: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccrJbWxqWJqgHsHGGnJnvzDNtBxJlGwlQqqgsClbnVfqfSddVHGhPTWklmGJTgdGxZxv',
      color: 'from-green-500 to-green-600'
    },

  ];

  return (
    <section className="py-20 bg-gray-50">
      <AOSInitializer/>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Contact Details
          </h2>
          <p data-aos="fade-up" className="text-xl text-gray-600">
            Get in touch with our professional team
          </p>
        </div>

        <div  className="space-y-6">
          {contacts.map((contact, index) => (
            <div data-aos="fade-up" key={index} className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 ">
              <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-4">
                <div className="flex sm:flex-row flex-col sm:items-center gap-4">
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
                  target='_blank'
                  className={`bg-black text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {index == 0 ? 'Call Now ' : 'Sent Email'}
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