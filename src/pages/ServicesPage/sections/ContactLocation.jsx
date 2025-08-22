import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactLocation = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',  
      value: '+92-XXX-XXXXXXX',
      action: 'Call Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bullseyeinvestments.com',
      action: 'Send Email',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92-XXX-XXXXXXX',
      action: 'Chat Now',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Contact & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you start your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods - Law of Proximity */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r from-black to-black/80 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-black">{method.label}</div>
                    <div className="text-gray-600">{method.value}</div>
                  </div>
                  
                  {/* Optimized for Fitts's Law - Large clickable area */}
                  <button className={`bg-gradient-to-r from-black to-black/90  text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[120px]`}>
                    {method.action}
                  </button>
                </div>
              </div>
            ))}

            {/* Office Address */}
            <div className="bg-black text-white rounded-lg p-8 mt-8">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3">Head Office</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Bullseye Investments Private Limited<br />
                    Financial District<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder - Quick Location Recognition */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h4>
                <p className="text-gray-600">
                  Google Maps integration would be embedded here<br />
                  showing our exact office location in Karachi
                </p>
                <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-6">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="font-semibold text-black mb-2">Trading Hours</div>
              <div className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</div>
            </div>
            <div>
              <div className="font-semibold text-black mb-2">Support Available</div>
              <div className="text-gray-600">24/7 Online & Phone Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;