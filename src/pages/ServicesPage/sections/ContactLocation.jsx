import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactLocation = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '021 35164519',
      action: 'Call Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Bullseyeinvestments2025@gmail.com',
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


          {/* Map Placeholder - Quick Location Recognition */}
          <div className="h-96 bg-gradient-to-br rounded-lg overflow-hidden  from-gray-200 to-gray-300 flex items-center justify-center relative">
            <div className="flex items-start">
              <MapPin className="w-8 h-8 text-black mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-3">Head Office</h4>
                <p className="text-gray-900 leading-relaxed">
                  Office 101 Al Zara Tower Building <br />
                  198 Midway commercial B , <br />
                  Bahria Town Karachi
                </p>
              </div>
            </div>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57937.00315969949!2d66.95420112167969!3d24.8275294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d77a1325ad9%3A0xe0219b59ff25b721!2sBalad%20Trade%20Center-III%20(BTC-3)!5e0!3m2!1sen!2suk!4v1755870379000!5m2!1sen!2suk"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className='z-10'
              ></iframe> */}
          </div>

          <div className="h-96 bg-gradient-to-br rounded-lg overflow-hidden  from-gray-200 to-gray-300 flex items-center justify-center relative">

            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57937.00315969949!2d66.95420112167969!3d24.8275294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d77a1325ad9%3A0xe0219b59ff25b721!2sBalad%20Trade%20Center-III%20(BTC-3)!5e0!3m2!1sen!2suk!4v1755870379000!5m2!1sen!2suk"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className='z-10'
              ></iframe> */}
          </div>
        </div>

        {/* Contact Methods - Law of Proximity */}
        <div className=" grid md:grid-cols-3 grid-cols-1 mt-6">

          {contactMethods.map((method, index) => (
            <div key={index} className="group bg-gray-50 rounded-lg p-6  transition-all duration-300 transform ">
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r from-black to-black/80 rounded-full flex items-center justify-center mr-4  transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-black">{method.label}</div>
                  <div className="text-gray-600">{method.value}</div>
                </div>


              </div>
            </div>
          ))}


        </div>

        {/* Office Address */}
        <div className="max-w-4xl mx-auto bg-black text-white rounded-lg p-8 mt-8 flex justify-evenly">
          <div className="flex items-start">
            <MapPin className="w-8 h-8 text-white mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-3">Head Office</h4>
              <p className="text-gray-300 leading-relaxed">
                Office 101 Al Zara Tower Building <br />
                198 Midway commercial B , <br />
                Bahria Town Karachi
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-8 h-8 text-white mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-3">Corporate Office</h4>
              <p className="text-gray-300 leading-relaxed">
                1304, 13th floor Balad Trade Center 3<br />
                Boat Basin Clifton Block 7 <br />
                Karachi
              </p>
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