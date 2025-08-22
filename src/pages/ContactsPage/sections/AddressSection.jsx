import React from 'react';
import { Building, MapPin } from 'lucide-react';

const AddressSection = () => {
  const offices = [
    {
      type: 'Registered Office',
      icon: Building,
      address: '1304, 13th Floor, Balad Trade Center 3, Boat Basin, Clifton Block 7 – Karachi',
      highlight: true
    },
    {
      type: 'Head Office',
      icon: MapPin,
      address: 'Office 101, Al Zara Tower, Building 198, Midway Commercial B, Bahria Town Karachi',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Office Addresses
          </h2>
          <p className="text-xl text-gray-600">
            Our official business locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-lg bg-black text-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 `}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mr-4 ${
                  office.highlight 
                    ? '' 
                    : ''
                }`}>
                  <office.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{office.type}</h3>
              </div>
              
              <div className="flex items-start">
                
                <p className={`leading-relaxed text-gray-200 `}>
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressSection;