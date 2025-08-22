import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const RegisteredAgents = () => {
  const branches = [
    {
      city: 'Karachi',
      address: 'Office 101, Al Zara Tower, Building 198, Midway Commercial B, Bahria Town Karachi',
      phone: '021-35164519',
      email: 'karachi@bullseyeinvestments.com',
      position: { top: '60%', left: '25%' }
    },
    {
      city: 'Lahore',
      address: 'Suite 205, Liberty Tower, MM Alam Road, Gulberg III, Lahore',
      phone: '042-35874521',
      email: 'lahore@bullseyeinvestments.com',
      position: { top: '35%', left: '45%' }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <path d="M100 200 Q200 150 300 200 T500 250 Q600 280 700 250" 
                stroke="#000" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M150 300 Q250 250 350 300 T550 350 Q650 380 750 350" 
                stroke="#000" strokeWidth="1" fill="none" opacity="0.2"/>
          <circle cx="200" cy="280" r="3" fill="#000" opacity="0.4"/>
          <circle cx="360" cy="210" r="3" fill="#000" opacity="0.4"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Our Registered Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional service centers across Pakistan to serve you better
          </p>
        </div>

        <div className="relative">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: branch.position.top, left: branch.position.left }}
            >
              {/* Map Pin */}
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-4 h-4 text-white" />
              </div>

              {/* Branch Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                <h3 className="text-xl font-bold text-black mb-4">{branch.city} Branch</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-600 mr-3" />
                    <span className="text-gray-700 text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-600 mr-3" />
                    <span className="text-gray-700 text-sm">{branch.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Cards for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:hidden">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-black mb-4">{branch.city} Branch</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{branch.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-600 mr-3" />
                  <span className="text-gray-700 text-sm">{branch.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-600 mr-3" />
                  <span className="text-gray-700 text-sm">{branch.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisteredAgents;